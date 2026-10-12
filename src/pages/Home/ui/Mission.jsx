import { AnimatedText, Container, Reveal } from '@/shared/ui'
import { missionContent } from '../config'

export function Mission() {
  return (
    <section id={missionContent.id} className="scroll-mt-16 pt-24 pb-16 text-center md:pt-[135px] md:pb-24">
      <Container className="max-w-[900px]">
        <AnimatedText as="h2" text={missionContent.quote} className="mb-5 text-[28px] leading-tight md:text-4xl" />
        <Reveal delay={300}>
          <p className="text-lg leading-7 md:text-2xl md:leading-8">{missionContent.text}</p>
        </Reveal>
      </Container>
    </section>
  )
}
