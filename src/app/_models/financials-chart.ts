export interface FinancialChart {
  quarterly?: {
    date?: string;
    earnings?: {
      fmt?: string;
      longFmt?: string;
      raw?: number;
    };
    revenue?: {
      fmt?: string;
      longFmt?: string;
      raw?: number;
    };
  }[];
  yearly?: {
    date?: string;
    earnings?: {
      fmt?: string;
      longFmt?: string;
      raw?: number;
    };
    revenue?: {
      fmt?: string;
      longFmt?: string;
      raw?: number;
    };
  }[];
}
