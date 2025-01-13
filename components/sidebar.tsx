"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Mail, MonitorPlay, Video, Download, Key, Linkedin } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarModeToggle } from "@/components/sidebar-mode-toggle"
import { SidebarCSVUpload } from "@/components/sidebar-csv-upload"

const navItems = [
  { title: "Dashboard", href: "/", icon: BarChart },
  { title: "Email", href: "/email", icon: Mail },
  { title: "Website", href: "/website", icon: MonitorPlay },
  { title: "YouTube", href: "/youtube", icon: Video },
  { title: "Video Views", href: "/video-views", icon: Video },
  { title: "Tools Downloads", href: "/tools-downloads", icon: Download },
  { title: "LinkedIn", href: "#", icon: Linkedin, disabled: true },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="h-full">
      <SidebarHeader className="border-b px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Key className="h-6 w-6" />
          <span className="text-lg font-bold">
            Applied Wisdom<br />
            KPI Dashboard
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between h-full">
        <ScrollArea className="flex-grow">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link 
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                    item.disabled 
                      ? "text-gray-400 cursor-not-allowed" 
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                    pathname === item.href && !item.disabled ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : ""
                  )}
                  onClick={(e) => {
                    if (item.disabled) {
                      e.preventDefault();
                    }
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
        <div className="mt-auto">
          <div className="px-6 py-4 border-t">
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              Administrator
            </h3>
            <SidebarCSVUpload />
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="space-y-2 p-4">
        <SidebarModeToggle />
        <Button variant="secondary" className="w-full">
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

