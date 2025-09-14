import { CyclePhaseTemplate, LifestyleModifier, MoodEnergyModifier, SymptomModifier, Recommendation } from '../models/types';

// Cycle Phase Templates with detailed scientific backing
export const CYCLE_PHASE_TEMPLATES: Record<string, CyclePhaseTemplate> = {
  menstrual: {
    phase: 'menstrual',
    description: 'Menstruation phase - time for rest, reflection, and gentle self-care',
    duration: '3-7 days',
    hormones: ['Low estrogen', 'Low progesterone'],
    energyPattern: 'low',
    keyFocus: ['Rest', 'Gentle movement', 'Iron-rich nutrition', 'Emotional support'],
    baseRecommendations: {
      eat: [
        {
          id: 'menstrual-iron',
          category: 'eat',
          title: 'Iron-Rich Foods',
          description: 'Include spinach, lentils, and lean red meat to replenish iron stores',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        },
        {
          id: 'menstrual-magnesium',
          category: 'eat',
          title: 'Magnesium for Cramps',
          description: 'Dark chocolate, nuts, and seeds can help reduce cramping',
          priority: 'high',
          timeOfDay: 'evening',
          difficulty: 'easy'
        },
        {
          id: 'menstrual-hydration',
          category: 'eat',
          title: 'Stay Hydrated',
          description: 'Drink warm herbal teas like ginger or chamomile for comfort',
          priority: 'medium',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        }
      ],
      move: [
        {
          id: 'menstrual-gentle-yoga',
          category: 'move',
          title: 'Gentle Yoga',
          description: 'Child\'s pose, cat-cow, and gentle twists to ease discomfort',
          priority: 'high',
          timeOfDay: 'morning',
          duration: '15-20 minutes',
          difficulty: 'easy'
        },
        {
          id: 'menstrual-walking',
          category: 'move',
          title: 'Light Walking',
          description: 'Gentle outdoor walk to boost mood and circulation',
          priority: 'medium',
          timeOfDay: 'afternoon',
          duration: '20-30 minutes',
          difficulty: 'easy'
        }
      ],
      work: [
        {
          id: 'menstrual-planning',
          category: 'work',
          title: 'Strategic Planning',
          description: 'Use introspective energy for planning and reflection',
          priority: 'high',
          timeOfDay: 'morning',
          difficulty: 'easy'
        },
        {
          id: 'menstrual-breaks',
          category: 'work',
          title: 'Regular Breaks',
          description: 'Take frequent breaks and avoid overcommitting',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        }
      ],
      connect: [
        {
          id: 'menstrual-self-care',
          category: 'connect',
          title: 'Self-Care Ritual',
          description: 'Warm bath, journaling, or meditation for emotional wellness',
          priority: 'high',
          timeOfDay: 'evening',
          duration: '30-45 minutes',
          difficulty: 'easy'
        }
      ]
    },
    commonSymptoms: ['cramps', 'fatigue', 'mood swings', 'bloating', 'back pain'],
    nutritionalPriorities: ['Iron', 'Magnesium', 'Vitamin B6', 'Omega-3 fatty acids'],
    exerciseGuidelines: {
      intensity: 'low',
      types: ['Gentle yoga', 'Walking', 'Stretching', 'Light swimming'],
      avoid: ['High-intensity training', 'Heavy lifting']
    },
    workOptimization: {
      bestFor: ['Planning', 'Reflection', 'Creative thinking', 'Administrative tasks'],
      avoid: ['High-pressure meetings', 'Major presentations'],
      timeManagement: 'Shorter work blocks with frequent breaks'
    },
    socialNeeds: {
      preference: 'solitude',
      activities: ['Quiet time with close friends', 'Solo activities', 'Gentle support']
    }
  },

  follicular: {
    phase: 'follicular',
    description: 'Follicular phase - energy building, new beginnings, and fresh starts',
    duration: '7-10 days',
    hormones: ['Rising estrogen'],
    energyPattern: 'building',
    keyFocus: ['New projects', 'Learning', 'Building habits', 'Social connections'],
    baseRecommendations: {
      eat: [
        {
          id: 'follicular-protein',
          category: 'eat',
          title: 'Lean Proteins',
          description: 'Support muscle building with chicken, fish, and plant proteins',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        },
        {
          id: 'follicular-complex-carbs',
          category: 'eat',
          title: 'Complex Carbohydrates',
          description: 'Fuel growing energy with quinoa, sweet potatoes, and oats',
          priority: 'medium',
          timeOfDay: 'morning',
          difficulty: 'easy'
        }
      ],
      move: [
        {
          id: 'follicular-strength',
          category: 'move',
          title: 'Strength Training',
          description: 'Build muscle with progressive resistance exercises',
          priority: 'high',
          timeOfDay: 'morning',
          duration: '45-60 minutes',
          difficulty: 'moderate'
        },
        {
          id: 'follicular-cardio',
          category: 'move',
          title: 'Moderate Cardio',
          description: 'Cycling, jogging, or dance classes to boost energy',
          priority: 'medium',
          timeOfDay: 'afternoon',
          duration: '30-45 minutes',
          difficulty: 'moderate'
        }
      ],
      work: [
        {
          id: 'follicular-new-projects',
          category: 'work',
          title: 'Start New Projects',
          description: 'Initiate new ventures and tackle challenging tasks',
          priority: 'high',
          timeOfDay: 'morning',
          difficulty: 'moderate'
        },
        {
          id: 'follicular-learning',
          category: 'work',
          title: 'Skill Development',
          description: 'Take courses, attend workshops, or learn new technologies',
          priority: 'medium',
          timeOfDay: 'anytime',
          difficulty: 'moderate'
        }
      ],
      connect: [
        {
          id: 'follicular-networking',
          category: 'connect',
          title: 'Professional Networking',
          description: 'Attend events, make new connections, and build relationships',
          priority: 'high',
          timeOfDay: 'evening',
          difficulty: 'moderate'
        }
      ]
    },
    commonSymptoms: [],
    nutritionalPriorities: ['Protein', 'Complex carbohydrates', 'B vitamins', 'Zinc'],
    exerciseGuidelines: {
      intensity: 'moderate',
      types: ['Strength training', 'Cardio', 'HIIT', 'Group fitness classes']
    },
    workOptimization: {
      bestFor: ['New projects', 'Problem-solving', 'Learning', 'Brainstorming'],
      timeManagement: 'Longer focused work sessions'
    },
    socialNeeds: {
      preference: 'social',
      activities: ['Networking events', 'Group activities', 'Meeting new people']
    }
  },

  ovulatory: {
    phase: 'ovulatory',
    description: 'Ovulation phase - peak energy, confidence, and communication',
    duration: '3-5 days',
    hormones: ['Peak estrogen', 'LH surge'],
    energyPattern: 'peak',
    keyFocus: ['High-intensity activities', 'Important meetings', 'Social events', 'Challenges'],
    baseRecommendations: {
      eat: [
        {
          id: 'ovulatory-antioxidants',
          category: 'eat',
          title: 'Antioxidant-Rich Foods',
          description: 'Berries, leafy greens, and colorful vegetables for peak performance',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        },
        {
          id: 'ovulatory-healthy-fats',
          category: 'eat',
          title: 'Healthy Fats',
          description: 'Avocados, nuts, and olive oil to support hormone production',
          priority: 'medium',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        }
      ],
      move: [
        {
          id: 'ovulatory-hiit',
          category: 'move',
          title: 'High-Intensity Training',
          description: 'HIIT workouts, sprints, or challenging fitness classes',
          priority: 'high',
          timeOfDay: 'morning',
          duration: '45-60 minutes',
          difficulty: 'challenging'
        },
        {
          id: 'ovulatory-team-sports',
          category: 'move',
          title: 'Team Sports',
          description: 'Join group fitness classes or recreational sports',
          priority: 'medium',
          timeOfDay: 'evening',
          duration: '60-90 minutes',
          difficulty: 'moderate'
        }
      ],
      work: [
        {
          id: 'ovulatory-presentations',
          category: 'work',
          title: 'Important Presentations',
          description: 'Schedule key meetings, presentations, and negotiations',
          priority: 'high',
          timeOfDay: 'morning',
          difficulty: 'challenging'
        },
        {
          id: 'ovulatory-leadership',
          category: 'work',
          title: 'Leadership Tasks',
          description: 'Take on leadership roles and make important decisions',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'challenging'
        }
      ],
      connect: [
        {
          id: 'ovulatory-social-events',
          category: 'connect',
          title: 'Social Gatherings',
          description: 'Host parties, attend events, and engage in group activities',
          priority: 'high',
          timeOfDay: 'evening',
          difficulty: 'easy'
        }
      ]
    },
    commonSymptoms: [],
    nutritionalPriorities: ['Antioxidants', 'Healthy fats', 'Fiber', 'Vitamin E'],
    exerciseGuidelines: {
      intensity: 'high',
      types: ['HIIT', 'Heavy lifting', 'Competitive sports', 'Intense cardio']
    },
    workOptimization: {
      bestFor: ['Presentations', 'Negotiations', 'Leadership', 'Public speaking'],
      timeManagement: 'Peak performance hours for important tasks'
    },
    socialNeeds: {
      preference: 'highly social',
      activities: ['Large gatherings', 'Public speaking', 'Group leadership']
    }
  },

  luteal: {
    phase: 'luteal',
    description: 'Luteal phase - focus, detail work, and preparation for rest',
    duration: '10-14 days',
    hormones: ['High progesterone', 'Declining estrogen'],
    energyPattern: 'declining',
    keyFocus: ['Detail work', 'Organization', 'Completion', 'Self-care preparation'],
    baseRecommendations: {
      eat: [
        {
          id: 'luteal-complex-carbs',
          category: 'eat',
          title: 'Steady Energy Foods',
          description: 'Complex carbs and protein to stabilize blood sugar',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        },
        {
          id: 'luteal-calcium',
          category: 'eat',
          title: 'Calcium-Rich Foods',
          description: 'Dairy, leafy greens, and almonds to reduce PMS symptoms',
          priority: 'medium',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        }
      ],
      move: [
        {
          id: 'luteal-moderate-exercise',
          category: 'move',
          title: 'Moderate Exercise',
          description: 'Steady-state cardio and moderate strength training',
          priority: 'high',
          timeOfDay: 'morning',
          duration: '30-45 minutes',
          difficulty: 'moderate'
        },
        {
          id: 'luteal-yoga',
          category: 'move',
          title: 'Restorative Yoga',
          description: 'Gentle yoga and stretching to manage stress',
          priority: 'medium',
          timeOfDay: 'evening',
          duration: '30-45 minutes',
          difficulty: 'easy'
        }
      ],
      work: [
        {
          id: 'luteal-detail-work',
          category: 'work',
          title: 'Detail-Oriented Tasks',
          description: 'Focus on editing, organizing, and completing projects',
          priority: 'high',
          timeOfDay: 'morning',
          difficulty: 'moderate'
        },
        {
          id: 'luteal-organization',
          category: 'work',
          title: 'Organization & Planning',
          description: 'Clean workspace, organize files, and plan ahead',
          priority: 'medium',
          timeOfDay: 'afternoon',
          difficulty: 'easy'
        }
      ],
      connect: [
        {
          id: 'luteal-close-friends',
          category: 'connect',
          title: 'Quality Time',
          description: 'Spend time with close friends and family in small groups',
          priority: 'high',
          timeOfDay: 'evening',
          difficulty: 'easy'
        }
      ]
    },
    commonSymptoms: ['mood swings', 'bloating', 'breast tenderness', 'food cravings'],
    nutritionalPriorities: ['Complex carbohydrates', 'Calcium', 'Magnesium', 'Vitamin D'],
    exerciseGuidelines: {
      intensity: 'moderate',
      types: ['Moderate cardio', 'Yoga', 'Pilates', 'Light strength training'],
      avoid: ['Excessive high-intensity training']
    },
    workOptimization: {
      bestFor: ['Detail work', 'Editing', 'Organization', 'Completion tasks'],
      avoid: ['High-stress situations', 'Major new initiatives'],
      timeManagement: 'Structured schedule with built-in flexibility'
    },
    socialNeeds: {
      preference: 'small groups',
      activities: ['Intimate gatherings', 'One-on-one time', 'Quiet activities']
    }
  }
};

// Lifestyle Persona Modifiers
export const LIFESTYLE_MODIFIERS: Record<string, LifestyleModifier> = {
  athlete: {
    persona: 'athlete',
    description: 'High-performance athlete focused on training and recovery',
    priorities: ['Performance optimization', 'Recovery', 'Nutrition timing'],
    workStyle: 'Disciplined and goal-oriented',
    exercisePreference: ['High-intensity training', 'Sport-specific drills', 'Recovery work'],
    nutritionFocus: ['Performance nutrition', 'Timing', 'Recovery foods'],
    socialStyle: 'Team-oriented and competitive',
    modifications: {
      eat: [
        { title: 'Pre-Workout Fuel', description: 'Optimize pre and post-workout nutrition', priority: 'high' },
        { title: 'Recovery Nutrition', description: 'Focus on protein and carb timing for recovery', priority: 'high' }
      ],
      move: [
        { title: 'Sport-Specific Training', description: 'Include sport-specific drills and techniques', priority: 'high' },
        { title: 'Recovery Sessions', description: 'Active recovery and mobility work', priority: 'high' }
      ],
      work: [
        { title: 'Training Schedule', description: 'Plan work around training schedule', priority: 'high' }
      ],
      connect: [
        { title: 'Team Activities', description: 'Engage with training partners and team', priority: 'medium' }
      ]
    }
  },
  workaholic: {
    persona: 'workaholic',
    description: 'Career-focused individual with high work demands',
    priorities: ['Productivity', 'Stress management', 'Work-life balance'],
    workStyle: 'Intense and deadline-driven',
    exercisePreference: ['Efficient workouts', 'Stress relief', 'Time-effective'],
    nutritionFocus: ['Brain food', 'Sustained energy', 'Convenience'],
    socialStyle: 'Professional networking and limited personal time',
    modifications: {
      eat: [
        { title: 'Brain-Boosting Foods', description: 'Foods that enhance cognitive function', priority: 'high' },
        { title: 'Meal Prep', description: 'Efficient meal preparation strategies', priority: 'high' }
      ],
      move: [
        { title: 'Desk Exercises', description: 'Quick exercises that can be done at work', priority: 'high' },
        { title: 'Efficient Workouts', description: 'High-impact, time-efficient exercise routines', priority: 'medium' }
      ],
      work: [
        { title: 'Productivity Hacks', description: 'Time management and efficiency strategies', priority: 'high' },
        { title: 'Stress Management', description: 'Techniques to manage work stress', priority: 'high' }
      ],
      connect: [
        { title: 'Professional Networking', description: 'Strategic relationship building', priority: 'medium' }
      ]
    }
  },
  researcher: {
    persona: 'researcher',
    description: 'Academic or research professional focused on deep work',
    priorities: ['Deep focus', 'Mental clarity', 'Sustained concentration'],
    workStyle: 'Methodical and detail-oriented',
    exercisePreference: ['Mind-body connection', 'Stress relief', 'Gentle movement'],
    nutritionFocus: ['Brain health', 'Anti-inflammatory', 'Sustained energy'],
    socialStyle: 'Intellectual discussions and quiet social time',
    modifications: {
      eat: [
        { title: 'Brain Health Foods', description: 'Omega-3 rich foods and antioxidants', priority: 'high' },
        { title: 'Focus Foods', description: 'Foods that support concentration and memory', priority: 'medium' }
      ],
      move: [
        { title: 'Movement Breaks', description: 'Regular movement to break up long study sessions', priority: 'high' },
        { title: 'Mind-Body Exercises', description: 'Yoga, tai chi, or meditative movement', priority: 'medium' }
      ],
      work: [
        { title: 'Deep Work Blocks', description: 'Extended periods of focused work', priority: 'high' },
        { title: 'Research Optimization', description: 'Strategies for effective research and writing', priority: 'medium' }
      ],
      connect: [
        { title: 'Intellectual Discussions', description: 'Engage in stimulating conversations', priority: 'medium' }
      ]
    }
  },
  engineer: {
    persona: 'engineer',
    description: 'Technical professional focused on problem-solving and innovation',
    priorities: ['Problem-solving', 'Technical skills', 'Innovation'],
    workStyle: 'Logical and systematic',
    exercisePreference: ['Structured workouts', 'Goal-oriented fitness', 'Technical sports'],
    nutritionFocus: ['Sustained energy', 'Mental clarity', 'Consistent routine'],
    socialStyle: 'Technical communities and collaborative projects',
    modifications: {
      eat: [
        { title: 'Consistent Nutrition', description: 'Regular meal timing for sustained energy', priority: 'high' },
        { title: 'Cognitive Support', description: 'Foods that support problem-solving abilities', priority: 'medium' }
      ],
      move: [
        { title: 'Structured Fitness', description: 'Systematic approach to fitness with measurable goals', priority: 'high' },
        { title: 'Posture Correction', description: 'Exercises to counteract desk work', priority: 'medium' }
      ],
      work: [
        { title: 'Problem-Solving Time', description: 'Dedicated time for complex technical challenges', priority: 'high' },
        { title: 'Skill Development', description: 'Learning new technologies and methodologies', priority: 'medium' }
      ],
      connect: [
        { title: 'Tech Communities', description: 'Engage with technical communities and forums', priority: 'medium' }
      ]
    }
  },
  'gym girlie': {
    persona: 'gym girlie',
    description: 'Fitness enthusiast focused on strength, aesthetics, and wellness',
    priorities: ['Fitness goals', 'Body composition', 'Wellness lifestyle'],
    workStyle: 'Balanced with fitness priorities',
    exercisePreference: ['Strength training', 'Aesthetic goals', 'Fitness trends'],
    nutritionFocus: ['Macro tracking', 'Body composition', 'Performance'],
    socialStyle: 'Fitness community and wellness-focused friends',
    modifications: {
      eat: [
        { title: 'Macro-Friendly Meals', description: 'Balanced macronutrients for body composition goals', priority: 'high' },
        { title: 'Pre/Post Workout', description: 'Optimized nutrition around workouts', priority: 'high' }
      ],
      move: [
        { title: 'Strength Focus', description: 'Progressive overload and strength building', priority: 'high' },
        { title: 'Aesthetic Training', description: 'Targeted exercises for physique goals', priority: 'medium' }
      ],
      work: [
        { title: 'Fitness Schedule', description: 'Plan work around gym schedule', priority: 'medium' }
      ],
      connect: [
        { title: 'Fitness Community', description: 'Connect with gym buddies and fitness enthusiasts', priority: 'high' }
      ]
    }
  }
};

// Mood and Energy Modifiers
export const MOOD_ENERGY_MODIFIERS: MoodEnergyModifier[] = [
  {
    mood: 'low',
    energy: 'very low',
    adjustments: {
      intensityMultiplier: 0.3,
      priorityShift: 'self-care',
      additionalRecommendations: [
        {
          id: 'low-mood-support',
          category: 'connect',
          title: 'Gentle Self-Care',
          description: 'Take a warm bath, listen to calming music, or practice deep breathing',
          priority: 'high',
          timeOfDay: 'anytime',
          difficulty: 'easy'
        }
      ],
      removeCategories: ['high-intensity']
    }
  },
  {
    mood: 'great',
    energy: 'very high',
    adjustments: {
      intensityMultiplier: 1.3,
      priorityShift: 'productivity',
      additionalRecommendations: [
        {
          id: 'high-energy-challenge',
          category: 'work',
          title: 'Tackle Big Goals',
          description: 'Use this high energy to make progress on important projects',
          priority: 'high',
          timeOfDay: 'morning',
          difficulty: 'challenging'
        }
      ]
    }
  }
];

// Symptom-Specific Modifiers
export const SYMPTOM_MODIFIERS: Record<string, SymptomModifier> = {
  cramps: {
    symptom: 'cramps',
    severity: 'moderate',
    recommendations: {
      add: [
        {
          id: 'cramp-relief',
          category: 'move',
          title: 'Gentle Stretching',
          description: 'Hip flexor stretches and gentle twists to ease cramping',
          priority: 'high',
          timeOfDay: 'anytime',
          duration: '10-15 minutes',
          difficulty: 'easy'
        }
      ],
      modify: [
        { category: 'move', adjustments: { difficulty: 'easy', duration: '15-20 minutes' } }
      ],
      avoid: ['high-intensity', 'core-intensive']
    }
  },
  fatigue: {
    symptom: 'fatigue',
    severity: 'moderate',
    recommendations: {
      add: [
        {
          id: 'energy-boost',
          category: 'eat',
          title: 'Energy-Boosting Snack',
          description: 'Apple with almond butter or a handful of nuts for sustained energy',
          priority: 'high',
          timeOfDay: 'afternoon',
          difficulty: 'easy'
        }
      ],
      modify: [
        { category: 'move', adjustments: { difficulty: 'easy', duration: '20-30 minutes' } },
        { category: 'work', adjustments: { priority: 'medium' } }
      ],
      avoid: ['high-intensity', 'long-duration']
    }
  },
  'mood swings': {
    symptom: 'mood swings',
    severity: 'moderate',
    recommendations: {
      add: [
        {
          id: 'mood-stabilizer',
          category: 'connect',
          title: 'Mindfulness Practice',
          description: '10-minute meditation or journaling to process emotions',
          priority: 'high',
          timeOfDay: 'morning',
          duration: '10-15 minutes',
          difficulty: 'easy'
        }
      ],
      modify: [
        { category: 'connect', adjustments: { priority: 'high' } }
      ],
      avoid: ['high-stress', 'confrontational']
    }
  }
};