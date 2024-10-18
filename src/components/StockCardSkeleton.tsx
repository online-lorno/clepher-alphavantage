"use client";

const StockCardSkeleton = () => {
  return (
    <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-lg animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 rounded-full bg-gray-200 dark:bg-gray-700 p-3">
            <div className="h-6 w-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-xl font-semibold bg-gray-300 dark:bg-gray-600 h-6 w-24 mb-2"></h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-300 dark:bg-gray-600 h-4 w-32"></p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold bg-gray-300 dark:bg-gray-600 h-8 w-16 mb-2"></p>
          <p className="flex items-center bg-gray-300 dark:bg-gray-600 h-4 w-16"></p>
        </div>
      </div>
    </div>
  );
};

export default StockCardSkeleton;
