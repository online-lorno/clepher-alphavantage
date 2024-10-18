"use client";

import { ArrowDownIcon, ArrowUpIcon, Car } from "lucide-react";

type StockCardProps = {
  symbol: string;
  name: string;
  value: number;
  change: number;
};

const StockCard: React.FC<StockCardProps> = ({
  symbol,
  name,
  value,
  change,
}) => {
  return (
    <div
      key={symbol}
      className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-750"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 rounded-full bg-gray-200 dark:bg-gray-700 p-3">
            <Car className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{symbol}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{name}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">${value.toFixed(2)}</p>
          <p
            className={`flex items-center ${
              change >= 0
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {change >= 0 ? (
              <ArrowUpIcon className="mr-1 h-4 w-4" />
            ) : (
              <ArrowDownIcon className="mr-1 h-4 w-4" />
            )}
            {Math.abs(change)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
