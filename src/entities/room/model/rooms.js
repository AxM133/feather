import bedroom from '@/shared/assets/images/room-bedroom.jpg'
import dining from '@/shared/assets/images/room-dining.jpg'
import living from '@/shared/assets/images/room-living.jpg'
import office from '@/shared/assets/images/room-office.jpg'
import { accents } from '@/shared/config'

export const rooms = [
  { id: 'living-room', title: 'Living Room', href: '#', image: living, accent: accents[0] },
  { id: 'bedroom', title: 'Bedroom', href: '#', image: bedroom, accent: accents[1] },
  { id: 'home-office', title: 'Home Office', href: '#', image: office, accent: accents[2] },
  { id: 'dining-room', title: 'Dining Room', href: '#', image: dining, accent: accents[3] },
]
