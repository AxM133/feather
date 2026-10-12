import { cn } from '@/shared/lib'

// Знак-арка из подвала макета
export function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 52 88" aria-hidden="true" className={cn('h-[88px] w-auto', className)}>
      <path d="M0 88V26C0 11.6 11.6 0 26 0c5 0 9.6 1.4 13.6 3.8V88Z" fill="var(--color-brand)" />
      <path d="M34 88V18.5c0-4.4 2.3-8.4 6-10.7A26 26 0 0 1 52 26v62Z" fill="var(--color-mint)" />
      <path d="M0 88 26 70l26 10v8Z" fill="var(--color-rust)" />
    </svg>
  )
}
