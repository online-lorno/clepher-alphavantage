import { TGlobalQuote, TTimeSeriesDaily } from './types'
import AlphaFetchClient from '@/lib/fetch.client'

const client = new AlphaFetchClient('demo') // Enter your API key here

export const getGlobalQuote = async ({
  queryKey,
}: {
  queryKey: string[]
}): Promise<TGlobalQuote> => {
  const [, symbol] = queryKey
  const result = await client.get<TGlobalQuote>({
    function: 'GLOBAL_QUOTE',
    symbol,
  })
  return result
}

export const getTimeSeriesDaily = async ({
  queryKey,
}: {
  queryKey: string[]
}): Promise<TTimeSeriesDaily> => {
  const [, symbol] = queryKey
  const result = await client.get<TTimeSeriesDaily>({
    function: 'TIME_SERIES_DAILY',
    symbol,
  })
  return result
}
