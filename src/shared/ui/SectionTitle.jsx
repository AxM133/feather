import { cn } from '@/shared/lib'
import { AnimatedText } from './AnimatedText'

const sizes = {
  md: 'text-[28px] leading-tight md:text-4xl',
  lg: 'text-4xl leading-tight md:text-5xl',
}

export function SectionTitle({ size = 'lg', align = 'center', className, children }) {
  return (
    <AnimatedText
      as="h2"
      text={children}
      className={cn(sizes[size], align === 'center' && 'text-center', className)}
    />
  )
}
