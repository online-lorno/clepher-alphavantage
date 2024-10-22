"use client";

import { TimeSeriesDailyDetail } from "@/lib/types";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";

type TimeSeriesTableProps = {
  data: TimeSeriesDailyDetail[];
  loading: boolean;
};

const TimeSeriesTable: React.FC<TimeSeriesTableProps> = ({ data, loading }) => {
  return <DataTable columns={columns} data={data} loading={loading} />;
};

export default TimeSeriesTable;
