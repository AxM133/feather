import { useDisclosure, useLockBodyScroll, useScrolled, useScrollProgress } from '@/shared/lib'

const SCROLL_OFFSET = 8

export function useHeader() {
  const menu = useDisclosure()
  const scrolled = useScrolled(SCROLL_OFFSET)
  const progress = useScrollProgress()

  useLockBodyScroll(menu.isOpen)

  return { menu, scrolled, progress }
}
