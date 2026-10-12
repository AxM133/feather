import { cn, useCarousel } from '@/shared/lib'
import { ArrowLeftIcon, ArrowRightIcon } from './icons'

const arrowClass =
  'flex size-12 items-center justify-center rounded-full border-2 border-ink transition duration-300 hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-30'

export function Carousel({ items, getKey, renderItem, autoplay = 5000, className, trackClassName }) {
  const { trackRef, next, prev, canPrev, pause, resume } = useCarousel({ autoplay })

  return (
    <div className={className} onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
      <ul
        ref={trackRef}
        className={cn('flex snap-x snap-mandatory gap-8 overflow-x-auto scrollbar-none', trackClassName)}
      >
        {items.map((item) => (
          <li key={getKey(item)} className="shrink-0 snap-start">
            {renderItem(item)}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex justify-center gap-3">
        <button type="button" aria-label="Previous" onClick={prev} disabled={!canPrev} className={arrowClass}>
          <ArrowLeftIcon className="size-5" />
        </button>
        <button type="button" aria-label="Next" onClick={next} className={arrowClass}>
          <ArrowRightIcon className="size-5" />
        </button>
      </div>
    </div>
  )
}
