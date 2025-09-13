export interface UserInput {
    mood: string;
    energyLevel: number;
    symptoms: string[];
    cyclePhase: string;
}

export interface Recommendations {
    dailyPlan: string[];
    tips: string[];
    resources: string[];
}