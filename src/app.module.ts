import { Module } from '@nestjs/common';
import { TesteController } from './controllers/teste.controller';
import { TesteService } from './services/teste.service';

@Module({
  imports: [],
  controllers: [TesteController],
  providers: [TesteService],
})
export class AppModule {}
