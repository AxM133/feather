import { cn } from '@/shared/lib'
import { CartIcon } from '@/shared/ui'
import { useCart } from '../model/useCart'

export function CartButton({ className }) {
  const { count } = useCart()

  return (
    <a
      href="#cart"
      aria-label={`Cart, ${count} items`}
      className={cn('relative inline-flex transition duration-300 hover:-rotate-6 hover:text-brand', className)}
    >
      <CartIcon className="size-7" strokeWidth={1.5} />
      {count > 0 && (
        <span
          key={count}
          className="absolute -top-2 -right-2 flex size-5 animate-pop items-center justify-center rounded-full bg-brand text-xs font-medium text-white"
        >
          {count}
        </span>
      )}
    </a>
  )
}
