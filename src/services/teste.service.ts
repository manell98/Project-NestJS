import { Injectable } from '@nestjs/common';
import { logger } from '../utils/logger';

@Injectable()
export class TesteService {
  retornaAlgo(): string {
    logger.info('Service');

    return 'retorno teste string';
  }
}
