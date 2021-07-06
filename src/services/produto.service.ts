import { Injectable } from '@nestjs/common';
import { logger } from '../utils/logger';
import { IProduto } from '../models/produto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectModel('Produto') private readonly produtoModel: Model<IProduto>,
  ) {}

  retornaAlgo(): string {
    logger.info('Service');

    return 'retorno teste string';
  }

  async save(produto: IProduto): Promise<IProduto> {
    const result = new this.produtoModel({
      codigo: produto.codigo,
      nome: produto.nome,
      preco: produto.preco,
    });

    return new this.produtoModel(result).save();
  }
}
