import { PlusIcon } from 'lucide-react'

import primaryGraphSVG from '@/assets/primary_graph.svg'
import { Skeleton } from '@/components/ui/skeleton'
import { TGlobalQuote } from '@/lib/types'
import { cn, currency } from '@/lib/utils'

export const GlobalQuoteFallback = () => {
  return (
    <div>
      <Skeleton className="mb-4 h-[28px] w-10"></Skeleton>
      <Skeleton className="h-[158px] w-[269px] rounded-2xl" />
    </div>
  )
}

export const GlobalQuote = ({
  data,
  symbol,
}: {
  data: TGlobalQuote
  symbol: string
}) => {
  const changePercentageNum = data['Global Quote'][
    '10. change percent'
  ].replace('%', '')

  return (
    <>
      <div>
        <h1 className="mb-4 text-lg text-primary">{symbol}</h1>
        <div className="flex h-[158px] w-[269px] flex-col justify-between rounded-2xl bg-primary p-4">
          <div className="flex justify-between">
            <div>
              <span className="text-lg font-medium text-white">$</span>
              <h1 className="text-4xl font-medium text-white">
                {currency(data['Global Quote']['05. price'])}
              </h1>
            </div>
            <img src={primaryGraphSVG} className="logo" alt="Vite logo" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-white">Previous</span>
              <span className="text-sm text-white">
                {currency(data['Global Quote']['08. previous close'])}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-white">Change</span>
              <span
                className={cn(
                  'text-sm text-white',
                  +changePercentageNum > 0 ? 'text-green-500' : 'text-red-400',
                )}
              >
                {currency(changePercentageNum, '', 'en-US', 0, 4)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end">
        <button className="flex h-[158px] w-[269px] flex-col items-center justify-center space-y-2 rounded-2xl border border-primary bg-secondary">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-primary">
            <PlusIcon />
          </div>
          <span className="font-medium text-primary">New Asset</span>
        </button>
      </div>
    </>
  )
}
