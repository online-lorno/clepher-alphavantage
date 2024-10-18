"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { symbolData } from "@/lib/data";
import TimeSeriesTable from "@/components/TimeSeriesTable";

export default function StockDataDisplay() {
  const metaData = symbolData["Meta Data"];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">
        Stock Data: {metaData["2. Symbol"]}
      </h1>

      <Card className="bg-gray-800 text-gray-100 mb-8">
        <CardHeader>
          <CardTitle className="text-yellow-400">Meta Data</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-2 gap-4">
            {Object.entries(metaData).map(([key, value]) => (
              <React.Fragment key={key}>
                <dt className="font-semibold">{key.split(". ")[1]}:</dt>
                <dd>{value}</dd>
              </React.Fragment>
            ))}
          </dl>
        </CardContent>
      </Card>

      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-yellow-400">Time Series Data</CardTitle>
        </CardHeader>
        <CardContent>
          <TimeSeriesTable />
        </CardContent>
      </Card>
    </div>
  );
}
