"use client";

import Link from "next/link";
import { Cloud, Laptop } from "lucide-react";
import { useEffect, useState } from "react";

import StockCard from "@/components/StockCard";
import { fetchGlobalQuote } from "@/lib/api";
import StockCardSkeleton from "./StockCardSkeleton";
import { GlobalQuoteDetail } from "@/lib/types";

const stocks = [
  {
    symbol: "IBM",
    icon: Cloud,
  },
  {
    symbol: "MSFT",
    icon: Laptop,
  },
];

export default function StockList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<(GlobalQuoteDetail | null)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchPromises = stocks.map((stock) =>
          fetchGlobalQuote(stock.symbol)
        );
        const results = await Promise.all(fetchPromises);
        setData(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <StockCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error loading stock data: {error}</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((stock, index) => {
        if (stock === null) return <StockCardSkeleton key={index} />;

        return (
          <Link key={stock.symbol} href={`/symbol/${stock.symbol}`}>
            <StockCard
              symbol={stock.symbol}
              value={+stock.price}
              change={+stock.changePercent.replace("%", "")}
              icon={stocks[index].icon}
            />
          </Link>
        );
      })}
    </div>
  );
}
