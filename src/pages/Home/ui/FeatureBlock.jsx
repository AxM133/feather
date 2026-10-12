import { cn } from '@/shared/lib'
import { AnimatedText, Container, Reveal, TextLink } from '@/shared/ui'

// Раскладка "текст + медиа" для блоков главной. reverse — медиа слева.
export function FeatureBlock({ id, title, paragraphs, link, aside, media, reverse = false, className }) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-8', className)}>
      <Container
        className={cn(
          'grid items-center gap-10 md:gap-0',
          reverse ? 'md:grid-cols-[60%_1fr]' : 'md:grid-cols-[52%_1fr]',
        )}
      >
        <div className={cn('max-w-[437px]', reverse && 'md:order-2')}>
          <AnimatedText as="h2" text={title} className="mb-6 text-[28px] leading-tight md:text-4xl md:leading-11" />
          <Reveal delay={200} className="space-y-6 text-lg leading-7">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {aside}
          </Reveal>
          {link && (
            <Reveal delay={350} className="mt-10">
              <TextLink href={link.href}>{link.label}</TextLink>
            </Reveal>
          )}
        </div>
        <Reveal from={reverse ? 'left' : 'right'} className={cn(reverse && 'md:order-1')}>
          {media}
        </Reveal>
      </Container>
    </section>
  )
}
