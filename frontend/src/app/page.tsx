'use client';

import { useState } from 'react';
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const cyclePhases = [
  {
    id: 'menstrual',
    name: 'Menstrual Phase',
    description: 'Days 1-5: Rest and reflection time',
    emoji: '🌙',
    color: 'from-red-200 to-pink-200'
  },
  {
    id: 'follicular',
    name: 'Follicular Phase',
    description: 'Days 1-13: Energy building up',
    emoji: '🌱',
    color: 'from-green-200 to-emerald-200'
  },
  {
    id: 'ovulatory',
    name: 'Ovulatory Phase',
    description: 'Days 14-16: Peak energy and confidence',
    emoji: '✨',
    color: 'from-yellow-200 to-orange-200'
  },
  {
    id: 'luteal',
    name: 'Luteal Phase',
    description: 'Days 17-28: Winding down and organizing',
    emoji: '🍂',
    color: 'from-purple-200 to-indigo-200'
  }
];

const moodLevels = [
  { id: 1, name: 'Low', emoji: '😔' },
  { id: 2, name: 'Below Average', emoji: '😐' },
  { id: 3, name: 'Average', emoji: '🙂' },
  { id: 4, name: 'Good', emoji: '😊' },
  { id: 5, name: 'Great', emoji: '😄' }
];

const energyLevels = [
  { id: 1, name: 'Very Low', emoji: '🔋' },
  { id: 2, name: 'Low', emoji: '🔋' },
  { id: 3, name: 'Moderate', emoji: '🔋🔋' },
  { id: 4, name: 'High', emoji: '🔋🔋🔋' },
  { id: 5, name: 'Very High', emoji: '⚡' }
];

const lifestylePersonas = [
  {
    id: 'athlete',
    name: 'Athlete',
    description: 'High-intensity training and performance focus',
    emoji: '🏃‍♀️',
    color: 'from-orange-200 to-red-200'
  },
  {
    id: 'workaholic',
    name: 'Workaholic',
    description: 'Career-driven with demanding schedules',
    emoji: '💼',
    color: 'from-blue-200 to-indigo-200'
  },
  {
    id: 'researcher',
    name: 'Researcher',
    description: 'Academic and intellectual pursuits',
    emoji: '🔬',
    color: 'from-teal-200 to-cyan-200'
  },
  {
    id: 'engineer',
    name: 'Engineer',
    description: 'Technical problem-solving and innovation',
    emoji: '⚙️',
    color: 'from-gray-200 to-slate-200'
  },
  {
    id: 'gym girlie',
    name: 'Gym Girlie',
    description: 'Fitness enthusiast with wellness focus',
    emoji: '💪',
    color: 'from-pink-200 to-rose-200'
  }
];

export default function Home() {
  const [selectedPhase, setSelectedPhase] = useState(cyclePhases[0]);
  const [selectedMood, setSelectedMood] = useState(moodLevels[2]);
  const [selectedEnergy, setSelectedEnergy] = useState(energyLevels[2]);
  const [selectedLifestyle, setSelectedLifestyle] = useState(lifestylePersonas[0]);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSymptomToggle = (symptom: string) => {
    setSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleGetPlan = async () => {
    setIsLoading(true);
    
    try {
      // Call the enhanced backend API
      const response = await fetch('http://localhost:3001/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cyclePhase: selectedPhase.id,
          mood: selectedMood.name.toLowerCase(),
          energy: selectedEnergy.name.toLowerCase().replace(' ', '_'),
          symptoms: symptoms,
          lifestyle: selectedLifestyle.id
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Store the recommendations in localStorage for the dashboard
        localStorage.setItem('aloraRecommendations', JSON.stringify(data.data));
        
        // Navigate to dashboard
        const params = new URLSearchParams({
          cyclePhase: selectedPhase.id,
          mood: selectedMood.name.toLowerCase(),
          energy: selectedEnergy.name.toLowerCase(),
          lifestyle: selectedLifestyle.id,
          symptoms: symptoms.join(',')
        });
        
        window.location.href = `/dashboard?${params.toString()}`;
      } else {
        console.error('Failed to get recommendations');
        // Fallback to client-side generation
        const params = new URLSearchParams({
          cyclePhase: selectedPhase.id,
          mood: selectedMood.name.toLowerCase(),
          energy: selectedEnergy.name.toLowerCase(),
          lifestyle: selectedLifestyle.id,
          symptoms: symptoms.join(',')
        });
        
        window.location.href = `/dashboard?${params.toString()}`;
      }
    } catch (error) {
      console.error('Error calling API:', error);
      // Fallback to client-side generation
      const params = new URLSearchParams({
        cyclePhase: selectedPhase.id,
        mood: selectedMood.name.toLowerCase(),
        energy: selectedEnergy.name.toLowerCase(),
        lifestyle: selectedLifestyle.id,
        symptoms: symptoms.join(',')
      });
      
      window.location.href = `/dashboard?${params.toString()}`;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-alora-soft">
      {/* Header */}
      <header className="text-center pt-12 pb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          🌸 <span className="bg-gradient-to-r from-alora-pink-600 to-alora-purple-600 bg-clip-text text-transparent">Alora</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          AI-Powered Lifestyle Optimization for Women's Cycles
        </p>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto px-4">
          Get personalized daily recommendations that adapt to your cycle phase and energy levels
        </p>
      </header>

      {/* Main Form */}
      <main className="max-w-2xl mx-auto px-4 pb-12">
        <div className="card-alora space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Tell us about your day
            </h2>
            <p className="text-gray-600">
              Help us create your personalized daily plan
            </p>
          </div>

          {/* Cycle Phase Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Current Cycle Phase
            </label>
            <Listbox value={selectedPhase} onChange={setSelectedPhase}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer rounded-2xl bg-white py-4 pl-4 pr-10 text-left shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alora-pink-500 focus:border-transparent transition-all duration-300 ease-in-out">
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">{selectedPhase.emoji}</span>
                    <span className="block truncate font-medium">{selectedPhase.name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {cyclePhases.map((phase) => (
                      <Listbox.Option
                        key={phase.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-3 pl-4 pr-4 ${
                            active ? 'bg-alora-pink-50 text-alora-pink-900' : 'text-gray-900'
                          }`
                        }
                        value={phase}
                      >
                        {({ selected }) => (
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{phase.emoji}</span>
                            <div className="flex-1">
                              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                {phase.name}
                              </span>
                              <span className="text-sm text-gray-500">{phase.description}</span>
                            </div>
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          {/* Mood Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              How are you feeling today?
            </label>
            <div className="grid grid-cols-5 gap-2">
              {moodLevels.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood)}
                  className={`p-3 rounded-xl text-center transition-all duration-300 ease-in-out ${
                    selectedMood.id === mood.id
                      ? 'bg-alora-pink-100 border-2 border-alora-pink-400 text-alora-pink-700'
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-2xl mb-1">{mood.emoji}</div>
                  <div className="text-xs font-medium">{mood.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Energy Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              What's your energy level?
            </label>
            <div className="grid grid-cols-5 gap-2">
              {energyLevels.map((energy) => (
                <button
                  key={energy.id}
                  onClick={() => setSelectedEnergy(energy)}
                  className={`p-3 rounded-xl text-center transition-all duration-300 ease-in-out ${
                    selectedEnergy.id === energy.id
                      ? 'bg-alora-purple-100 border-2 border-alora-purple-400 text-alora-purple-700'
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-2xl mb-1">{energy.emoji}</div>
                  <div className="text-xs font-medium">{energy.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Lifestyle Persona Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              What's your lifestyle?
            </label>
            <Listbox value={selectedLifestyle} onChange={setSelectedLifestyle}>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-pointer rounded-2xl bg-white py-4 pl-4 pr-10 text-left shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alora-purple-500 focus:border-transparent transition-all duration-300 ease-in-out">
                  <span className="flex items-center">
                    <span className="text-2xl mr-3">{selectedLifestyle.emoji}</span>
                    <div className="flex-1">
                      <span className="block truncate font-medium">{selectedLifestyle.name}</span>
                      <span className="block text-sm text-gray-500">{selectedLifestyle.description}</span>
                    </div>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {lifestylePersonas.map((persona) => (
                      <Listbox.Option
                        key={persona.id}
                        className={({ active }) =>
                          `relative cursor-pointer select-none py-3 pl-4 pr-4 ${
                            active ? 'bg-alora-purple-50 text-alora-purple-900' : 'text-gray-900'
                          }`
                        }
                        value={persona}
                      >
                        {({ selected }) => (
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{persona.emoji}</span>
                            <div className="flex-1">
                              <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                {persona.name}
                              </span>
                              <span className="text-sm text-gray-500">{persona.description}</span>
                            </div>
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          {/* Symptoms (Optional) */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Any symptoms today? <span className="text-gray-400">(optional)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {['Cramps', 'Bloating', 'Fatigue', 'Headache', 'Mood swings', 'Tender breasts'].map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => handleSymptomToggle(symptom)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
                    symptoms.includes(symptom)
                      ? 'bg-alora-pink-100 text-alora-pink-700 border border-alora-pink-300'
                      : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                  }`}
                >
                  {symptom}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleGetPlan}
              disabled={isLoading}
              className={`w-full btn-primary flex items-center justify-center space-x-2 text-lg transition-all duration-300 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Creating Your Plan...</span>
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5" />
                  <span>Get My Daily Plan ✨</span>
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
