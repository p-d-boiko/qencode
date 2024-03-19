declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // server configuration
      HOST: string
      PORT: string
    }
  }

  interface ImportMetaEnv {
    // api server details
    VITE_API_HOST: string
  }
}
