import { cn } from '@/shared/lib'

export function FooterTitle({ className, children }) {
  return <h3 className={cn('mb-7 text-base tracking-[0.15em] uppercase', className)}>{children}</h3>
}
