import { Home, Users, Calendar, MessageSquare, Receipt, Settings } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

export function NavBar() {
  const routes = [
    { href: "/", label: "Overview", icon: Home },
    { href: "/patients", label: "Patients", icon: Users },
    { href: "/schedule", label: "Schedule", icon: Calendar },
    { href: "/message", label: "Message", icon: MessageSquare },
    { href: "/transactions", label: "Transactions", icon: Receipt },
  ]

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <svg
            className="h-8 w-8 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-xl font-bold">Tech Care</span>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors",
                route.href === "/patients"
                  ? "bg-primary text-primary-foreground rounded-full"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <route.icon className="h-4 w-4" />
              <span>{route.label}</span>
            </Link>
          ))}
          <div className="ml-4 flex items-center space-x-2">
            <span className="text-sm">Dr. Jose Simmons</span>
            <span className="text-xs text-muted-foreground">General Practitioner</span>
          </div>
          <button className="rounded-full p-2 hover:bg-accent">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

