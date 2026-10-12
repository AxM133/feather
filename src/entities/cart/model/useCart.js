import { useSyncExternalStore } from 'react'
import { cartStore } from './cartStore'

export function useCart() {
  const items = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return { items, count }
}
