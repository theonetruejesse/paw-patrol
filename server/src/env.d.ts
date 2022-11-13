declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CORS_ORIGIN: string;
      PORT: string;
      VW_Key: string;
      FILE_PATH: string;
    }
  }
}

export {}
