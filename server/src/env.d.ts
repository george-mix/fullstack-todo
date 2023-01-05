declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      MONGODB_URI: string;
      DB_NAME: string;
      DB_USER: string;
      DB_PASS: string;
    }
  }
}

export {};
