import { 
  UserInput, 
  RecommendationSet, 
  EnhancedPlanResponse, 
  CycleInsights,
  Recommendation,
  CyclePhase,
  MoodLevel,
  EnergyLevel,
  Symptom,
  LifestylePersona
} from '../models/types';
import { 
  CYCLE_PHASE_TEMPLATES, 
  LIFESTYLE_MODIFIERS, 
  MOOD_ENERGY_MODIFIERS, 
  SYMPTOM_MODIFIERS 
} from '../data/cycleTemplates';

class DailyPlanning {
    phase: string;
    recommendations: string[];

    constructor(phase?: string) {
        this.phase = phase || 'follicular';
        this.recommendations = [];
    }

    // Legacy method for backward compatibility
    generatePlan(phase?: string): string {
        const cyclePhase = phase || this.phase;
        return `Daily plan for phase: ${cyclePhase}`;
    }

    // Enhanced method with full AI-powered personalization
    generateEnhancedPlan(userInput: UserInput): EnhancedPlanResponse {
        try {
            // Get base template for cycle phase
            const phaseTemplate = CYCLE_PHASE_TEMPLATES[userInput.cyclePhase];
            if (!phaseTemplate) {
                throw new Error(`Invalid cycle phase: ${userInput.cyclePhase}`);
            }

            // Start with base recommendations
            let recommendations: RecommendationSet = this.deepClone(phaseTemplate.baseRecommendations);

            // Apply lifestyle modifications
            if (userInput.lifestyle) {
                recommendations = this.applyLifestyleModifications(recommendations, userInput.lifestyle);
            }

            // Apply mood and energy adjustments
            recommendations = this.applyMoodEnergyAdjustments(recommendations, userInput.mood, userInput.energy);

            // Apply symptom-specific modifications
            if (userInput.symptoms && userInput.symptoms.length > 0) {
                recommendations = this.applySymptomModifications(recommendations, userInput.symptoms);
            }

            // Remove duplicates and optimize
            recommendations = this.optimizeRecommendations(recommendations);

            // Generate cycle insights
            const cycleInsights = this.generateCycleInsights(userInput.cyclePhase, userInput);

            return {
                userInput,
                recommendations,
                generatedAt: new Date().toISOString(),
                cycleInsights
            };
        } catch (error) {
            console.error('Error in generateEnhancedPlan:', error);
            throw error;
        }
    }

    private deepClone<T>(obj: T): T {
        return JSON.parse(JSON.stringify(obj));
    }

    private applyLifestyleModifications(recommendations: RecommendationSet, lifestyle: LifestylePersona): RecommendationSet {
        const modifier = LIFESTYLE_MODIFIERS[lifestyle];
        if (!modifier) return recommendations;

        // Apply modifications for each category
        Object.keys(modifier.modifications).forEach(category => {
            const categoryKey = category as keyof RecommendationSet;
            const modifications = modifier.modifications[categoryKey];
            
            modifications.forEach(mod => {
                // Add new lifestyle-specific recommendations
                if (mod.title && mod.description) {
                    const newRec: Recommendation = {
                        id: `${lifestyle}-${category}-${Date.now()}`,
                        category: categoryKey,
                        title: mod.title,
                        description: mod.description,
                        priority: mod.priority || 'medium',
                        timeOfDay: mod.timeOfDay || 'anytime',
                        duration: mod.duration,
                        difficulty: mod.difficulty || 'moderate'
                    };
                    recommendations[categoryKey].push(newRec);
                }
            });
        });

        return recommendations;
    }

    private applyMoodEnergyAdjustments(recommendations: RecommendationSet, mood: MoodLevel, energy: EnergyLevel): RecommendationSet {
        // Find matching mood/energy modifier
        const modifier = MOOD_ENERGY_MODIFIERS.find(m => m.mood === mood && m.energy === energy);
        
        if (modifier) {
            // Apply intensity multiplier by adjusting difficulty
            Object.keys(recommendations).forEach(category => {
                const categoryKey = category as keyof RecommendationSet;
                recommendations[categoryKey] = recommendations[categoryKey].map(rec => {
                    if (modifier.adjustments.intensityMultiplier < 0.7) {
                        rec.difficulty = 'easy';
                    } else if (modifier.adjustments.intensityMultiplier > 1.2) {
                        rec.difficulty = rec.difficulty === 'easy' ? 'moderate' : 'challenging';
                    }
                    return rec;
                });
            });

            // Add additional recommendations
            modifier.adjustments.additionalRecommendations.forEach(rec => {
                const categoryKey = rec.category as keyof RecommendationSet;
                recommendations[categoryKey].push(rec);
            });

            // Remove categories if specified
            if (modifier.adjustments.removeCategories) {
                Object.keys(recommendations).forEach(category => {
                    const categoryKey = category as keyof RecommendationSet;
                    recommendations[categoryKey] = recommendations[categoryKey].filter(rec => 
                        !modifier.adjustments.removeCategories?.some(remove => 
                            rec.id.includes(remove) || rec.description.toLowerCase().includes(remove)
                        )
                    );
                });
            }
        }

        return recommendations;
    }

    private applySymptomModifications(recommendations: RecommendationSet, symptoms: Symptom[]): RecommendationSet {
        symptoms.forEach(symptom => {
            const modifier = SYMPTOM_MODIFIERS[symptom];
            if (!modifier) return;

            // Add symptom-specific recommendations
            modifier.recommendations.add.forEach(rec => {
                const categoryKey = rec.category as keyof RecommendationSet;
                recommendations[categoryKey].push(rec);
            });

            // Modify existing recommendations
            modifier.recommendations.modify.forEach(mod => {
                const categoryKey = mod.category as keyof RecommendationSet;
                recommendations[categoryKey] = recommendations[categoryKey].map(rec => ({
                    ...rec,
                    ...mod.adjustments
                }));
            });

            // Remove recommendations to avoid
            modifier.recommendations.avoid.forEach(avoid => {
                Object.keys(recommendations).forEach(category => {
                    const categoryKey = category as keyof RecommendationSet;
                    recommendations[categoryKey] = recommendations[categoryKey].filter(rec => 
                        !rec.id.includes(avoid) && 
                        !rec.description.toLowerCase().includes(avoid) &&
                        !rec.title.toLowerCase().includes(avoid)
                    );
                });
            });
        });

        return recommendations;
    }

    private optimizeRecommendations(recommendations: RecommendationSet): RecommendationSet {
        // Remove duplicates and limit to top recommendations per category
        Object.keys(recommendations).forEach(category => {
            const categoryKey = category as keyof RecommendationSet;
            
            // Remove duplicates based on title
            const seen = new Set();
            recommendations[categoryKey] = recommendations[categoryKey].filter(rec => {
                if (seen.has(rec.title)) {
                    return false;
                }
                seen.add(rec.title);
                return true;
            });

            // Sort by priority and limit to top 4 per category
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            recommendations[categoryKey] = recommendations[categoryKey]
                .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
                .slice(0, 4);
        });

        return recommendations;
    }

    private generateCycleInsights(phase: CyclePhase, userInput: UserInput): CycleInsights {
        const template = CYCLE_PHASE_TEMPLATES[phase];
        
        return {
            phase,
            description: template.description,
            keyFocus: template.keyFocus,
            energyPattern: `${template.energyPattern} energy - ${this.getEnergyDescription(template.energyPattern)}`,
            nutritionalNeeds: template.nutritionalPriorities,
            exerciseRecommendations: `${template.exerciseGuidelines.intensity} intensity: ${template.exerciseGuidelines.types.join(', ')}`,
            workOptimization: template.workOptimization.timeManagement,
            socialNeeds: `${template.socialNeeds.preference} preference: ${template.socialNeeds.activities.join(', ')}`
        };
    }

    private getEnergyDescription(pattern: string): string {
        const descriptions = {
            'low': 'Focus on rest and gentle activities',
            'building': 'Gradually increase activity levels',
            'peak': 'Optimal time for challenging activities',
            'declining': 'Maintain steady pace, prepare for rest'
        };
        return descriptions[pattern as keyof typeof descriptions] || 'Maintain balanced energy';
    }

    updateRecommendations(newRecommendations: string[]): void {
        this.recommendations = newRecommendations;
    }
}

export default DailyPlanning;