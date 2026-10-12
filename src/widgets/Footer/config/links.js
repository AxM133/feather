import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, PinterestIcon, TwitterIcon } from '@/shared/ui'

const toLinks = (labels) => labels.map((label) => ({ label, href: '#' }))

export const footerColumns = [
  {
    title: 'Furniture',
    links: toLinks(['Packages', 'Living Room', 'Bedroom', 'Dining', 'Home Office', 'Decor', 'Lighting', 'Outdoor', 'All Furniture', 'Sample Sale']),
  },
  {
    title: 'About',
    links: toLinks(['How it Works', 'About Feather', 'Feather Furniture', 'Reviews', 'Feather for WeWork', 'Feather for Business', 'Feather for Staging', 'Affiliate Program', 'Careers', 'In Your Area']),
  },
  {
    title: 'Help',
    links: toLinks(['FAQs', 'Contact us', 'Privacy Policy', 'Terms', 'FloorFound Terms']),
  },
]

export const socialLinks = [
  { label: 'Email', href: '#', icon: MailIcon },
  { label: 'Pinterest', href: '#', icon: PinterestIcon },
  { label: 'Twitter', href: '#', icon: TwitterIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
]

export const footerTitles = {
  social: 'Feather on social media',
  newsletter: 'Join our newsletter',
}
