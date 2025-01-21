import React from 'react';
import { Check } from 'lucide-react';
import type { CompetencyFormData } from '../../types';

interface Props {
  competency: CompetencyFormData;
  onChange: (field: keyof CompetencyFormData, value: any) => void;
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

export const RiskManagement: React.FC<Props> = ({ competency, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">TEIL 3: RISIKOMANAGEMENT</h3>
      
      <div>
        <QuestionHeader 
          title="Ihre KI-Risikominimierungsstrategie?" 
          completed={competency.riskStrategy !== ''} 
        />
        <div className="space-y-2">
          {[
            'Regelmäßige Audits und Überprüfungen',
            'Tägliches Backup der Kaffeemaschinen-Einstellungen',
            'Compliance-Schulungen für die KI auf Deutsch',
            'Wir haben einen Notaus-Schalter installiert (ist aber nur eine Attrappe)'
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="riskStrategy"
                value={option}
                checked={competency.riskStrategy === option}
                onChange={(e) => onChange('riskStrategy', e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};