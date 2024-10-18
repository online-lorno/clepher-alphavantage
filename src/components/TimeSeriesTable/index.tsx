"use client";

import { TimeSeriesDailyDetail } from "@/lib/types";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";

type TimeSeriesTableProps = {
  data: TimeSeriesDailyDetail[];
};

const TimeSeriesTable: React.FC<TimeSeriesTableProps> = ({ data }) => {
  return <DataTable columns={columns} data={data} loading={false} />;
};

export default TimeSeriesTable;
