import { AnimatedText, Button, Image, Reveal } from '@/shared/ui'
import { floydContent } from '../config'

export function FloydBanner() {
  const { logo, title, cta, images } = floydContent

  return (
    <section className="grid grid-cols-[312fr_515fr] gap-[3px] bg-white md:h-[343px] md:grid-cols-[312fr_515fr_448fr]">
      {images.map((image) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="group aspect-square md:aspect-auto"
          imgClassName="duration-[1.5s] group-hover:scale-110"
        />
      ))}
      <div className="col-span-2 flex flex-col items-center justify-center bg-brand px-8 py-14 text-center text-white md:col-span-1 md:py-0">
        <Reveal from="fade">
          <img src={logo.src} alt={logo.alt} className="mb-4 h-[18px] w-auto" />
        </Reveal>
        <AnimatedText as="h2" text={title} className="max-w-[360px] text-[28px] leading-tight md:text-4xl md:leading-11" />
        <Reveal delay={300} className="mt-9">
          <Button href={cta.href} variant="white" size="sm" className="h-[60px] px-11 text-lg">
            {cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
