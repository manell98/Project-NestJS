import { Injectable } from '@nestjs/common';
import { logger } from '../utils/logger';
import { Produto } from '../models/produto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectModel('Produto') private readonly produtoModel: Model<Produto>,
  ) {}

  async findAll(): Promise<Array<Produto>> {
    logger.info('Buscando todos os produtos...');

    return this.produtoModel.find();
  }

  async findById(id: string): Promise<Produto> {
    logger.info(`Buscando produto de id: ${id}...`);

    return this.produtoModel.findById(id);
  }

  async save(produto: Produto): Promise<Produto> {
    logger.debug('Salvando produto...');

    const result = new this.produtoModel(produto);

    return new this.produtoModel(result).save();
  }
}
