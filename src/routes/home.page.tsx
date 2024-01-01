/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from '@tanstack/react-query'

import { columns } from '@/components/routes/home/columns'
import {
  DataTable,
  DataTableFallback,
} from '@/components/routes/home/data-table'
import {
  GlobalQuote,
  GlobalQuoteFallback,
} from '@/components/routes/home/global_quote'
import { getGlobalQuote, getTimeSeriesDaily } from '@/lib/apis'
// import { jsonDataGlobalQuote, jsonDataTimeSeriesDaily } from '@/lib/constants'
// import { TGlobalQuote, TTimeSeriesDailyDetail } from '@/lib/types'

const symbol = 'IBM'

const HomePage = () => {
  const { data: dataGlobalQuote, isLoading: isLoadingGlobalQuote } = useQuery({
    queryKey: ['global-quote', symbol],

    // NOTE: Uncomment this if you want to use the real API
    queryFn: getGlobalQuote,

    // // NOTE: Uncomment this if you want to use a mock data
    // queryFn: async () => {
    //   return await new Promise<TGlobalQuote>((resolve) => {
    //     setTimeout(() => {
    //       resolve(jsonDataGlobalQuote)
    //     }, 2000)
    //   })
    // },
  })
  const { data: dataTimeSeriesDaily, isLoading: isLoadingTimeSeriesDaily } =
    useQuery({
      queryKey: ['time-series-daily', symbol],

      // NOTE: Uncomment this if you want to use the real API
      queryFn: getTimeSeriesDaily,
      select: (data) => {
        return Object.keys(data['Time Series (Daily)']).map((date: string) => {
          const record =
            data['Time Series (Daily)'][
              date as keyof (typeof data)['Time Series (Daily)']
            ]
          return {
            date,
            open: record['1. open'],
            high: record['2. high'],
            low: record['3. low'],
            close: record['4. close'],
            volume: record['5. volume'],
          }
        })
      },

      // // NOTE: Uncomment this if you want to use a mock data
      // queryFn: async () => {
      //   return await new Promise<TTimeSeriesDailyDetail[]>((resolve) => {
      //     setTimeout(() => {
      //       const formatted: TTimeSeriesDailyDetail[] = Object.keys(
      //         jsonDataTimeSeriesDaily['Time Series (Daily)'],
      //       ).map((date: string) => {
      //         const record =
      //           jsonDataTimeSeriesDaily['Time Series (Daily)'][
      //             date as keyof (typeof jsonDataTimeSeriesDaily)['Time Series (Daily)']
      //           ]
      //         return {
      //           date,
      //           open: record['1. open'],
      //           high: record['2. high'],
      //           low: record['3. low'],
      //           close: record['4. close'],
      //           volume: record['5. volume'],
      //         }
      //       })
      //       resolve(formatted)
      //     }, 2000)
      //   })
      // },
    })

  return (
    <div className="flex flex-col space-y-9">
      <h1 className="text-3xl font-bold uppercase">Global Quote</h1>
      <div className="flex space-x-6">
        {isLoadingGlobalQuote && <GlobalQuoteFallback />}
        {!isLoadingGlobalQuote && dataGlobalQuote && (
          <GlobalQuote symbol={symbol} data={dataGlobalQuote} />
        )}
      </div>
      <h1 className="text-3xl font-bold uppercase">Time Series Daily</h1>
      {isLoadingTimeSeriesDaily && <DataTableFallback />}
      {!isLoadingTimeSeriesDaily && dataTimeSeriesDaily && (
        <DataTable columns={columns} data={dataTimeSeriesDaily} />
      )}
    </div>
  )
}

export default HomePage
