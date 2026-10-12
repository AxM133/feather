import { CartButton } from '@/entities/cart'
import { CheckDeliveryButton } from '@/features/check-delivery'
import { cn } from '@/shared/lib'
import { Container, Logo } from '@/shared/ui'
import { primaryNav, secondaryNav } from '../config/navigation'
import { useHeader } from '../model/useHeader'
import { MenuToggle } from './MenuToggle'
import { MobileMenu } from './MobileMenu'
import { NavLinks } from './NavLinks'

export function Header() {
  const { menu, scrolled, progress } = useHeader()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-[background-color,box-shadow] duration-300',
        scrolled || menu.isOpen ? 'bg-cream/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md' : 'bg-cream',
      )}
    >
      <Container
        className={cn(
          'grid grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-300',
          scrolled ? 'h-16' : 'h-[72px] lg:h-[85px]',
        )}
      >
        <nav aria-label="Primary" className="flex items-center">
          <MenuToggle open={menu.isOpen} onClick={menu.toggle} className="lg:hidden" />
          <NavLinks items={primaryNav} className="hidden lg:flex" />
        </nav>

        <Logo />

        <div className="flex items-center justify-end gap-6 xl:gap-10">
          <CheckDeliveryButton className="hidden lg:inline" />
          <NavLinks items={secondaryNav} className="hidden lg:flex" />
          <CartButton />
        </div>
      </Container>

      <span
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-brand"
      />

      <MobileMenu open={menu.isOpen} onClose={menu.close} />
    </header>
  )
}
