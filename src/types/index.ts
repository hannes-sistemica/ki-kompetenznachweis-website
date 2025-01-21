export interface QuestionnaireStep {
  id: string;
  title: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

export interface Certificate {
  id: string;
  recipientName: string;
  companyName: string;
  issueDate: Date;
  expiryDate: Date;
  competencyLevel: string;
}

export interface CompetencyFormData {
  // TEIL 1: GRUNDLEGENDE KI-KOMPETENZ
  aiDefinition: string;
  regulationUnderstanding: {
    requirements: number;
    riskClasses: number;
    documentation: number;
    meetings: number;
  };
  
  // TEIL 2: TECHNISCHE IMPLEMENTIERUNG
  aiSystems: string;
  documentation: string;
  
  // TEIL 3: RISIKOMANAGEMENT
  riskStrategy: string;
  
  // TEIL 4: SCHULUNG UND ENTWICKLUNG
  emergencyProtocol: string;
  employeeCompetence: string;
}