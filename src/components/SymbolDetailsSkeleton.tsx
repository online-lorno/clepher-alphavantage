import React from "react";

const SymbolDetailsSkeleton = () => {
  return (
    <>
      <div className="bg-gray-300 dark:bg-gray-600 animate-pulse h-9 mb-8 w-1/3"></div>
      <div className="rounded-lg bg-gray-200 dark:bg-gray-700 flex flex-col p-6 shadow-lg animate-pulse mb-8">
        <div className="bg-gray-300 dark:bg-gray-600 h-6 w-1/3 mb-6"></div>
        <dl className="grid grid-cols-2 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <React.Fragment key={index}>
              <div className="bg-gray-300 dark:bg-gray-600 h-6"></div>
              <div className="bg-gray-300 dark:bg-gray-600 h-6"></div>
            </React.Fragment>
          ))}
        </dl>
      </div>
      <div className="rounded-lg bg-gray-200 dark:bg-gray-700 flex flex-col p-6 shadow-lg animate-pulse h-60"></div>
    </>
  );
};

export default SymbolDetailsSkeleton;
