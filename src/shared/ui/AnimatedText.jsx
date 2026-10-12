import { Fragment } from 'react'
import { cn, useInView } from '@/shared/lib'

// Текст "выезжает" снизу по словам при появлении в зоне видимости
export function AnimatedText({ as: Tag = 'p', text, delay = 0, stagger = 50, className }) {
  const [ref, inView] = useInView()
  const words = text.split(' ')

  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {words.map((word, index) => (
        <Fragment key={index}>
          <span aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-top">
            <span
              style={{ transitionDelay: `${delay + index * stagger}ms` }}
              className={cn(
                'inline-block transition duration-900 ease-out-expo',
                inView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
              )}
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 && ' '}
        </Fragment>
      ))}
    </Tag>
  )
}
