import { Metadata } from "next"
import { Inter } from 'next/font/google'

import { cn } from "@/lib/utils"
import { AppSidebar } from "@/components/sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Applied Wisdom KPI Dashboard",
  description: "A comprehensive KPI dashboard for Applied Wisdom",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("h-full bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <div className="flex h-full overflow-hidden">
              <AppSidebar />
              <main className="flex-1 overflow-y-auto">
                <div className="h-full p-4 md:p-6">
                  <SidebarTrigger className="mb-4" />
                  {children}
                </div>
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'