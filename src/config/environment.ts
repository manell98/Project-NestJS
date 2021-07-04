export interface IEnvironment {
  app: {
    logLevel: string;
    port: number;
  };
}

export const environment: IEnvironment = {
  app: {
    logLevel: process.env.LOG_LEVEL || 'info',
    port: Number(process.env.BD_PORT) || 3000,
  },
};
