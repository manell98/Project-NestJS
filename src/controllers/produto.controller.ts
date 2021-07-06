import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll(): Promise<Array<Produto>> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Post()
  save(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.save(produto);
  }
}
