export type TRouterError = {
  status: number;
  statusText?: string;
  message?: string;
};

export type TGlobalQuote = {
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

export type TTimeSeriesDaily = {
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

export type TTimeSeriesDailyOriginal = {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
};

export type TTimeSeriesDailyDetail = {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
};
