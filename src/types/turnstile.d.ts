declare global {
  interface Window {
    onTurnstileLoad?: () => void;
    onCaptchaVerify?: (token: string) => void;
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

export {};