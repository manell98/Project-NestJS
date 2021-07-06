import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProdutoService } from '../services/produto.service';
import { IProduto } from '../models/produto';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  findAll(): Promise<Array<IProduto>> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findById(@Param() params): Promise<IProduto> {
    return this.produtoService.findById(params.id);
  }

  @Post()
  save(@Body() produto: IProduto): Promise<IProduto> {
    return this.produtoService.save(produto);
  }
}
