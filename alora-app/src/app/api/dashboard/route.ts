import { NextResponse } from 'next/server';

export async function GET() {
  // In a real app, this would fetch data from a database
  // based on the authenticated user's information
  
  // Mock data for demonstration purposes
  const dashboardData = {
    currentPhase: 'follicular',
    dayOfCycle: 8,
    cycleLength: 28,
    recommendations: [
      {
        id: 1,
        title: 'Nutrition Tip',
        content: 'Focus on iron-rich foods during your menstrual phase.',
        phaseRelevance: ['menstrual']
      },
      {
        id: 2,
        title: 'Exercise Recommendation',
        content: 'High-intensity workouts are most effective during your follicular phase.',
        phaseRelevance: ['follicular']
      },
      {
        id: 3,
        title: 'Wellness Suggestion',
        content: 'Practice mindfulness meditation to reduce stress during your luteal phase.',
        phaseRelevance: ['luteal']
      },
      {
        id: 4,
        title: 'Productivity Tip',
        content: 'Your communication skills are heightened during the ovulatory phase - schedule important meetings now.',
        phaseRelevance: ['ovulatory']
      },
      {
        id: 5,
        title: 'Self-Care Reminder',
        content: 'Prioritize rest and gentle movement during your menstrual phase.',
        phaseRelevance: ['menstrual']
      },
      {
        id: 6,
        title: 'Energy Management',
        content: 'Your energy is rising during the follicular phase - start new projects now.',
        phaseRelevance: ['follicular']
      }
    ]
  };

  return NextResponse.json(dashboardData);
}