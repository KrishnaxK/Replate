import Head from 'next/head'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import FoodCard from '@/components/features/food/FoodCard'

const mockFoodItems = [
  { id: 1, title: 'Homemade Lasagna', description: 'Delicious vegetarian lasagna, enough for 4 people', location: 'Downtown', expiresAt: '2024-03-15T18:00:00Z' },
  { id: 2, title: 'Fresh Apples', description: 'A bag of fresh apples from my garden', location: 'Suburbs', expiresAt: '2024-03-14T12:00:00Z' },
  { id: 3, title: 'Canned Goods', description: 'Assorted canned vegetables and fruits', location: 'City Center', expiresAt: '2024-06-01T00:00:00Z' },
]

export default function FoodListPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFoodItems = mockFoodItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Head>
        <title>Find Food - Replate</title>
        <meta name="description" content="Browse available food items in your community on Replate." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Available Food</h1>

      <div className="flex gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search food items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Search</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoodItems.map(item => (
          <FoodCard key={item.id} food={item} />
        ))}
      </div>
    </>
  )
}