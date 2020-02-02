import {Quote} from './Quote';
import {StockMeta} from './StockMeta';

export interface StockInfo {
  indicators?: {
    adjclose: any;
    quote: Quote[];
  };
  meta?: StockMeta;
  timestamp?: Array<number>;
}
