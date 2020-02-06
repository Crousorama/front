import {StockMeta} from './StockMeta';
import {Quote} from './Quote';

export interface Stock {
  meta?: StockMeta;
  quote?: Quote;
  indicators?: object;
}
