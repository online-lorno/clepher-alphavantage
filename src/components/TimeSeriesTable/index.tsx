"use client";

import { TTimeSeriesDailyDetail } from "@/lib/types";
import { symbolData } from "@/lib/data";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";

const TimeSeriesTable = () => {
  const timeSeriesData = symbolData["Time Series (Daily)"];

  const data: TTimeSeriesDailyDetail[] = Object.entries(timeSeriesData).map(
    ([date, values]) => ({
      date,
      open: values["1. open"],
      high: values["2. high"],
      low: values["3. low"],
      close: values["4. close"],
      volume: values["5. volume"],
    })
  );

  return <DataTable columns={columns} data={data} loading={false} />;
};

export default TimeSeriesTable;
