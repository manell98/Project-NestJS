import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/environment';
import { logger } from './utils/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.app.port, () => {
    logger.info(`Servidor iniciado e rodando na porta ${environment.app.port}`);
  });
}
bootstrap();
