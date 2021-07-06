export interface IEnvironment {
  app: {
    host: string;
    logLevel: string;
    port: number;
  };
  db: {
    url: string;
    porta: number;
    database: string;
  };
}

export const environment: IEnvironment = {
  app: {
    host: process.env.APP_HOST || 'localhost:3000',
    logLevel: process.env.LOG_LEVEL || 'debug',
    port: Number(process.env.API_PORT) || 3000,
  },
  db: {
    url:
      process.env.BD_URL || 'mongodb://admin:admin@localhost:27017/nest-js-db',
    porta: Number(process.env.BD_PORT) || 27017,
    database: process.env.BD_DATABASE || 'mongo',
  },
};
