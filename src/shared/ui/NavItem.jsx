import { cn } from '@/shared/lib'

// Пункт навигации с анимированным подчёркиванием. Без href рендерится кнопкой.
export function NavItem({ href, className, children, ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      type={href ? undefined : 'button'}
      className={cn(
        'relative cursor-pointer whitespace-nowrap after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
