import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function CreateFoodPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    expiresAt: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    console.log('Form submitted:', formData)
    // Redirect to the food list page after submission
    router.push('/food')
  }

  return (
    <>
      <Head>
        <title>Share Food - Replate</title>
        <meta name="description" content="Share your excess food with your community on Replate." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Share Food</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <Label htmlFor="title">Food Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="expiresAt">Expiration Date and Time</Label>
          <Input
            id="expiresAt"
            name="expiresAt"
            type="datetime-local"
            value={formData.expiresAt}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full">Share Food</Button>
      </form>
    </>
  )
}