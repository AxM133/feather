import { Button, Reveal } from '@/shared/ui'
import { stressFreeContent } from '../config'

export function StressFree() {
  const { image, text, cta } = stressFreeContent

  return (
    <section className="flex flex-col items-center bg-cream px-4 pt-24 pb-28 text-center md:pt-[120px] md:pb-[120px]">
      <Reveal from="zoom">
        <img src={image.src} alt={image.alt} className="w-[290px] animate-float" />
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-8 max-w-[280px] text-2xl leading-8">{text}</p>
      </Reveal>
      <Reveal delay={350} className="mt-10">
        <Button href={cta.href} className="px-10">
          {cta.label}
        </Button>
      </Reveal>
    </section>
  )
}
