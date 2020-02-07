import {TradingPeriod} from './TradingPeriod';

export interface StockMeta {
  longname?: string;
  chartPreviousClose: number;
  currency: string;
  currentTradingPeriod: {post: TradingPeriod, pre: TradingPeriod, regular: TradingPeriod};
  dataGranularity: string;
  exchangeName: string;
  exchangeTimezoneName: string;
  firstTradeDate: number;
  gmtoffset: number;
  instrumentType: string;
  priceHint: number;
  range: string;
  regularMarketPrice: number;
  regularMarketTime: number;
  symbol: string;
  timezone: string;
  validRanges: Array<string>;
}
