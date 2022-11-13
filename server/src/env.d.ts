declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CORS_ORIGIN: string;
      PORT: string;
      VW_KEY: string;
      FILE_PATH: string;
      TWILIO_SID: string;
      TWILIO_TOKEN: string;
      TWILIO_NUMBER: string;
    }
  }
}

export {}
