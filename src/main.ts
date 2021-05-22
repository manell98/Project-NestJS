import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './config/environment';
import Database from './config/database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.app.port, async () => {
    await Database.conectar();
  });
}
bootstrap();
