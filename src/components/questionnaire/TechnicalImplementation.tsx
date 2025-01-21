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

export const TechnicalImplementation: React.FC<Props> = ({ competency, onChange }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">TEIL 2: TECHNISCHE IMPLEMENTIERUNG</h3>
      
      <div>
        <QuestionHeader 
          title="Welche KI-Systeme setzen Sie ein?" 
          completed={competency.aiSystems !== ''} 
        />
        <div className="space-y-2">
          {[
            'Machine Learning Modelle',
            'ChatGPT (aber wir nennen es "proprietäre KI-Lösung")',
            'Eine sehr motivierte Praktikantin namens K.I.',
            'Tatsächlich nur IF-THEN Statements in Excel'
          ].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="aiSystems"
                value={option}
                checked={competency.aiSystems === option}
                onChange={(e) => onChange('aiSystems', e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <QuestionHeader 
          title="Wie dokumentieren Sie Ihre KI-Systeme?" 
          completed={competency.documentation !== ''} 
        />
        <select
          value={competency.documentation}
          onChange={(e) => onChange('documentation', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Bitte wählen...</option>
          <option value="iso">Umfassende technische Dokumentation nach ISO-Standards</option>
          <option value="wiki">Ein chaotisches Confluence-Wiki</option>
          <option value="postits">Post-its an der Kaffeemaschine</option>
          <option value="self">Die KI dokumentiert sich selbst (vertraut uns)</option>
        </select>
      </div>
    </div>
  );
};