import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { PricingTier } from '../types';
import { Check } from 'lucide-react';

const tiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    features: [
      'Basis-Zertifikat',
      'E-Mail-Versand'
    ],
    recommended: true
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 149,
    features: [
      'Premium-Zertifikat',
      'PDF-Download',
      'QR-Code',
      'E-Mail-Versand',
      'Express-Ausstellung',
      'Zusätzliche Siegel'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 499,
    features: [
      'Enterprise-Zertifikat',
      'PDF-Download',
      'QR-Code',
      'E-Mail-Versand',
      'Express-Ausstellung',
      'Zusätzliche Siegel',
      'Individuelle Anpassungen',
      'Prioritäts-Support'
    ]
  },
  {
    id: 'behoerden',
    name: 'Behörden-Special',
    price: 490,
    features: [
      'Behörden-Zertifikat',
      'PDF-Download',
      'QR-Code',
      'E-Mail-Versand',
      'Express-Ausstellung',
      'Zusätzliche Siegel',
      'Amtlich aussehende Stempel',
      '9€ günstiger als Enterprise'
    ]
  }
];

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (tierId: string) => {
    if (tierId === 'basic') {
      navigate('/questionnaire');
    }
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Preise und Pakete
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Wählen Sie das passende Paket für Ihre KI-Kompetenznachweis-Bedürfnisse
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-lg shadow-lg bg-white p-8 ${
                tier.id === 'basic' ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900">{tier.name}</h3>
                <div className="mt-4">
                  {tier.price === 0 ? (
                    <span className="text-4xl font-extrabold text-gray-900">Kostenlos</span>
                  ) : (
                    <>
                      <span className="text-4xl font-extrabold text-gray-900">€{tier.price}</span>
                      <span className="text-base font-medium text-gray-500">/Monat</span>
                    </>
                  )}
                </div>
                <ul className="mt-8 space-y-4 text-left">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-600">
                      <Check className="h-5 w-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSelectPlan(tier.id)}
                  className={`mt-8 w-full py-3 px-6 rounded-md text-base font-medium ${
                    tier.id === 'basic'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={tier.id !== 'basic'}
                >
                  {tier.id === 'basic' ? 'Jetzt auswählen' : 'Nicht verfügbar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};