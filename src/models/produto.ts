import * as mongoose from 'mongoose';

export interface IProduto {
  codigo: string;
  nome: string;
  preco: number;
}

export const ProdutoSchema = new mongoose.Schema({
  codigo: String,
  nome: String,
  preco: Number,
});
