import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Shield } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              KI-Kompetenznachweis Generator
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-200">
              Erstellen Sie Ihr offiziell* aussehendes KI-Kompetenz-Zertifikat gemäß Art. 4 EU KI-Verordnung**
            </p>
            <div className="mt-10">
              <Link
                to="/questionnaire"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
              >
                Jetzt Zertifikat erstellen
              </Link>
            </div>
            <p className="mt-4 text-xs text-indigo-200">
              * nicht wirklich offiziell ** sehr frei interpretiert
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Professionelles Design</h3>
              <p className="mt-2 text-gray-500">
                Hochwertig gestaltete Zertifikate mit allen wichtig aussehenden Elementen
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Quasi-Official™</h3>
              <p className="mt-2 text-gray-500">
                Mit echtem QR-Code und einzigartigem Zertifikatscode
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <CheckCircle className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Sofort verfügbar</h3>
              <p className="mt-2 text-gray-500">
                PDF-Download und Versand per E-Mail innerhalb von Sekunden
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};