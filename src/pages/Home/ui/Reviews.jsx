import { ReviewCard, reviews } from '@/entities/review'
import { Carousel, Reveal, SectionTitle } from '@/shared/ui'
import { reviewsContent } from '../config'

export function Reviews() {
  return (
    <section className="bg-cream py-24 md:pt-[140px] md:pb-[175px]">
      <SectionTitle className="mb-12 px-4">{reviewsContent.title}</SectionTitle>
      <Reveal from="right">
        <Carousel
          items={reviews}
          getKey={(review) => review.id}
          renderItem={(review) => <ReviewCard review={review} />}
          trackClassName="bleed-x py-3"
        />
      </Reveal>
    </section>
  )
}
