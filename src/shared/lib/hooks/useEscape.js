import { useEffect } from 'react'

export function useEscape(handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') handler()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handler, enabled])
}
