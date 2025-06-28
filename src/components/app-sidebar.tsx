"use client"

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
} from "@/components/ui/sidebar"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function AppSidebar() {
    const [activeItem, setActiveItem] = useState("Trilha Diária")

    const links = [
        {
            title: "Trilha Diária",
            url: "#",
        },
        {
            title: "Pendências",
            url: "#",
        },
        {
            title: "Missões Semanais",
            url: "#",
        },
        {
            title: "Ranking",
            url: "#",
        },
    ]

    return (
        <Sidebar className="px-4 py-6 bg-white">
            <SidebarHeader className="items-start bg-white mb-6">
                <h1 className="text-2xl font-bold text-black">GuIA</h1>
            </SidebarHeader>

            <SidebarContent className="bg-white">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="items-start gap-3">
                            {links.map((item) => (
                                <SidebarMenuItem className="m-2.5" key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={activeItem === item.title}
                                        className="data-[active=true]:bg-[#DCE5FF] data-[active=true]:border-2 data-[active=true]:border-[#7B8ADF] data-[active=true]:text-black hover:bg-[#F3F2FF] rounded-full px-6 py-3"
                                    >
                                        <Link
                                            href={item.url}
                                            className="flex items-center justify-between"
                                            onClick={() => setActiveItem(item.title)}
                                        >
                                            <span className="text-black text-lg font-bold font-cabin leading-snug">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="bg-white mt-auto pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 p-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                        <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Profile picture"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-black">Osvaldo Silva Jr.</span>
                        <span className="text-xs text-gray-500">Nível 5 • 1200 XP</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
