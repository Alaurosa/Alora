'use client';

interface Recommendation {
  id: number;
  title: string;
  content: string;
  phaseRelevance: string[];
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export default function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const { title, content, phaseRelevance } = recommendation;
  
  // Determine card color based on phase relevance
  const getCardColor = () => {
    if (phaseRelevance.includes('menstrual')) return 'border-menstrual';
    if (phaseRelevance.includes('follicular')) return 'border-follicular';
    if (phaseRelevance.includes('ovulatory')) return 'border-ovulatory';
    if (phaseRelevance.includes('luteal')) return 'border-luteal';
    return 'border-gray-200';
  };

  return (
    <div className={`card border-l-4 ${getCardColor()}`}>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {phaseRelevance.map(phase => (
          <span 
            key={phase}
            className={`text-xs px-2 py-1 rounded-full ${
              phase === 'menstrual' ? 'bg-menstrual/10 text-menstrual' :
              phase === 'follicular' ? 'bg-follicular/10 text-follicular' :
              phase === 'ovulatory' ? 'bg-ovulatory/10 text-ovulatory' :
              'bg-luteal/10 text-luteal'
            }`}
          >
            {phase.charAt(0).toUpperCase() + phase.slice(1)}
          </span>
        ))}
      </div>
    </div>
  );
}