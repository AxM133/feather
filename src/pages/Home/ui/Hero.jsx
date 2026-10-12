import { Button, Container, Image } from '@/shared/ui'
import { heroContent } from '../config'

export function Hero() {
  const { title, text, cta, image } = heroContent

  return (
    <section className="bg-cream pt-10 md:pt-[86px]">
      <Container className="grid items-center gap-10 md:grid-cols-[51%_1fr] md:gap-0">
        <div className="md:pr-8">
          <h1 className="animate-fade-up text-[44px] leading-[1.15] md:text-[64px] md:leading-[76px]">{title}</h1>
          <p className="mt-6 max-w-[525px] animate-fade-up text-lg leading-7 [animation-delay:150ms]">{text}</p>
          <Button href={cta.href} className="mt-12 animate-fade-up [animation-delay:300ms] md:ml-2">
            {cta.label}
          </Button>
        </div>
        <Image
          eager
          src={image.src}
          alt={image.alt}
          className="-mr-(--gutter) aspect-3/2 animate-clip-reveal [animation-delay:200ms] md:bleed-r"
          imgClassName="animate-ken-burns"
        />
      </Container>
    </section>
  )
}
