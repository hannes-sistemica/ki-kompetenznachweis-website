import React, { useState } from 'react';
import type { QuestionnaireStep, CompetencyFormData } from '../types';
import { Check, AlertCircle } from 'lucide-react';
import { BasicCompetency } from '../components/questionnaire/BasicCompetency';
import { TechnicalImplementation } from '../components/questionnaire/TechnicalImplementation';
import { RiskManagement } from '../components/questionnaire/RiskManagement';
import { TrainingDevelopment } from '../components/questionnaire/TrainingDevelopment';
import { SubmissionStep } from '../components/questionnaire/SubmissionStep';

interface FormData {
  name: string;
  email: string;
  companyName?: string;
  companyAddress?: string;
  competency: CompetencyFormData;
}

const steps: QuestionnaireStep[] = [
  {
    id: 'personal',
    title: 'Persönliche Daten',
    description: 'Ihre Informationen'
  },
  {
    id: 'company',
    title: 'Unternehmen',
    description: 'Firmendetails'
  },
  {
    id: 'competency',
    title: 'Kompetenzen',
    description: 'KI-Fähigkeiten'
  },
  {
    id: 'submission',
    title: 'Abschluss',
    description: 'Überprüfung'
  }
];

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Questionnaire: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    companyName: '',
    companyAddress: '',
    competency: {
      aiDefinition: '',
      regulationUnderstanding: {
        requirements: 0,
        riskClasses: 0,
        documentation: 0,
        meetings: 0
      },
      aiSystems: '',
      documentation: '',
      riskStrategy: '',
      emergencyProtocol: '',
      employeeCompetence: ''
    }
  });
  const [emailTouched, setEmailTouched] = useState(false);

  const [consents, setConsents] = useState({
    dataProcessing: false,
    terms: false,
    marketing: false
  });

  const [captchaToken, setCaptchaToken] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isEmailValid = (email: string) => EMAIL_REGEX.test(email);

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleCompetencyChange = (field: keyof CompetencyFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      competency: {
        ...prev.competency,
        [field]: value
      }
    }));
  };

  const handleRatingChange = (field: keyof typeof formData.competency.regulationUnderstanding, value: number) => {
    setFormData(prev => ({
      ...prev,
      competency: {
        ...prev.competency,
        regulationUnderstanding: {
          ...prev.competency.regulationUnderstanding,
          [field]: value
        }
      }
    }));
  };

  const handleConsent = (field: string, value: boolean) => {
    setConsents(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isPersonalInfoValid = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           isEmailValid(formData.email);
  };

  const isCompanyInfoValid = () => {
    // Company info is optional, so always valid
    return true;
  };

  const isCompetencyComplete = () => {
    const { competency } = formData;
    return (
      competency.aiDefinition !== '' &&
      Object.values(competency.regulationUnderstanding).every(value => value > 0) &&
      competency.aiSystems !== '' &&
      competency.documentation !== '' &&
      competency.riskStrategy !== '' &&
      competency.emergencyProtocol.trim() !== '' &&
      competency.employeeCompetence !== ''
    );
  };

  const isSubmissionValid = () => {
    return consents.dataProcessing && 
           consents.terms && 
           captchaToken !== '';
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return isPersonalInfoValid();
      case 1:
        return isCompanyInfoValid();
      case 2:
        return isCompetencyComplete();
      case 3:
        return isSubmissionValid();
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (!isCurrentStepValid()) return;
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Max Mustermann"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-Mail *
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  className={`block w-full rounded-md shadow-sm sm:text-sm ${
                    emailTouched && !isEmailValid(formData.email)
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                  }`}
                  placeholder="max@beispiel.de"
                />
                {emailTouched && !isEmailValid(formData.email) && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {emailTouched && !isEmailValid(formData.email) && (
                <p className="mt-1 text-sm text-red-600">
                  Bitte geben Sie eine gültige E-Mail-Adresse ein
                </p>
              )}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Firmenname (optional)
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="KI Solutions GmbH"
              />
            </div>
            <div>
              <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">
                Firmenadresse (optional)
              </label>
              <textarea
                id="companyAddress"
                name="companyAddress"
                rows={3}
                value={formData.companyAddress}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Musterstraße 123&#10;12345 Berlin&#10;Deutschland"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8">
            <BasicCompetency
              competency={formData.competency}
              onChange={handleCompetencyChange}
              onRatingChange={handleRatingChange}
            />
            <TechnicalImplementation
              competency={formData.competency}
              onChange={handleCompetencyChange}
            />
            <RiskManagement
              competency={formData.competency}
              onChange={handleCompetencyChange}
            />
            <TrainingDevelopment
              competency={formData.competency}
              onChange={handleCompetencyChange}
            />
          </div>
        );
      case 3:
        return (
          <SubmissionStep
            onCaptchaVerify={setCaptchaToken}
            onConsent={handleConsent}
            consents={consents}
            isValid={isSubmissionValid()}
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Progress Steps */}
      <nav aria-label="Progress" className="mb-8">
        <ol role="list" className="grid grid-cols-4 gap-2">
          {steps.map((step, index) => (
            <li key={step.id} className="relative">
              <div className={`group h-full flex flex-col border-l-4 pl-4 py-2 ${
                index < currentStep ? 'border-indigo-600' : 
                index === currentStep ? 'border-indigo-600' : 
                'border-gray-200'
              }`}>
                <div className="flex items-center min-h-[24px]">
                  {index < currentStep ? (
                    <Check className="h-5 w-5 text-indigo-600 mr-2" />
                  ) : null}
                  <span className={`text-sm font-medium truncate ${
                    index <= currentStep ? 'text-indigo-600' : 
                    'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                <span className="text-sm text-gray-500 truncate">
                  {step.description}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      {/* Form */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-8">
          {renderFormStep()}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 3 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentStep === 0
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Zurück
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!isCurrentStepValid()}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                isCurrentStepValid()
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === steps.length - 2 ? 'Abschließen' : 'Weiter'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};