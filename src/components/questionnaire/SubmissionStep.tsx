import React, { useState, useEffect, useRef } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

interface Props {
  onCaptchaVerify: (token: string) => void;
  onConsent: (field: string, value: boolean) => void;
  consents: {
    dataProcessing: boolean;
    terms: boolean;
    marketing: boolean;
  };
  isValid: boolean;
  formData: any;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

export const SubmissionStep: React.FC<Props> = ({
  onCaptchaVerify,
  onConsent,
  consents,
  isValid,
  formData
}) => {
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>();
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    let scriptLoaded = false;
    let retryCount = 0;
    const maxRetries = 5;

    const initTurnstile = () => {
      if (!turnstileContainer.current || !window.turnstile) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(initTurnstile, 500);
        }
        return;
      }

      try {
        if (widgetId.current) {
          window.turnstile.remove(widgetId.current);
        }

        widgetId.current = window.turnstile.render(turnstileContainer.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
            onCaptchaVerify(token);
          },
          'expired-callback': () => {
            setTurnstileToken('');
            onCaptchaVerify('');
          },
          'error-callback': () => {
            setTurnstileToken('');
            onCaptchaVerify('');
            // Retry on error
            setTimeout(() => {
              if (widgetId.current) {
                window.turnstile.reset(widgetId.current);
              }
            }, 1000);
          },
          theme: 'light',
          appearance: 'always',
          retry: 'auto'
        });
      } catch (error) {
        console.error('Turnstile initialization error:', error);
      }
    };

    const loadTurnstileScript = () => {
      if (scriptLoaded) return;

      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        scriptLoaded = true;
        initTurnstile();
      };

      script.onerror = () => {
        console.error('Failed to load Turnstile script');
      };

      document.body.appendChild(script);
    };

    loadTurnstileScript();

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [onCaptchaVerify, siteKey]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValid || !turnstileToken) return;

    setSubmissionState('submitting');
    try {
      const response = await fetch('https://request-pdf.ki-kompetenznachweis.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          consents,
          turnstileToken
        })
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      setSubmissionState('success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionState('error');
    }
  };

  const renderContent = () => {
    switch (submissionState) {
      case 'submitting':
        return (
          <div className="flex flex-col items-center justify-center space-y-4 animate-fadeIn">
            <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
            <p className="text-lg font-medium text-gray-900">Ihre Daten werden verarbeitet...</p>
          </div>
        );

      case 'success':
        return (
          <div className="flex flex-col items-center justify-center space-y-4 animate-fadeIn">
            <CheckCircle className="w-16 h-16 text-green-500" />
            <h3 className="text-xl font-medium text-gray-900">
              Danke für Ihr Vertrauen
            </h3>
            <p className="text-gray-600 text-center">
              In Kürze erhalten Sie eine Email von uns.
            </p>
          </div>
        );

      case 'error':
        return (
          <div className="flex flex-col items-center justify-center space-y-4 animate-fadeIn">
            <XCircle className="w-16 h-16 text-red-500" />
            <h3 className="text-xl font-medium text-gray-900">
              Entschuldigung, es ist ein Fehler aufgetreten
            </h3>
            <p className="text-gray-600 text-center">
              Bitte versuchen Sie es später erneut oder kontaktieren Sie unseren Support.
            </p>
            <button
              onClick={() => setSubmissionState('idle')}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Erneut versuchen
            </button>
          </div>
        );

      default:
        return (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-blue-900 mb-4">
                Ihre Antworten wurden gespeichert
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-900">Einwilligungen</h4>
              
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={consents.dataProcessing}
                  onChange={(e) => onConsent('dataProcessing', e.target.checked)}
                  className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *
                </span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={consents.terms}
                  onChange={(e) => onConsent('terms', e.target.checked)}
                  className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Ich akzeptiere die Allgemeinen Geschäftsbedingungen. *
                </span>
              </label>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={consents.marketing}
                  onChange={(e) => onConsent('marketing', e.target.checked)}
                  className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Ich möchte über weitere KI-Zertifizierungsmöglichkeiten informiert werden.
                </span>
              </label>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div ref={turnstileContainer} className="w-full flex justify-center" />

              <button
                type="submit"
                disabled={!isValid || !turnstileToken}
                className={`px-6 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                  isValid && turnstileToken
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Absenden
              </button>
            </div>
          </form>
        );
    }
  };

  if (!siteKey) {
    return (
      <div className="text-red-600">
        Error: Turnstile configuration is missing. Please contact support.
      </div>
    );
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      {renderContent()}
    </div>
  );
};