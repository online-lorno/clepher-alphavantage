"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchTimeSeriesDaily } from "@/lib/api";
import { TimeSeriesDaily } from "@/lib/types";
import TimeSeriesTable from "./TimeSeriesTable";
import SymbolDetailsSkeleton from "./SymbolDetailsSkeleton";

const SymbolDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<TimeSeriesDaily>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchTimeSeriesDaily(id as string);
        if (results) {
          setData(results);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <SymbolDetailsSkeleton />;
  }

  if (error) {
    return <div>Error loading stock data: {error}</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">
        Stock Data: {id}
      </h1>

      <Card className="bg-white dark:bg-gray-800 mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-yellow-400">Meta Data</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            <dt className="font-semibold">Information:</dt>
            <dd>{data?.metaData.information}</dd>

            <dt className="font-semibold">Symbol:</dt>
            <dd>{data?.metaData.symbol}</dd>

            <dt className="font-semibold">Last Refreshed:</dt>
            <dd>{data?.metaData.lastRefreshed}</dd>

            <dt className="font-semibold">Output Size:</dt>
            <dd>{data?.metaData.outputSize}</dd>

            <dt className="font-semibold">Time Zone:</dt>
            <dd>{data?.metaData.timezone}</dd>
          </dl>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-yellow-400">Time Series Data</CardTitle>
        </CardHeader>
        <CardContent>
          <TimeSeriesTable data={data ? data.details : []} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SymbolDetails;
