import { useCallback, useEffect, useRef, useState } from 'react'
import { cartStore } from '@/entities/cart'

const FEEDBACK_DURATION = 1600

export function useAddToCart(product) {
  const [added, setAdded] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const add = useCallback(() => {
    cartStore.add(product)
    setAdded(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setAdded(false), FEEDBACK_DURATION)
  }, [product])

  return { added, add }
}
