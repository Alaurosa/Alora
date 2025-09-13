'use client';

import { useMemo } from 'react';

type CyclePhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';

interface CyclePhaseIndicatorProps {
  currentPhase: CyclePhase;
}

export default function CyclePhaseIndicator({ currentPhase }: CyclePhaseIndicatorProps) {
  const phases: CyclePhase[] = ['menstrual', 'follicular', 'ovulatory', 'luteal'];
  
  const phaseInfo = useMemo(() => {
    return {
      menstrual: {
        color: 'bg-menstrual',
        textColor: 'text-menstrual',
        label: 'Menstrual Phase',
        description: 'Focus on rest and self-care'
      },
      follicular: {
        color: 'bg-follicular',
        textColor: 'text-follicular',
        label: 'Follicular Phase',
        description: 'Great time for new projects and socializing'
      },
      ovulatory: {
        color: 'bg-ovulatory',
        textColor: 'text-ovulatory',
        label: 'Ovulatory Phase',
        description: 'Peak energy and communication skills'
      },
      luteal: {
        color: 'bg-luteal',
        textColor: 'text-luteal',
        label: 'Luteal Phase',
        description: 'Time for reflection and completion'
      }
    };
  }, []);

  const currentPhaseIndex = phases.indexOf(currentPhase);

  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">Your Cycle Phase</h3>
      
      <div className="flex items-center justify-between mb-2">
        {phases.map((phase, index) => {
          const isActive = phase === currentPhase;
          const isPast = index < currentPhaseIndex;
          
          return (
            <div key={phase} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? phaseInfo[phase].color : 'bg-gray-200'}`}
              >
                {isActive && (
                  <span className="text-white font-bold">{index + 1}</span>
                )}
                {!isActive && (
                  <span className="text-gray-600 font-bold">{index + 1}</span>
                )}
              </div>
              <span className={`text-xs mt-1 ${isActive ? phaseInfo[phase].textColor : 'text-gray-500'}`}>
                {phase.charAt(0).toUpperCase() + phase.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="relative h-2 bg-gray-200 rounded-full mt-2 mb-6">
        <div 
          className={`absolute top-0 left-0 h-2 rounded-full ${phaseInfo[currentPhase].color}`}
          style={{ width: `${(currentPhaseIndex / (phases.length - 1)) * 100}%` }}
        />
      </div>
      
      <div className="text-center">
        <h4 className={`text-lg font-medium ${phaseInfo[currentPhase].textColor}`}>
          {phaseInfo[currentPhase].label}
        </h4>
        <p className="text-gray-600">{phaseInfo[currentPhase].description}</p>
      </div>
    </div>
  );
}