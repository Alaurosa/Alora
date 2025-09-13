import { Router } from 'express';
import DailyPlanning from '../features/dailyPlanning.js';
import AIPersonalization from '../features/aiPersonalization.js';
import FastInterface from '../features/fastInterface.js';

const router = Router();

const dailyPlanning = new DailyPlanning();
const aiPersonalization = new AIPersonalization();
const fastInterface = new FastInterface();

router.post('/daily-plan', (req, res) => {
    const plan = dailyPlanning.generatePlan(req.body.phase);
    res.json(plan);
});

router.post('/personalization', (req, res) => {
    aiPersonalization.acceptWearableData(req.body);
    const adjustedPlan = aiPersonalization.adjustPlan();
    res.json(adjustedPlan);
});

router.get('/dashboard', (req, res) => {
    const dashboard = fastInterface.renderDashboard();
    res.json(dashboard);
});

export default router;