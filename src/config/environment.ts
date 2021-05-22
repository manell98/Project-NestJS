export interface IEnvironment {
  app: {
    logLevel: string;
  };
}

export const environment: IEnvironment = {
  app: {
    logLevel: 'debug',
  },
};
