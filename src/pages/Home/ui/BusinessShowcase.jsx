import { cn } from '@/shared/lib'
import { Image } from '@/shared/ui'
import { useBusinessShowcase } from '../model'

export function BusinessShowcase() {
  const { items, isActive, select, resume } = useBusinessShowcase()

  return (
    <div className="-mr-(--gutter) flex h-[300px] gap-1 md:h-[408px] md:bleed-r" onMouseLeave={resume}>
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          aria-pressed={isActive(item.id)}
          onMouseEnter={() => select(item.id)}
          onFocus={() => select(item.id)}
          onClick={() => select(item.id)}
          className={cn(
            'relative min-w-0 basis-0 overflow-hidden transition-[flex-grow] duration-1000 ease-out-expo',
            isActive(item.id) ? 'grow-[1.7]' : 'grow',
          )}
        >
          <Image
            src={item.image.src}
            alt={item.image.alt}
            className="absolute inset-0"
            imgClassName={cn('duration-[1.5s]', isActive(item.id) ? 'scale-105' : 'scale-100 grayscale-[40%]')}
          />
          <span
            className={cn(
              'absolute top-7 bg-mint-light px-6 py-1 text-lg tracking-wide transition duration-700 ease-out-expo md:text-[22px]',
              index === 0 ? 'left-0' : 'right-0',
              isActive(item.id) ? 'translate-x-0' : index === 0 ? '-translate-x-3' : 'translate-x-3',
            )}
          >
            {item.label}
          </span>
        </button>
      ))}
    </div>
  )
}
