import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarIcon, MapPinIcon } from 'lucide-react'

export default function FoodCard({ food }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{food.title}</CardTitle>
        <CardDescription>{food.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPinIcon className="w-4 h-4" />
          <span>{food.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2">
          <CalendarIcon className="w-4 h-4" />
          <span>Expires: {new Date(food.expiresAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Request Food</Button>
      </CardFooter>
    </Card>
  )
}