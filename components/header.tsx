import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Dashboard</Link></li>
            <li><Link href="/email" className="hover:underline">Email</Link></li>
            <li><Link href="/website" className="hover:underline">Website</Link></li>
            <li><Link href="/youtube" className="hover:underline">YouTube</Link></li>
            <li><Link href="/vimeo" className="hover:underline">Vimeo</Link></li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}

