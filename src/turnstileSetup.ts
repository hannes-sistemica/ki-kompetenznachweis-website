// This file is no longer needed as we'll handle Turnstile directly in the component
console.log('=== Turnstile Setup Starting ===');
console.log('Current URL:', window.location.href);
console.log('Current Origin:', window.location.origin);
console.log('Current Host:', window.location.host);
console.log('Environment:', import.meta.env.MODE);
console.log('Site Key exists:', !!import.meta.env.VITE_TURNSTILE_SITE_KEY);

// Add script to head
const script = document.createElement('script');
script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
script.async = true;
script.defer = true;

script.onload = () => {
  console.log('=== Turnstile Script Loaded ===');
  console.log('turnstile object exists:', !!window.turnstile);
};

script.onerror = (error) => {
  console.error('Turnstile script failed to load:', error);
};

document.head.appendChild(script);
console.log('Turnstile script tag added to head');