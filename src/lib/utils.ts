import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const currency = (
  num: number | string,
  currency = '', // or add USD to show the '$' sign
  locale = 'en-US',
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
): string => {
  return new Intl.NumberFormat(locale, {
    ...(currency && { style: 'currency', currency }),
    minimumFractionDigits, // Set minimumFractionDigits to 0 to remove decimals
    maximumFractionDigits, // Set maximumFractionDigits to 0 to remove decimals
  }).format(+num)
}
