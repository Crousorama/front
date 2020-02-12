import {Quote} from './Quote';
import {StockMeta} from './StockMeta';
import {EarningChart} from './earning-chart';
import {FinancialChart} from './financials-chart';

export interface StockInfo {
  indicators?: {
    adjclose: any;
    quote: Quote[];
  };
  meta?: StockMeta;
  timestamp?: Array<number>;
  earningsChart: EarningChart;
  financialsChart: FinancialChart;
}
