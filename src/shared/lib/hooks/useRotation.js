import { useCallback, useEffect, useState } from 'react'

// Активный элемент из списка, который сам переключается по таймеру, пока пользователь не взаимодействует
export function useRotation(ids, interval = 4000) {
  const [activeId, setActiveId] = useState(ids[0])
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || ids.length < 2) return
    const id = setInterval(() => {
      setActiveId((current) => ids[(ids.indexOf(current) + 1) % ids.length])
    }, interval)
    return () => clearInterval(id)
  }, [ids, interval, paused])

  const select = useCallback((id) => {
    setActiveId(id)
    setPaused(true)
  }, [])

  const resume = useCallback(() => setPaused(false), [])

  return { activeId, select, resume }
}
