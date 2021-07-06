import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { logger } from '../utils/logger';
import { IProduto } from '../models/produto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get('/retornaAlgo')
  retornaAlgo(): string {
    logger.info('Controller');

    return this.produtoService.retornaAlgo();
  }

  @Post()
  cadastraProduto(@Body() produto: IProduto): Promise<IProduto> {
    logger.debug('passou aqui...');

    return this.produtoService.save(produto);
  }
}
