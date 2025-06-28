import type { Metadata } from 'next'

import { Lato, Raleway } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'guIA - Solução para alavancar seus estudos',
  description: 'Gerado com Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${lato.variable} ${raleway.variable} antialiased w-full`}
      >
        <SidebarProvider defaultOpen>
          <AppSidebar />
          <SidebarTrigger />
          <Providers>{children}</Providers>
        </SidebarProvider>
        
      </body>
    </html>
  )
}
