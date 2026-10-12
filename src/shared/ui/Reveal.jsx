import { cn, useInView } from '@/shared/lib'

const hiddenState = {
  up: 'translate-y-10 opacity-0',
  left: '-translate-x-12 opacity-0',
  right: 'translate-x-12 opacity-0',
  zoom: 'scale-95 opacity-0',
  fade: 'opacity-0',
}

// Появление блока при прокрутке до него
export function Reveal({ as: Tag = 'div', from = 'up', delay = 0, className, children, ...props }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition duration-1000 ease-out-expo',
        inView ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : hiddenState[from],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
