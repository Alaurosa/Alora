'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { aiEngine } from '../lib/aiRecommendationEngine';

interface Recommendation {
  title: string;
  description: string;
  tips: string[];
}

interface DashboardData {
  cyclePhase: string;
  mood: string;
  energy: string;
  symptoms: string[];
  recommendations: {
    eat: Recommendation;
    move: Recommendation;
    work: Recommendation;
    connect: Recommendation;
  };
}

// AI-powered recommendation generation - no more static mock data!

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cyclePhase = searchParams.get('cyclePhase') || 'menstrual';
    const mood = searchParams.get('mood') || 'low';
    const energy = searchParams.get('energy') || 'tired';
    const lifestyle = searchParams.get('lifestyle') || 'athlete';
    const symptoms = searchParams.get('symptoms')?.split(',').filter(Boolean) || [];

    // First try to get recommendations from localStorage (from backend API)
    const storedRecommendations = localStorage.getItem('aloraRecommendations');
    
    if (storedRecommendations) {
      try {
        const backendData = JSON.parse(storedRecommendations);
        
        // Transform backend recommendations to dashboard format
        const transformedRecommendations = {
          eat: {
            title: 'Nourish',
            description: 'Nutrition recommendations for your cycle',
            tips: backendData.recommendations?.nutrition || ['Focus on balanced nutrition', 'Stay hydrated']
          },
          move: {
            title: 'Move',
            description: 'Movement and exercise guidance',
            tips: backendData.recommendations?.exercise || ['Stay active', 'Listen to your body']
          },
          work: {
            title: 'Work',
            description: 'Productivity and work optimization',
            tips: backendData.recommendations?.productivity || ['Focus on important tasks', 'Take regular breaks']
          },
          connect: {
            title: 'Connect',
            description: 'Social and emotional wellbeing',
            tips: backendData.recommendations?.social || ['Connect with loved ones', 'Practice self-care']
          }
        };

        setDashboardData({
          cyclePhase: cyclePhase.charAt(0).toUpperCase() + cyclePhase.slice(1),
          mood: mood.charAt(0).toUpperCase() + mood.slice(1),
          energy: energy.charAt(0).toUpperCase() + energy.slice(1),
          symptoms,
          recommendations: transformedRecommendations
        });
        
        // Clear the stored recommendations
        localStorage.removeItem('aloraRecommendations');
      } catch (error) {
        console.error('Error parsing stored recommendations:', error);
        // Fall back to AI engine
        generateFallbackRecommendations(cyclePhase, mood, energy, symptoms);
      }
    } else {
      // Fall back to AI engine if no stored recommendations
      generateFallbackRecommendations(cyclePhase, mood, energy, symptoms);
    }
    
    setLoading(false);
  }, [searchParams]);

  const generateFallbackRecommendations = (cyclePhase: string, mood: string, energy: string, symptoms: string[]) => {
    try {
      // Generate AI-powered personalized recommendations
      const recommendations = aiEngine.generateRecommendations({
        cyclePhase,
        mood,
        energy,
        symptoms
      });

      setDashboardData({
        cyclePhase: cyclePhase.charAt(0).toUpperCase() + cyclePhase.slice(1),
        mood: mood.charAt(0).toUpperCase() + mood.slice(1),
        energy: energy.charAt(0).toUpperCase() + energy.slice(1),
        symptoms,
        recommendations
      });
    } catch (error) {
      console.error('Error generating recommendations:', error);
      // Final fallback to basic recommendations
      setDashboardData({
        cyclePhase: cyclePhase.charAt(0).toUpperCase() + cyclePhase.slice(1),
        mood: mood.charAt(0).toUpperCase() + mood.slice(1),
        energy: energy.charAt(0).toUpperCase() + energy.slice(1),
        symptoms,
        recommendations: {
          eat: { title: 'Nourish', description: 'Focus on balanced nutrition', tips: ['Eat regular, balanced meals', 'Stay hydrated'] },
          move: { title: 'Move', description: 'Stay active', tips: ['Get regular exercise', 'Listen to your body'] },
          work: { title: 'Work', description: 'Stay productive', tips: ['Focus on important tasks', 'Take regular breaks'] },
          connect: { title: 'Connect', description: 'Maintain relationships', tips: ['Spend time with loved ones', 'Practice self-care'] }
        }
      });
    }
  };

  if (loading || !dashboardData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Creating your personalized plan...</p>
        </div>
      </div>
    );
  }

  const pillars = [
    { key: 'eat', title: 'Eat', icon: '🍎', color: 'from-pink-400 to-pink-600' },
    { key: 'move', title: 'Move', icon: '💪', color: 'from-purple-400 to-purple-600' },
    { key: 'work', title: 'Work', icon: '💼', color: 'from-pink-500 to-purple-500' },
    { key: 'connect', title: 'Connect', icon: '💕', color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">Your Daily Plan ✨</h1>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <span className="bg-gradient-to-r from-pink-100 to-pink-200 px-3 py-2 rounded-full font-medium border border-pink-200">
                {dashboardData.cyclePhase} Phase
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-purple-200 px-3 py-2 rounded-full font-medium border border-purple-200">
                Mood: {dashboardData.mood}
              </span>
              <span className="bg-gradient-to-r from-pink-100 to-pink-200 px-3 py-2 rounded-full font-medium border border-pink-200">
                Energy: {dashboardData.energy}
              </span>
              {dashboardData.symptoms.length > 0 && (
                <span className="bg-gradient-to-r from-purple-100 to-purple-200 px-3 py-2 rounded-full font-medium border border-purple-200">
                  Symptoms: {dashboardData.symptoms.join(', ')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((pillar) => {
            const recommendation = dashboardData.recommendations[pillar.key as keyof typeof dashboardData.recommendations];
            return (
              <div key={pillar.key} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${pillar.color} p-4 sm:p-6 text-white`}>
                  <div className="flex items-center mb-2 sm:mb-3">
                    <span className="text-2xl sm:text-3xl mr-3">{pillar.icon}</span>
                    <h2 className="text-lg sm:text-xl font-bold">{pillar.title}</h2>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{recommendation.title}</h3>
                  <p className="text-pink-50 text-sm sm:text-base">{recommendation.description}</p>
                </div>
                
                <div className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {recommendation.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-400 mr-3 mt-1 text-lg">•</span>
                        <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 sm:mt-8 text-center space-y-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Save This Plan 💾
          </button>
          <div>
            <Link href="/" className="text-gray-600 hover:text-gray-800 underline text-sm sm:text-base transition-colors">
              Create a new plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}