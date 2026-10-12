import logo from '@/shared/assets/images/logo.png'
import { cn } from '@/shared/lib'

export function Logo({ className }) {
  return (
    <a href="/" aria-label="Feather — home" className={cn('inline-block transition duration-300 hover:scale-105', className)}>
      <img src={logo} alt="feather" className="h-7 w-auto md:h-8" />
    </a>
  )
}
