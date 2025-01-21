import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-16">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Rechtliches</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/impressum" className="text-base text-gray-500 hover:text-gray-900">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-base text-gray-500 hover:text-gray-900">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Produkt</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/pricing" className="text-base text-gray-500 hover:text-gray-900">
                  Preise
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} KI-Kompetenznachweis-Generator. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};