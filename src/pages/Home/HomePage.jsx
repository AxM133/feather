import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import {
  Bestsellers,
  FloydBanner,
  ForBusiness,
  FurnishedSpace,
  GarageSale,
  Hero,
  Mission,
  NeverAssemble,
  Press,
  Reviews,
  ShopByRoom,
  StressFree,
} from './ui'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShopByRoom />
        <Mission />
        <FurnishedSpace />
        <GarageSale />
        <ForBusiness />
        <NeverAssemble />
        <Bestsellers />
        <FloydBanner />
        <Reviews />
        <Press />
        <StressFree />
      </main>
      <Footer />
    </>
  )
}
