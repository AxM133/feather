import { cn } from '@/shared/lib'

const variants = {
  primary: 'bg-brand text-ink hover:bg-ink hover:text-white',
  white: 'bg-white text-ink hover:bg-ink hover:text-white',
  dark: 'bg-ink text-white hover:bg-brand hover:text-ink',
}

const sizes = {
  sm: 'h-11 px-6 text-base',
  md: 'h-[60px] px-8 text-lg',
}

export function Button({ href, variant = 'primary', size = 'md', className, children, ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      type={href ? undefined : 'button'}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full whitespace-nowrap transition duration-300 ease-out-expo',
        'hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(0,0,0,0.45)] active:translate-y-0 active:scale-[0.98]',
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
