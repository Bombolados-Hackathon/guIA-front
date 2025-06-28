import type React from 'react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface FlexWrapProps {
  children: ReactNode
  className?: string
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch'
  minItemWidth?: string
  maxCols?: 1 | 2 | 3 | 4 | 5 | 6
  responsive?: boolean
}

const gapClasses = {
  xs: 'gap-2',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
  '2xl': 'gap-16',
}

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const maxColsClasses = {
  1: 'max-w-sm',
  2: 'max-w-2xl',
  3: 'max-w-4xl',
  4: 'max-w-6xl',
  5: 'max-w-7xl',
  6: 'max-w-full',
}

export function FlexWrap({
  children,
  className,
  gap = 'md',
  justify = 'start',
  align = 'stretch',
  minItemWidth,
  maxCols = 6,
  responsive = true,
  ...props
}: FlexWrapProps) {
  const baseClasses = 'flex flex-wrap w-full'

  const responsiveClasses = responsive ? 'mx-auto px-4 sm:px-6 lg:px-8' : ''

  let style: React.CSSProperties | undefined
  if (minItemWidth) {
    style = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ['--min-item-width' as any]: minItemWidth,
    }
  }

  return (
    <div
      className={cn(
        baseClasses,
        gapClasses[gap],
        justifyClasses[justify],
        alignClasses[align],
        maxColsClasses[maxCols],
        responsiveClasses,
        className,
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}
