import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Replate
        </Link>
        <nav className="space-x-4">
          <Link href="/food" className="text-muted-foreground hover:text-primary">
            Find Food
          </Link>
          <Link href="/food/create" className="text-muted-foreground hover:text-primary">
            Share Food
          </Link>
          <Button variant="outline">Sign In</Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}


