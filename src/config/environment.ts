export interface IEnvironment {
  app: {
    logLevel: string;
    port: number;
  };
  typeOrm: {
    type: any;
    host: string;
    port: number;
    database: string;
    entities: any;
  };
}

export const environment: IEnvironment = {
  app: {
    logLevel: process.env.LOG_LEVEL || 'info',
    port: Number(process.env.BD_PORT) || 3000,
  },
  typeOrm: {
    type: process.env.BD_TYPE || 'mongodb',
    host: process.env.BD_HOST || 'mongodb',
    port: Number(process.env.BD_PORT) || 27017,
    database: process.env.BD_DATABASE || 'nest-js-db',
    entities: ['src/entity/**/*.ts'],
  },
};
