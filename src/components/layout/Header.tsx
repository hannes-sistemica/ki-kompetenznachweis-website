import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">KI-Kompetenznachweis</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/faq" className="text-gray-700 hover:text-indigo-600">
              FAQ
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-indigo-600">
              Preise
            </Link>
            <Link to="/questionnaire" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Zertifikat erstellen
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};