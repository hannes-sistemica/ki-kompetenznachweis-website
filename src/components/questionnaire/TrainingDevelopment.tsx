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

export const TrainingDevelopment: React.FC<Props> = ({ competency, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">TEIL 4: SCHULUNG UND ENTWICKLUNG</h3>
      
      <div>
        <QuestionHeader 
          title="Beschreiben Sie Ihr KI-Notfallprotokoll:" 
          completed={competency.emergencyProtocol.trim().length > 0} 
        />
        <textarea
          id="emergencyProtocol"
          value={competency.emergencyProtocol}
          onChange={(e) => onChange('emergencyProtocol', e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Im Notfall: erst aufräumen, dann dokumentieren"
        />
      </div>

      <div>
        <QuestionHeader 
          title="Wie stellen Sie Mitarbeiterkompetenz sicher?" 
          completed={competency.employeeCompetence !== ''} 
        />
        <div className="space-y-2">
          {[
            'Regelmäßige Schulungen und Zertifizierungen',
            'Jeder muss mindestens einmal gegen ChatGPT Schach spielen',
            'Wir haben einen KI-Führerschein eingeführt',
            'Die KI schult die Mitarbeiter (was könnte schiefgehen?)'
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="employeeCompetence"
                value={option}
                checked={competency.employeeCompetence === option}
                onChange={(e) => onChange('employeeCompetence', e.target.value)}
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