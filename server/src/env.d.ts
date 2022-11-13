declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CORS_ORIGIN: string;
      PORT: string;
      VW_Key: string;
    }
  }
}

export {}
