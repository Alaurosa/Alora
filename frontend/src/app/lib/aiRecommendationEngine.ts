interface UserInput {
  cyclePhase: string;
  mood: string;
  energy: string;
  symptoms: string[];
  lifestyle?: string;
}

interface Recommendation {
  title: string;
  description: string;
  tips: string[];
  priority: 'high' | 'medium' | 'low';
  category: 'nutrition' | 'movement' | 'productivity' | 'social';
}

interface RecommendationSet {
  eat: Recommendation;
  move: Recommendation;
  work: Recommendation;
  connect: Recommendation;
}

// Cycle phase templates with detailed recommendations
const cyclePhaseTemplates = {
  menstrual: {
    eat: {
      title: 'Nourish & Restore',
      description: 'Focus on iron-rich foods and anti-inflammatory nutrients to support your body during menstruation',
      baseTips: [
        'Dark leafy greens (spinach, kale) for iron replenishment',
        'Warm herbal teas (ginger, chamomile) for comfort',
        'Dark chocolate (70%+ cacao) for magnesium and mood support',
        'Avoid excess caffeine which can worsen cramps'
      ],
      priority: 'high' as const,
      category: 'nutrition' as const
    },
    move: {
      title: 'Gentle Movement',
      description: 'Light, restorative activities that honor your body\'s need for rest',
      baseTips: [
        'Gentle yoga or stretching to ease tension',
        'Short walks in nature for fresh air',
        'Light swimming if comfortable',
        'Focus on breathing exercises and meditation'
      ],
      priority: 'medium' as const,
      category: 'movement' as const
    },
    work: {
      title: 'Reflective Planning',
      description: 'Perfect time for introspection, planning, and organizing',
      baseTips: [
        'Review and organize current projects',
        'Brainstorm new ideas and creative solutions',
        'Plan goals for the upcoming cycle',
        'Avoid scheduling high-pressure deadlines'
      ],
      priority: 'medium' as const,
      category: 'productivity' as const
    },
    connect: {
      title: 'Self-Care Focus',
      description: 'Prioritize rest and intimate connections with close friends',
      baseTips: [
        'Quality time with your closest friends',
        'Cozy movie nights or reading at home',
        'Journaling or meditation practice',
        'Say no to draining social commitments'
      ],
      priority: 'high' as const,
      category: 'social' as const
    }
  },
  follicular: {
    eat: {
      title: 'Fresh & Energizing',
      description: 'Light, vibrant foods to fuel your rising energy and new beginnings',
      baseTips: [
        'Fresh fruits and colorful vegetables',
        'Lean proteins (fish, chicken, legumes)',
        'Whole grains for sustained energy',
        'Green smoothies and fresh juices'
      ],
      priority: 'medium' as const,
      category: 'nutrition' as const
    },
    move: {
      title: 'Build Momentum',
      description: 'Start new fitness routines and gradually build strength',
      baseTips: [
        'Try new workout classes or activities',
        'Begin strength training routines',
        'Cardio activities you genuinely enjoy',
        'Set new fitness goals and challenges'
      ],
      priority: 'high' as const,
      category: 'movement' as const
    },
    work: {
      title: 'New Beginnings',
      description: 'Perfect time to start new projects and learn new skills',
      baseTips: [
        'Launch new initiatives and projects',
        'Learn new skills or tools',
        'Network and make professional connections',
        'Tackle challenging problems with fresh perspective'
      ],
      priority: 'high' as const,
      category: 'productivity' as const
    },
    connect: {
      title: 'Social Expansion',
      description: 'Great time for meeting new people and expanding your social circle',
      baseTips: [
        'Attend networking events and meetups',
        'Try new social activities and hobbies',
        'Reach out to acquaintances and colleagues',
        'Join clubs, groups, or online communities'
      ],
      priority: 'medium' as const,
      category: 'social' as const
    }
  },
  ovulatory: {
    eat: {
      title: 'Peak Performance',
      description: 'Nutrient-dense foods to support your peak energy and confidence',
      baseTips: [
        'Antioxidant-rich berries and colorful vegetables',
        'Healthy fats (avocado, nuts, olive oil)',
        'Complex carbohydrates for sustained energy',
        'Stay well-hydrated with plenty of water'
      ],
      priority: 'medium' as const,
      category: 'nutrition' as const
    },
    move: {
      title: 'High Intensity',
      description: 'Take advantage of peak energy for challenging workouts',
      baseTips: [
        'High-intensity interval training (HIIT)',
        'Challenging strength training sessions',
        'Competitive sports or group fitness',
        'Push your limits safely with proper form'
      ],
      priority: 'high' as const,
      category: 'movement' as const
    },
    work: {
      title: 'Leadership & Communication',
      description: 'Leverage peak confidence for presentations and important conversations',
      baseTips: [
        'Schedule important presentations and meetings',
        'Have difficult conversations with confidence',
        'Lead team projects and initiatives',
        'Negotiate deals and make important decisions'
      ],
      priority: 'high' as const,
      category: 'productivity' as const
    },
    connect: {
      title: 'Social Confidence',
      description: 'Perfect time for public speaking and large social gatherings',
      baseTips: [
        'Attend large social events and parties',
        'Give presentations or speak publicly',
        'Host gatherings and bring people together',
        'Express yourself authentically and boldly'
      ],
      priority: 'high' as const,
      category: 'social' as const
    }
  },
  luteal: {
    eat: {
      title: 'Comfort & Balance',
      description: 'Satisfying, balanced meals to support mood and energy stability',
      baseTips: [
        'Complex carbohydrates for serotonin support',
        'Magnesium-rich foods (nuts, seeds, dark chocolate)',
        'Balanced meals with protein, healthy fats, and fiber',
        'Limit refined sugars to avoid mood swings'
      ],
      priority: 'high' as const,
      category: 'nutrition' as const
    },
    move: {
      title: 'Steady & Consistent',
      description: 'Maintain consistent, moderate exercise routines',
      baseTips: [
        'Consistent moderate cardio (walking, cycling)',
        'Yoga or Pilates for flexibility and calm',
        'Strength training with familiar routines',
        'Listen to your body and adjust intensity'
      ],
      priority: 'medium' as const,
      category: 'movement' as const
    },
    work: {
      title: 'Organization & Completion',
      description: 'Focus on finishing projects and organizing your environment',
      baseTips: [
        'Complete ongoing projects and tasks',
        'Organize your workspace and digital files',
        'Review and analyze recent work performance',
        'Prepare for the next cycle of projects'
      ],
      priority: 'medium' as const,
      category: 'productivity' as const
    },
    connect: {
      title: 'Intimate Connections',
      description: 'Focus on deeper, more meaningful relationships',
      baseTips: [
        'Spend quality time with close family and friends',
        'Have heart-to-heart conversations',
        'Practice active listening and empathy',
        'Limit large social gatherings if feeling overwhelmed'
      ],
      priority: 'medium' as const,
      category: 'social' as const
    }
  }
};

// Mood and energy modifiers
const moodModifiers = {
  low: {
    eat: ['Focus on mood-boosting foods like omega-3 rich fish', 'Consider vitamin D supplementation'],
    move: ['Gentle movement to release endorphins', 'Avoid overexertion which can worsen mood'],
    work: ['Break large tasks into smaller, manageable steps', 'Celebrate small wins'],
    connect: ['Reach out to supportive friends or family', 'Consider professional support if needed']
  },
  'below average': {
    eat: ['Include probiotic foods for gut-brain health', 'Limit alcohol and processed foods'],
    move: ['Light to moderate exercise to boost mood', 'Try outdoor activities for natural light'],
    work: ['Focus on routine tasks that provide sense of accomplishment', 'Avoid major decisions when possible'],
    connect: ['Engage in activities that bring you joy', 'Practice gratitude with loved ones']
  },
  average: {
    eat: ['Maintain balanced, regular meals', 'Stay hydrated throughout the day'],
    move: ['Continue your regular exercise routine', 'Try something new if feeling motivated'],
    work: ['Good time for steady progress on projects', 'Maintain work-life balance'],
    connect: ['Nurture existing relationships', 'Be open to new social opportunities']
  },
  good: {
    eat: ['Experiment with new healthy recipes', 'Focus on nutrient-dense whole foods'],
    move: ['Great time to challenge yourself physically', 'Try new activities or increase intensity'],
    work: ['Tackle challenging projects with confidence', 'Share your positive energy with colleagues'],
    connect: ['Plan fun activities with friends', 'Be a source of positivity for others']
  },
  great: {
    eat: ['Maintain your healthy eating habits', 'Consider meal prepping for the week'],
    move: ['Perfect time for trying new fitness challenges', 'Consider teaching or helping others'],
    work: ['Take on leadership roles', 'Mentor others and share your enthusiasm'],
    connect: ['Host gatherings or organize group activities', 'Spread joy and positivity']
  }
};

const energyModifiers = {
  'very low': {
    eat: ['Focus on easily digestible, nutrient-dense foods', 'Consider iron and B-vitamin rich foods'],
    move: ['Gentle stretching or restorative yoga', 'Prioritize rest and sleep'],
    work: ['Delegate when possible', 'Focus on essential tasks only'],
    connect: ['Ask for help and support from others', 'Limit social commitments']
  },
  low: {
    eat: ['Include energizing foods like nuts and seeds', 'Avoid energy crashes with balanced meals'],
    move: ['Light walking or gentle movement', 'Avoid intense workouts'],
    work: ['Break work into short, focused sessions', 'Take regular breaks'],
    connect: ['Choose low-energy social activities', 'Communicate your needs to others']
  },
  moderate: {
    eat: ['Maintain steady energy with balanced nutrition', 'Include complex carbohydrates'],
    move: ['Moderate exercise that feels good', 'Listen to your body\'s signals'],
    work: ['Steady progress on important tasks', 'Balance work with adequate rest'],
    connect: ['Engage in comfortable social activities', 'Maintain regular social connections']
  },
  high: {
    eat: ['Fuel your energy with nutritious meals', 'Stay hydrated during active periods'],
    move: ['Take advantage of high energy for workouts', 'Try new physical challenges'],
    work: ['Tackle demanding projects', 'Use energy for creative and challenging work'],
    connect: ['Engage in active social activities', 'Be present and engaged with others']
  },
  'very high': {
    eat: ['Ensure adequate nutrition to sustain energy', 'Don\'t skip meals despite high activity'],
    move: ['Channel energy into intense workouts', 'Consider endurance activities'],
    work: ['Perfect time for high-focus, demanding work', 'Lead important initiatives'],
    connect: ['Organize group activities', 'Be a motivating presence for others']
  }
};

// Symptom-specific recommendations
const symptomModifiers = {
  cramps: {
    eat: ['Anti-inflammatory foods like turmeric and ginger', 'Magnesium-rich foods to ease muscle tension'],
    move: ['Gentle yoga poses for cramp relief', 'Heat therapy combined with light stretching'],
    work: ['Use a heating pad while working if needed', 'Take breaks for gentle movement'],
    connect: ['Ask for understanding and support', 'Practice self-compassion']
  },
  bloating: {
    eat: ['Avoid foods that cause gas (beans, carbonated drinks)', 'Include digestive aids like peppermint tea'],
    move: ['Gentle twisting yoga poses', 'Walking to aid digestion'],
    work: ['Wear comfortable, loose clothing', 'Stay hydrated to reduce water retention'],
    connect: ['Choose comfortable social settings', 'Communicate your needs']
  },
  fatigue: {
    eat: ['Iron-rich foods if experiencing heavy flow', 'B-vitamins for energy support'],
    move: ['Gentle movement to boost circulation', 'Prioritize sleep and rest'],
    work: ['Schedule lighter workload if possible', 'Focus on essential tasks'],
    connect: ['Ask for help with daily tasks', 'Choose restful social activities']
  },
  'mood swings': {
    eat: ['Stable blood sugar with regular, balanced meals', 'Omega-3 fatty acids for mood support'],
    move: ['Regular exercise to stabilize mood', 'Stress-reducing activities like yoga'],
    work: ['Avoid making major decisions during intense swings', 'Practice stress management techniques'],
    connect: ['Communicate your needs to close friends/family', 'Practice patience with yourself and others']
  },
  headaches: {
    eat: ['Stay well-hydrated', 'Avoid trigger foods (alcohol, processed foods)'],
    move: ['Gentle neck and shoulder stretches', 'Avoid intense exercise during headaches'],
    work: ['Reduce screen time and eye strain', 'Ensure proper lighting and ergonomics'],
    connect: ['Seek quiet, calm environments', 'Ask for understanding from others']
  },
  'breast tenderness': {
    eat: ['Reduce caffeine and salt intake', 'Include anti-inflammatory foods'],
    move: ['Wear supportive sports bra during exercise', 'Gentle upper body movements'],
    work: ['Wear comfortable, supportive clothing', 'Be mindful of posture'],
    connect: ['Communicate comfort needs in physical interactions', 'Practice self-care']
  }
};

export class AIRecommendationEngine {
  generateRecommendations(userInput: UserInput): RecommendationSet {
    const { cyclePhase, mood, energy, symptoms } = userInput;
    
    // Get base recommendations for cycle phase
    const baseRecommendations = cyclePhaseTemplates[cyclePhase as keyof typeof cyclePhaseTemplates];
    
    if (!baseRecommendations) {
      throw new Error(`Unknown cycle phase: ${cyclePhase}`);
    }

    // Apply mood and energy modifiers
    const moodMods = moodModifiers[mood.toLowerCase() as keyof typeof moodModifiers] || {};
    const energyMods = energyModifiers[energy.toLowerCase() as keyof typeof energyModifiers] || {};

    // Generate personalized recommendations
    const recommendations: RecommendationSet = {
      eat: this.enhanceRecommendation(baseRecommendations.eat, moodMods.eat || [], energyMods.eat || [], symptoms, 'eat'),
      move: this.enhanceRecommendation(baseRecommendations.move, moodMods.move || [], energyMods.move || [], symptoms, 'move'),
      work: this.enhanceRecommendation(baseRecommendations.work, moodMods.work || [], energyMods.work || [], symptoms, 'work'),
      connect: this.enhanceRecommendation(baseRecommendations.connect, moodMods.connect || [], energyMods.connect || [], symptoms, 'connect')
    };

    return recommendations;
  }

  private enhanceRecommendation(
    base: any,
    moodTips: string[],
    energyTips: string[],
    symptoms: string[],
    category: string
  ): Recommendation {
    let enhancedTips = [...base.baseTips];

    // Add mood-specific tips
    enhancedTips.push(...moodTips);

    // Add energy-specific tips
    enhancedTips.push(...energyTips);

    // Add symptom-specific tips
    symptoms.forEach(symptom => {
      const symptomKey = symptom.toLowerCase().replace(/\s+/g, ' ');
      const symptomMods = symptomModifiers[symptomKey as keyof typeof symptomModifiers];
      if (symptomMods && symptomMods[category as keyof typeof symptomMods]) {
        enhancedTips.push(...(symptomMods[category as keyof typeof symptomMods] as string[]));
      }
    });

    // Remove duplicates and limit to most relevant tips
    enhancedTips = Array.from(new Set(enhancedTips)).slice(0, 6);

    return {
      title: base.title,
      description: base.description,
      tips: enhancedTips,
      priority: base.priority,
      category: base.category
    };
  }

  // Method to get lifestyle-specific modifications (for future enhancement)
  getLifestyleModifications(lifestyle: string): any {
    const lifestyleProfiles = {
      athlete: {
        move: ['Focus on recovery and performance optimization', 'Consider periodization with your cycle'],
        eat: ['Increase protein intake for muscle recovery', 'Time nutrition around training sessions']
      },
      workaholic: {
        work: ['Schedule breaks to prevent burnout', 'Use cycle awareness for productivity planning'],
        connect: ['Don\'t neglect relationships for work', 'Set boundaries between work and personal time']
      },
      researcher: {
        work: ['Align deep focus work with high-energy phases', 'Use reflective phases for analysis and writing'],
        eat: ['Brain-boosting foods like blueberries and nuts', 'Regular meals to maintain cognitive function']
      },
      engineer: {
        work: ['Problem-solving is enhanced during follicular phase', 'Use luteal phase for debugging and optimization'],
        move: ['Combat sedentary work with regular movement', 'Ergonomic considerations for long work sessions']
      },
      'gym girlie': {
        move: ['Align workout intensity with cycle phases', 'Track performance patterns across your cycle'],
        eat: ['Optimize nutrition for fitness goals', 'Consider cycle-specific supplementation']
      }
    };

    return lifestyleProfiles[lifestyle as keyof typeof lifestyleProfiles] || {};
  }
}

export const aiEngine = new AIRecommendationEngine();