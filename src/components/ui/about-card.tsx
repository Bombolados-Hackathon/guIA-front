import { Badge } from './badge'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import type { ReactNode } from 'react'

type WithBadgeProps = {
  hasBadge: true
  badgeText: string
  badgeIcon: ReactNode
  badgeVariant?: 'default' | 'outline' | 'secondary' | 'destructive'
  title: string
  icon?: ReactNode
  content?: ReactNode
}

type WithoutBadgeProps = {
  hasBadge?: false
  // Não aceita as props de badge quando hasBadge é false
  badgeText?: never
  badgeIcon?: never
  badgeVariant?: never
  title: string
  icon?: ReactNode
  content?: ReactNode
}

type AboutCardProps = WithBadgeProps | WithoutBadgeProps

export default function AboutCard(props: AboutCardProps) {
  const { title, icon, content } = props

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 max-w-[350px] not-sm:max-w-[100%]">
      <CardHeader className="flex gap-2 border-b border-gray-200 shadow-sm items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        {props.hasBadge && (
          <Badge
            variant={props.badgeVariant ?? 'default'}
            className="flex items-center gap-1"
          >
            {props.badgeIcon}
            {props.badgeText}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {content && <p>{content}</p>}
      </CardContent>
    </Card>
  )
}
