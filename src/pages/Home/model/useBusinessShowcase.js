import { useRotation } from '@/shared/lib'
import { businessContent } from '../config'

const ROTATION_INTERVAL = 3500
const ids = businessContent.showcase.map((item) => item.id)

// Какая из картинок (Residential / Office) сейчас раскрыта
export function useBusinessShowcase() {
  const { activeId, select, resume } = useRotation(ids, ROTATION_INTERVAL)

  return {
    items: businessContent.showcase,
    isActive: (id) => id === activeId,
    select,
    resume,
  }
}
