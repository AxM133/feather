import { cn } from '@/shared/lib'

export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-(--container) px-(--gutter)', className)}>{children}</div>
}
