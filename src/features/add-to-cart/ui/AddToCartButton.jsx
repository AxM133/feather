import { Button, CheckIcon } from '@/shared/ui'
import { useAddToCart } from '../model/useAddToCart'

export function AddToCartButton({ product }) {
  const { added, add } = useAddToCart(product)

  return (
    <Button size="sm" variant={added ? 'dark' : 'primary'} onClick={add} className="w-full" aria-live="polite">
      {added ? (
        <>
          <CheckIcon className="animate-pop" /> Added
        </>
      ) : (
        'Add to cart'
      )}
    </Button>
  )
}
