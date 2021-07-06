import { Module } from '@nestjs/common';
import { ProdutoController } from './controllers/produto.controller';
import { ProdutoService } from './services/produto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './config/environment';
import { ProdutoSchema } from './models/produto';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }]),
    MongooseModule.forRoot(environment.db.url),
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class AppModule {}
