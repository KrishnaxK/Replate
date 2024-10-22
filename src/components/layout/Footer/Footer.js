import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Replate. All rights reserved.</p>
          <nav className="space-x-4">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
              About
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
