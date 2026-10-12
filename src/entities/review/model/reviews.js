import { accents } from '@/shared/config'

const data = [
  { id: 'julie', text: 'Honestly BEST EXPERIENCE moving ever.', author: 'Julie', location: 'San Francisco, CA', rating: 5 },
  { id: 'anthony', text: 'Extremely easy! Browsed for furniture and it was in my new apartment within a week.', author: 'Anthony', location: 'Los Angeles, CA', rating: 5 },
  { id: 'wesley', text: 'THIS JUST MAKES SENSE. Truly obsessed with Feather.', author: 'Wesley', location: 'New York City, NY', rating: 5 },
  { id: 'maya', text: 'Swapped my sofa when I moved in with my partner. Zero stress, zero screwdrivers.', author: 'Maya', location: 'Brooklyn, NY', rating: 5 },
  { id: 'daniel', text: 'Delivery team was on time, kind and fast. The whole place was set up in an hour.', author: 'Daniel', location: 'Oakland, CA', rating: 5 },
  { id: 'sofia', text: 'Love that I can furnish beautifully without committing forever.', author: 'Sofia', location: 'Santa Monica, CA', rating: 5 },
]

// Цвета отзывов чередуются по первым трём акцентам, как в макете
export const reviews = data.map((review, index) => ({ ...review, accent: accents[index % 3] }))
