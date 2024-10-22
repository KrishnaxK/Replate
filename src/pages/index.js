import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Replate - Share Food, Reduce Waste</title>
        <meta name="description" content="Replate connects people with excess food to those in need, reducing food waste and addressing hunger in communities." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Share Food, Reduce Waste</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Replate connects people with excess food to those in need, creating a more sustainable and caring community.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg">
            <Link href="/food">Find Food</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/food/create">Share Food</Link>
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Reduce Waste</h2>
          <p className="text-muted-foreground">Help minimize food waste by sharing your excess food with others in your community.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Feed the Hungry</h2>
          <p className="text-muted-foreground">Connect with people in need and make a real difference in their lives through food sharing.</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Build Community</h2>
          <p className="text-muted-foreground">Foster stronger connections in your neighborhood through the act of sharing food.</p>
        </div>
      </section>
    </>
  )
}