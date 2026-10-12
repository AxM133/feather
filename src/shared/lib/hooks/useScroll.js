import { useSyncExternalStore } from 'react'

const subscribe = (callback) => {
  window.addEventListener('scroll', callback, { passive: true })
  window.addEventListener('resize', callback)
  return () => {
    window.removeEventListener('scroll', callback)
    window.removeEventListener('resize', callback)
  }
}

export function useScrolled(offset = 0) {
  return useSyncExternalStore(subscribe, () => window.scrollY > offset)
}

// Прогресс прокрутки страницы, округлённый до 0.1%, чтобы не дёргать рендер на каждый пиксель
export function useScrollProgress() {
  return useSyncExternalStore(subscribe, () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    return max > 0 ? Math.round((window.scrollY / max) * 1000) / 1000 : 0
  })
}
