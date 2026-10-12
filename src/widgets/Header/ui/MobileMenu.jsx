import { CheckDeliveryButton } from '@/features/check-delivery'
import { cn } from '@/shared/lib'
import { Container } from '@/shared/ui'
import { primaryNav, secondaryNav } from '../config/navigation'

const links = [...primaryNav, ...secondaryNav]

export function MobileMenu({ open, onClose }) {
  return (
    <div
      inert={!open}
      className={cn(
        'absolute inset-x-0 top-full grid h-[calc(100dvh-100%)] bg-cream transition-all duration-500 ease-out-expo lg:hidden',
        open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0',
      )}
    >
      <Container className="flex flex-col gap-6 py-10 text-3xl">
        {links.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            style={{ transitionDelay: open ? `${100 + index * 60}ms` : '0ms' }}
            className={cn(
              'transition duration-700 ease-out-expo hover:text-brand',
              open ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0',
            )}
          >
            {link.label}
          </a>
        ))}
        <CheckDeliveryButton className="self-start text-left text-brand" />
      </Container>
    </div>
  )
}
