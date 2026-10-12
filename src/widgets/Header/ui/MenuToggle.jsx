import { cn } from '@/shared/lib'

// Бургер, который анимированно превращается в крестик
export function MenuToggle({ open, onClick, className }) {
  const line = 'absolute left-0 h-0.5 w-6 bg-current transition duration-300 ease-out-expo'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className={cn('relative size-6', className)}
    >
      <span className={cn(line, 'top-1', open && 'translate-y-[7px] rotate-45')} />
      <span className={cn(line, 'top-[11px]', open && 'scale-x-0 opacity-0')} />
      <span className={cn(line, 'top-[18px]', open && '-translate-y-[7px] -rotate-45')} />
    </button>
  )
}
