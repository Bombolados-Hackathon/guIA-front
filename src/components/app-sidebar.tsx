'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Calendar, Feather, RotateCcw, TrendingUp } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const links = [
    {
      title: 'Trilha Diária',
      url: '/trilhaDiaria',
      icon: Calendar,
    },
    {
      title: 'Pendências',
      url: '/pendencias',
      icon: RotateCcw,
    },
    {
      title: 'Missões Semanais',
      url: '/missoesSemanais',
      icon: Feather,
    },
    {
      title: 'Ranking',
      url: '/ranking',
      icon: TrendingUp,
    },
  ]

  return (
    <Sidebar {...props}>
      {/* Container com gradiente e flex para empurrar o footer para baixo */}
      <div className="h-full bg-gradient-to-b from-emerald-400 via-teal-500 to-blue-600 flex flex-col">
        <SidebarHeader className="p-6 flex-shrink-0">
          <div className="text-white text-center">
            <h1 className="text-3xl font-raleway font-bold">GuIA</h1>
          </div>
        </SidebarHeader>

        <SidebarContent className="px-4 flex-1">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {links.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="text-white hover:bg-white/20 hover:text-white transition-colors duration-200 mb-2 h-12"
                    >
                      <a href={item.url} className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 font-bold" />
                        <span className="font-bold">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer fixo no final */}
        <SidebarFooter className="p-4 flex-shrink-0 mt-auto">
          <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-white/20 text-white font-semibold">
                OS
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-white">
              <p className="font-semibold text-sm">Osvaldo Silva Jr.</p>
              <p className="text-xs text-white/80">1.500 xp</p>
            </div>
          </div>
        </SidebarFooter>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}
