// Data models for Alora API

export interface UserInput {
  cyclePhase: CyclePhase;
  mood: MoodLevel;
  energy: EnergyLevel;
  symptoms: Symptom[];
  lifestyle?: LifestylePersona;
}

export interface Recommendation {
  id: string;
  category: 'eat' | 'move' | 'work' | 'connect';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  timeOfDay?: 'morning' | 'afternoon' | 'evening' | 'anytime';
  duration?: string;
  difficulty?: 'easy' | 'moderate' | 'challenging';
}

export interface RecommendationSet {
  eat: Recommendation[];
  move: Recommendation[];
  work: Recommendation[];
  connect: Recommendation[];
}

export interface EnhancedPlanResponse {
  userInput: UserInput;
  recommendations: RecommendationSet;
  generatedAt: string;
  cycleInsights: CycleInsights;
}

export interface CycleInsights {
  phase: CyclePhase;
  description: string;
  keyFocus: string[];
  energyPattern: string;
  nutritionalNeeds: string[];
  exerciseRecommendations: string;
  workOptimization: string;
  socialNeeds: string;
}

export type CyclePhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';

export type MoodLevel = 'low' | 'below average' | 'average' | 'good' | 'great';

export type EnergyLevel = 'very low' | 'low' | 'moderate' | 'high' | 'very high';

export type LifestylePersona = 'athlete' | 'workaholic' | 'researcher' | 'engineer' | 'gym girlie';

export type Symptom = 
  | 'cramps' | 'bloating' | 'headache' | 'fatigue' | 'mood swings'
  | 'breast tenderness' | 'acne' | 'food cravings' | 'insomnia'
  | 'anxiety' | 'irritability' | 'back pain' | 'nausea';

export interface CyclePhaseTemplate {
  phase: CyclePhase;
  description: string;
  duration: string;
  hormones: string[];
  energyPattern: 'low' | 'building' | 'peak' | 'declining';
  keyFocus: string[];
  baseRecommendations: RecommendationSet;
  commonSymptoms: Symptom[];
  nutritionalPriorities: string[];
  exerciseGuidelines: {
    intensity: 'low' | 'moderate' | 'high';
    types: string[];
    avoid?: string[];
  };
  workOptimization: {
    bestFor: string[];
    avoid?: string[];
    timeManagement: string;
  };
  socialNeeds: {
    preference: 'solitude' | 'small groups' | 'social' | 'highly social';
    activities: string[];
  };
}

export interface LifestyleModifier {
  persona: LifestylePersona;
  description: string;
  priorities: string[];
  workStyle: string;
  exercisePreference: string[];
  nutritionFocus: string[];
  socialStyle: string;
  modifications: {
    eat: Partial<Recommendation>[];
    move: Partial<Recommendation>[];
    work: Partial<Recommendation>[];
    connect: Partial<Recommendation>[];
  };
}

export interface MoodEnergyModifier {
  mood: MoodLevel;
  energy: EnergyLevel;
  adjustments: {
    intensityMultiplier: number;
    priorityShift: 'self-care' | 'productivity' | 'social' | 'rest';
    additionalRecommendations: Recommendation[];
    removeCategories?: string[];
  };
}

export interface SymptomModifier {
  symptom: Symptom;
  severity: 'mild' | 'moderate' | 'severe';
  recommendations: {
    add: Recommendation[];
    modify: { category: string; adjustments: Partial<Recommendation> }[];
    avoid: string[];
  };
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  errors?: any[];
  timestamp?: string;
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
}

export interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  version: string;
  timestamp: string;
  uptime?: number;
  dependencies?: {
    database?: 'connected' | 'disconnected';
    ai_service?: 'available' | 'unavailable';
  };
}