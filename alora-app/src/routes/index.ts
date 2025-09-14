import { Router, Express, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import DailyPlanning from '../features/dailyPlanning';
import AIPersonalization from '../features/aiPersonalization';
import { FastInterface } from '../features/fastInterface';

const router = Router();

const dailyPlanning = new DailyPlanning();
const aiPersonalization = new AIPersonalization();
const fastInterface = new FastInterface();

// Validation middleware
const validateRecommendationRequest = [
  body('cyclePhase').isIn(['menstrual', 'follicular', 'ovulatory', 'luteal']).withMessage('Invalid cycle phase'),
  body('mood').isIn(['low', 'below average', 'average', 'good', 'great']).withMessage('Invalid mood level'),
  body('energy').isIn(['very low', 'low', 'moderate', 'high', 'very high']).withMessage('Invalid energy level'),
  body('symptoms').optional().isArray().withMessage('Symptoms must be an array'),
  body('lifestyle').optional().isIn(['athlete', 'workaholic', 'researcher', 'engineer', 'gym girlie']).withMessage('Invalid lifestyle')
];

// Enhanced API endpoints
router.post('/recommendations', validateRecommendationRequest, (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { cyclePhase, mood, energy, symptoms = [], lifestyle } = req.body;
    
    // Generate personalized recommendations using enhanced AI
    const recommendations = dailyPlanning.generateEnhancedPlan({
      cyclePhase,
      mood,
      energy,
      symptoms,
      lifestyle
    });

    res.json({
      success: true,
      data: {
        userInput: { cyclePhase, mood, energy, symptoms, lifestyle },
        recommendations,
        generatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate recommendations'
    });
  }
});

// Legacy endpoint for backward compatibility
router.post('/daily-plan', (req: Request, res: Response) => {
    try {
        const plan = dailyPlanning.generatePlan(req.body.phase);
        res.json({ success: true, data: plan });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to generate plan' });
    }
});

router.post('/personalization', (req: Request, res: Response) => {
    try {
        aiPersonalization.acceptWearableData(req.body);
        const adjustedPlan = aiPersonalization.adjustPlan(req.body);
        res.json({ success: true, data: adjustedPlan });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to personalize plan' });
    }
});

router.get('/dashboard', (req: Request, res: Response) => {
    try {
        // Get some sample recommendations for dashboard display
        const sampleRecommendations = [
            'Stay hydrated with 8 glasses of water',
            'Take a 20-minute walk in nature',
            'Practice 10 minutes of meditation'
        ];
        fastInterface.renderDashboard(sampleRecommendations);
        res.json({ 
            success: true, 
            data: { 
                message: 'Dashboard rendered successfully',
                recommendations: sampleRecommendations
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Failed to render dashboard' });
    }
});

// Health check endpoint
router.get('/health', (req: Request, res: Response) => {
    res.json({ 
        success: true, 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// CORS middleware for frontend integration
const corsMiddleware = (req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
};

export function setRoutes(app: Express) {
    // Apply CORS middleware
    app.use(corsMiddleware);
    
    // Mount API routes
    app.use('/api', router);
    
    // Root endpoint
    app.get('/', (req: Request, res: Response) => {
        res.json({
            message: 'Alora API - AI-Powered Lifestyle Optimization for Women\'s Cycles',
            version: '1.0.0',
            endpoints: {
                health: '/api/health',
                recommendations: 'POST /api/recommendations',
                dashboard: '/api/dashboard',
                personalization: 'POST /api/personalization'
            }
        });
    });
}

export default router;