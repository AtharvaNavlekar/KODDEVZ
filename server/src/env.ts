const REQUIRED_ENV = ['GEMINI_API_KEY', 'PORT', 'NODE_ENV'];

export function validateEnv(): void {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Server cannot start. Missing env vars: ${missing.join(', ')}\n` +
        'Copy .env.example to .env and fill in all values.'
    );
  }
}
