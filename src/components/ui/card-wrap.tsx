import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
import { FlexWrap } from './flex-wrap'

interface CardWrapProps {
  children: ReactNode
  className?: string
  cardMinWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

const cardWidthClasses = {
  xs: '[&>*]:min-w-[200px]',
  sm: '[&>*]:min-w-[250px]',
  md: '[&>*]:min-w-[300px]',
  lg: '[&>*]:min-w-[350px]',
  xl: '[&>*]:min-w-[400px]',
}

const getGridClasses = (cols?: CardWrapProps['cols']) => {
  if (!cols) return ''

  const classes = []
  if (cols.default) classes.push(`[&>*]:flex-1`)
  if (cols.sm) classes.push(`sm:[&>*]:max-w-[${100 / cols.sm}%]`)
  if (cols.md) classes.push(`md:[&>*]:max-w-[${100 / cols.md}%]`)
  if (cols.lg) classes.push(`lg:[&>*]:max-w-[${100 / cols.lg}%]`)
  if (cols.xl) classes.push(`xl:[&>*]:max-w-[${100 / cols.xl}%]`)

  return classes.join(' ')
}

export function CardWrap({
  children,
  className,
  cardMinWidth = 'md',
  gap = 'md',
  cols,
  ...props
}: CardWrapProps) {
  return (
    <FlexWrap
      gap={gap}
      justify="start"
      align="stretch"
      className={cn(
        cardWidthClasses[cardMinWidth],
        getGridClasses(cols),
        '[&>*]:flex-grow [&>*]:flex-shrink-0',
        className,
      )}
      {...props}
    >
      {children}
    </FlexWrap>
  )
}
