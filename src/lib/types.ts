export type TRouterError = {
  status: number;
  statusText?: string;
  message?: string;
};

export type GlobalQuoteRaw = {
  "Global Quote": {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": string;
    "10. change percent": string;
  };
};

export type GlobalQuoteDetail = {
  symbol: string;
  open: string;
  high: string;
  low: string;
  price: string;
  volume: string;
  latestTradingDay: string;
  previousClose: string;
  change: string;
  changePercent: string;
};

export type TimeSeriesDailyRaw = {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [key: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. volume": string;
    };
  };
};

export type TimeSeriesDailyMetaData = {
  information: string;
  symbol: string;
  lastRefreshed: string;
  outputSize: string;
  timezone: string;
};

export type TimeSeriesDailyDetail = {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
};

export type TimeSeriesDaily = {
  metaData: TimeSeriesDailyMetaData;
  details: TimeSeriesDailyDetail[];
};
