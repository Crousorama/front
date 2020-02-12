export interface EarningChart {
  earningsDate?: {
    fmt: string;
    raw: number;
  }[];
  quarterly?: {
    fmt: string;
    raw: number;
  }[];
}
