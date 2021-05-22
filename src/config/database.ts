import { createConnection } from 'typeorm';
import { environment } from './environment';
import { logger } from '../utils/logger';

class Database {
  static async conectar(): Promise<boolean> {
    try {
      await createConnection({
        type: environment.typeOrm.type,
        host: environment.typeOrm.host,
        port: environment.typeOrm.port,
        database: environment.typeOrm.database,
        entities: environment.typeOrm.entities,
        useUnifiedTopology: true,
      });

      logger.info('Banco de dados conectado com sucesso!');

      return true;
    } catch (err) {
      logger.error(`Erro ao conectar ao Mongo DB \n ${err}`);

      return false;
    }
  }
}

export default Database;
