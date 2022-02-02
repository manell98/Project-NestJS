import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export class Produto extends Document {
  codigo: string;
  nome: string;
  preco: number;
}

export const ProdutoSchema = new mongoose.Schema({
  codigo: String,
  nome: String,
  preco: Number,
});
