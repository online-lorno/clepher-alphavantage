import {
  GlobalQuoteRaw,
  GlobalQuoteDetail,
  TimeSeriesDailyRaw,
  TimeSeriesDailyMetaData,
  TimeSeriesDailyDetail,
  TimeSeriesDaily,
} from "./types";

const API_URL = "https://www.alphavantage.co/query";
const API_KEY = process.env.NEXT_PUBLIC_ALPHAVANTAGE_API_KEY || "demo";

export const fetchGlobalQuote = async (
  symbol: string
): Promise<GlobalQuoteDetail | null> => {
  try {
    const response = await fetch(
      `${API_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching global quote: ${response.statusText}`);
    }
    const data: GlobalQuoteRaw = await response.json();
    const globalQuoteDetail: GlobalQuoteDetail = {
      symbol: data["Global Quote"]["01. symbol"],
      open: data["Global Quote"]["02. open"],
      high: data["Global Quote"]["03. high"],
      low: data["Global Quote"]["04. low"],
      price: data["Global Quote"]["05. price"],
      volume: data["Global Quote"]["06. volume"],
      latestTradingDay: data["Global Quote"]["07. latest trading day"],
      previousClose: data["Global Quote"]["08. previous close"],
      change: data["Global Quote"]["09. change"],
      changePercent: data["Global Quote"]["10. change percent"],
    };
    return globalQuoteDetail;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchTimeSeriesDaily = async (
  symbol: string
): Promise<TimeSeriesDaily | null> => {
  try {
    const response = await fetch(
      `${API_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(
        `Error fetching time series daily: ${response.statusText}`
      );
    }
    const data: TimeSeriesDailyRaw = await response.json();
    const metaData: TimeSeriesDailyMetaData = {
      information: data["Meta Data"]["1. Information"],
      symbol: data["Meta Data"]["2. Symbol"],
      lastRefreshed: data["Meta Data"]["3. Last Refreshed"],
      outputSize: data["Meta Data"]["4. Output Size"],
      timezone: data["Meta Data"]["5. Time Zone"],
    };

    const details: TimeSeriesDailyDetail[] = Object.entries(
      data["Time Series (Daily)"]
    ).map(([date, values]) => ({
      date,
      open: values["1. open"],
      high: values["2. high"],
      low: values["3. low"],
      close: values["4. close"],
      volume: values["5. volume"],
    }));

    const timeSeriesDaily: TimeSeriesDaily = {
      metaData,
      details,
    };

    return timeSeriesDaily;
  } catch (error) {
    console.error(error);
    return null;
  }
};
