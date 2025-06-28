import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

export default function TrilhaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider defaultOpen>
            <AppSidebar />
            <SidebarTrigger />
            <main>{children}</main>
        </SidebarProvider>
    )
}
