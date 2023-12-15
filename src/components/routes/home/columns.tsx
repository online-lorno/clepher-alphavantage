import { ColumnDef } from '@tanstack/react-table'

import { TTimeSeriesDailyDetail } from '@/lib/types'

export const columns: ColumnDef<TTimeSeriesDailyDetail>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date = row.getValue('date') as string
      return <span className="font-bold">{date}</span>
    },
  },
  {
    accessorKey: 'open',
    header: 'Open',
  },
  {
    accessorKey: 'high',
    header: 'High',
  },
  {
    accessorKey: 'low',
    header: 'Low',
  },
  {
    accessorKey: 'close',
    header: 'Close',
  },
  {
    accessorKey: 'volume',
    header: 'Volume',
  },
]
