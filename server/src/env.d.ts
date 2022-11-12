declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CORS_ORIGIN: string;
      PORT: string;
    }
  }
}

export {}
