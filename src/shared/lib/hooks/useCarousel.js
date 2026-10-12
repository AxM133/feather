import { useCallback, useEffect, useRef, useState } from 'react'

const EDGE_TOLERANCE = 4

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useCarousel({ autoplay = 0 } = {}) {
  const trackRef = useRef(null)
  const [edges, setEdges] = useState({ atStart: true, atEnd: false })
  const [paused, setPaused] = useState(false)

  const updateEdges = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setEdges({
      atStart: track.scrollLeft <= EDGE_TOLERANCE,
      atEnd: track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE,
    })
  }, [])

  const scrollByItem = useCallback((direction) => {
    const track = trackRef.current
    if (!track) return
    const item = track.firstElementChild
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const step = item ? item.getBoundingClientRect().width + gap : track.clientWidth
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }, [])

  const next = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE
    if (atEnd) track.scrollTo({ left: 0, behavior: 'smooth' })
    else scrollByItem(1)
  }, [scrollByItem])

  const prev = useCallback(() => scrollByItem(-1), [scrollByItem])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      track.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  useEffect(() => {
    if (!autoplay || paused || prefersReducedMotion()) return
    const id = setInterval(next, autoplay)
    return () => clearInterval(id)
  }, [autoplay, paused, next])

  return {
    trackRef,
    next,
    prev,
    canPrev: !edges.atStart,
    pause: useCallback(() => setPaused(true), []),
    resume: useCallback(() => setPaused(false), []),
  }
}
