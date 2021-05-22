import { Controller, Get } from '@nestjs/common';
import { TesteService } from '../services/teste.service';
import { logger } from '../utils/logger';

@Controller('teste')
export class TesteController {
  constructor(private readonly testeService: TesteService) {}

  @Get('/retornaAlgo')
  retornaAlgo(): string {
    logger.info('Controller');

    return this.testeService.retornaAlgo();
  }
}
