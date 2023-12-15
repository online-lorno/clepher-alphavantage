import { Outlet, useLocation } from 'react-router-dom'
import { HomeIcon, ListBulletIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

export default function Root() {
  const location = useLocation()

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-[269px] overflow-auto bg-secondary p-8">
        <div className="flex flex-col space-y-16">
          <h1 className="pl-4">
            <span className="text-black">Alpha</span>
            <span className="font-bold text-black">Vantage</span>
          </h1>
          <div className="flex flex-col space-y-6 pl-4">
            <a
              href="/"
              className={cn(
                'flex items-center space-x-4 text-sm font-semibold',
                location.pathname === '/'
                  ? 'text-secondary-foreground'
                  : 'text-secondary-muted',
              )}
            >
              <HomeIcon />
              <span>Home</span>
            </a>
            <a
              href="/forex"
              className={cn(
                'flex items-center space-x-4 text-sm font-semibold',
                location.pathname === '/forex'
                  ? 'text-secondary-foreground'
                  : 'text-secondary-muted',
              )}
            >
              <ListBulletIcon />
              <span>Forex</span>
            </a>
            <a
              href="/crypto"
              className={cn(
                'flex items-center space-x-4 text-sm font-semibold',
                location.pathname === '/crypto'
                  ? 'text-secondary-foreground'
                  : 'text-secondary-muted',
              )}
            >
              <ListBulletIcon />
              <span>Crypto</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="ml-[269px] h-screen flex-grow overflow-auto p-6">
        <Outlet />
      </div>
    </div>
  )
}
