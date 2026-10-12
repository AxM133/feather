import { AnimatedText, Container, Reveal } from '@/shared/ui'
import { pressContent } from '../config'

export function Press() {
  return (
    <section className="bg-blush py-24 md:pt-[110px] md:pb-[100px]">
      <Container className="text-center">
        <AnimatedText
          as="h2"
          text={pressContent.title}
          stagger={80}
          className="mx-auto max-w-[700px] text-[52px] leading-[1.05] md:text-8xl md:leading-[100px]"
        />
        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between md:px-8">
          {pressContent.logos.map((logo, index) => (
            <Reveal as="li" key={logo.name} delay={400 + index * 100}>
              <img
                src={logo.src}
                alt={logo.name}
                className="opacity-80 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:opacity-100"
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
