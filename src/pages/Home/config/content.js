import businessOffice from '@/shared/assets/images/business-office.jpg'
import businessResidential from '@/shared/assets/images/business-residential.jpg'
import floydBed from '@/shared/assets/images/floyd-bed.jpg'
import floydShelf from '@/shared/assets/images/floyd-shelf.jpg'
import furnished from '@/shared/assets/images/furnished.jpg'
import garageSale from '@/shared/assets/images/garage-sale.jpg'
import hero from '@/shared/assets/images/hero.jpg'
import floydLogo from '@/shared/assets/images/logo-floyd.png'
import neverAssemble from '@/shared/assets/images/never-assemble.jpg'
import fastCompany from '@/shared/assets/images/press-fastcompany.png'
import forbes from '@/shared/assets/images/press-forbes.png'
import mindbodygreen from '@/shared/assets/images/press-mindbodygreen.png'
import myDomaine from '@/shared/assets/images/press-mydomaine.png'
import pureWow from '@/shared/assets/images/press-purewow.png'
import stressFree from '@/shared/assets/images/stress-free.png'

export const heroContent = {
  title: 'Curated and Convenient',
  text: 'We’ve built our offerings on the principle that everyone deserves high-quality design without the high cost. We offer elevated rental inventory, to transform your space. Reuse and recycle - we make the decision as light as a “feather”',
  cta: { label: 'Get Started', href: '#shop-by-room' },
  image: { src: hero, alt: 'Bright hallway with a white console table and a dog' },
}

export const shopByRoomContent = {
  id: 'shop-by-room',
  title: 'Shop by Room',
}

export const missionContent = {
  id: 'why-feather',
  quote: '“Keeping Furniture in Homes and out of Landfills.”',
  text: 'This isn’t just another rental company - We’re elevating the future of furniture by replacing the commitment of ownership with a culture of sharing in a way that’s curated, convenient, and sustainable.',
}

export const furnishedContent = {
  title: 'Enjoy a fully furnished space in less than week',
  paragraphs: ['Feather furniture is available to be delivered and assembled in New York City, Los Angeles and San Francisco.'],
  link: { label: 'Explore Furniture', href: '#bestsellers' },
  image: { src: furnished, alt: 'Furnished apartment with arched doorway' },
}

export const garageSaleContent = {
  title: 'Garage Sale - 40% & Up',
  paragraphs: [
    'Our Garage Sale is open! Savings start at 40% on favorite retired pieces. Find dressers, sofas, decor, and more to make the year one to remember.',
  ],
  terms: { text: 'Terms and conditions apply.', link: { label: 'View here.', href: '#' } },
  link: { label: 'Shop Now', href: '#' },
  poster: {
    image: { src: garageSale, alt: 'Pile of furniture illustration' },
    title: 'Garage Sale Now Open',
    subtitle: 'Save over 40% on favorite furniture.',
  },
}

export const businessContent = {
  id: 'business',
  title: 'Furniture for business, made simple.',
  paragraphs: [
    'Say goodbye to cost, complexity, and commitment of furniture. Feather makes it easy with affordable rental plans, white glove delivery and best-in-class account service.',
  ],
  link: { label: 'Visit Feather For Business', href: '#' },
  showcase: [
    { id: 'residential', label: 'Residential', image: { src: businessResidential, alt: 'Residential living room' } },
    { id: 'office', label: 'Office', image: { src: businessOffice, alt: 'Office space with city view' } },
  ],
}

export const neverAssembleContent = {
  title: 'Never assemble furniture again.',
  paragraphs: [
    'We move a lot. There are countless floor plans and roommates (oh, and your evolving tastes) between here and there. With Feather, furnish your space without breaking a sweat or reaching for a screwdriver.',
  ],
  link: { label: 'How Feather Works', href: '#' },
  image: { src: neverAssemble, alt: 'Living room with fireplace and plant' },
}

export const bestsellersContent = {
  id: 'bestsellers',
  title: 'Shop our Bestsellers',
  link: { label: 'Shop All Furniture', href: '#' },
}

export const floydContent = {
  logo: { src: floydLogo, alt: 'feather × Floyd' },
  title: 'Floyd Furniture Meets Feather Flexibility',
  cta: { label: 'Explore Floyd Furniture', href: '#' },
  images: [
    { src: floydShelf, alt: 'Floyd shelf with plants' },
    { src: floydBed, alt: 'Floyd bed in a bright loft' },
  ],
}

export const reviewsContent = {
  title: 'The Reviews are In',
}

export const pressContent = {
  title: 'Ease the pain of moving from apartment to apartment.',
  logos: [
    { name: 'PureWow', src: pureWow },
    { name: 'MyDomaine', src: myDomaine },
    { name: 'mindbodygreen', src: mindbodygreen },
    { name: 'Forbes', src: forbes },
    { name: 'Fast Company', src: fastCompany },
  ],
}

export const stressFreeContent = {
  image: { src: stressFree, alt: 'Person floating in the air, relaxed' },
  text: 'Feather is the stress-free way to furnish your home',
  cta: { label: 'Shop Furniture', href: '#bestsellers' },
}
