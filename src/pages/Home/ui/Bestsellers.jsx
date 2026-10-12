import { bestsellers, ProductCard } from '@/entities/product'
import { AddToCartButton } from '@/features/add-to-cart'
import { Container, Reveal, SectionTitle, TextLink } from '@/shared/ui'
import { bestsellersContent } from '../config'

export function Bestsellers() {
  return (
    <section id={bestsellersContent.id} className="scroll-mt-16 bg-cream pt-24 pb-24 md:pt-[110px] md:pb-[150px]">
      <Container className="max-w-[1008px]">
        <SectionTitle size="md" className="mb-14">
          {bestsellersContent.title}
        </SectionTitle>
        <ul className="grid grid-cols-2 gap-1 lg:grid-cols-4">
          {bestsellers.map((product, index) => (
            <Reveal as="li" key={product.id} delay={index * 120}>
              <ProductCard product={product} actions={<AddToCartButton product={product} />} />
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-16 text-center">
          <TextLink href={bestsellersContent.link.href}>{bestsellersContent.link.label}</TextLink>
        </Reveal>
      </Container>
    </section>
  )
}
