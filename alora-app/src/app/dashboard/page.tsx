'use client';

import { useState, useEffect } from 'react';
import CyclePhaseIndicator from '@/components/CyclePhaseIndicator';
import RecommendationCard from '@/components/RecommendationCard';
import DailyInputForm from '@/components/DailyInputForm';
import { useCycleStore } from '@/store/cycleStore';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const { currentPhase, setCurrentPhase } = useCycleStore();

  useEffect(() => {
    // Simulate fetching data from API
    const fetchDashboardData = async () => {
      try {
        // In a real app, this would be an API call
        const response = await fetch('/api/dashboard');
        const data = await response.json();
        
        setCurrentPhase(data.currentPhase || 'follicular');
        setRecommendations(data.recommendations || []);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // Set default values if API fails
        setCurrentPhase('follicular');
        setRecommendations([
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
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [setCurrentPhase]);

  const filteredRecommendations = recommendations.filter(rec => 
    rec.phaseRelevance?.includes(currentPhase)
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      
      <div className="mb-8">
        <CyclePhaseIndicator currentPhase={currentPhase} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Today's Recommendations</h2>
          {filteredRecommendations.length > 0 ? (
            <div className="space-y-4">
              {filteredRecommendations.map(rec => (
                <RecommendationCard key={rec.id} recommendation={rec} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recommendations available for your current phase.</p>
          )}
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Daily Check-in</h2>
          <DailyInputForm />
        </div>
      </div>
    </div>
  );
}