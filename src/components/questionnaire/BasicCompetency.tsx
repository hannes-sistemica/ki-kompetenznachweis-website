import React from 'react';
import { Check } from 'lucide-react';
import type { CompetencyFormData } from '../../types';

interface Props {
  competency: CompetencyFormData;
  onChange: (field: keyof CompetencyFormData, value: any) => void;
  onRatingChange: (field: keyof typeof competency.regulationUnderstanding, value: number) => void;
}

interface QuestionHeaderProps {
  title: string;
  completed: boolean;
}

const QuestionHeader: React.FC<QuestionHeaderProps> = ({ title, completed }) => (
  <div className="flex items-center justify-between mb-2">
    <label className="block text-sm font-medium text-gray-700">{title}</label>
    {completed && (
      <div className="flex items-center text-green-600">
        <Check className="h-5 w-5" />
      </div>
    )}
  </div>
);

export const BasicCompetency: React.FC<Props> = ({ competency, onChange, onRatingChange }) => {
  const renderRatingScale = (field: keyof typeof competency.regulationUnderstanding, label: string) => (
    <div className="space-y-2">
      <QuestionHeader 
        title={label} 
        completed={competency.regulationUnderstanding[field] > 0} 
      />
      <div className="flex space-x-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onRatingChange(field, rating)}
            className={`w-10 h-10 rounded-full ${
              competency.regulationUnderstanding[field] === rating
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } flex items-center justify-center font-medium`}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">TEIL 1: GRUNDLEGENDE KI-KOMPETENZ</h3>
      
      <div>
        <QuestionHeader 
          title="Wie definieren Sie KI in Ihrem Unternehmen?" 
          completed={competency.aiDefinition !== ''} 
        />
        <div className="space-y-2">
          {[
            'Eine Technologie, die selbstständig lernt und Entscheidungen trifft',
            'Alles was einen Power-Knopf hat und manchmal nicht funktioniert',
            'Ein System, das Muster erkennt und daraus Vorhersagen trifft',
            'Eine digitale Ausrede für verpasste Deadlines'
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="aiDefinition"
                value={option}
                checked={competency.aiDefinition === option}
                onChange={(e) => onChange('aiDefinition', e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-medium text-gray-700">Bewerten Sie Ihr Verständnis der KI-Verordnung:</h4>
        {renderRatingScale('requirements', 'Artikel 4 Anforderungen')}
        {renderRatingScale('riskClasses', 'Risikoklassen der KI')}
        {renderRatingScale('documentation', 'Dokumentationspflichten')}
        {renderRatingScale('meetings', 'Fähigkeit, "KI" in jedem Meeting mindestens dreimal zu erwähnen')}
      </div>
    </div>
  );
};