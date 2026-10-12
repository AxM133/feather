import { cn } from '@/shared/lib'
import { NavItem } from '@/shared/ui'

export function NavLinks({ items, className }) {
  return (
    <ul className={cn('items-center gap-6 xl:gap-10', className)}>
      {items.map((item) => (
        <li key={item.label}>
          <NavItem href={item.href}>{item.label}</NavItem>
        </li>
      ))}
    </ul>
  )
}
