import { useState } from 'react'
import { findDeliveryZone, isValidZip, normalizeZip } from '../lib/zip'

const IDLE = { status: 'idle' }

export function useCheckDelivery() {
  const [zip, setZipValue] = useState('')
  const [result, setResult] = useState(IDLE)

  const setZip = (value) => {
    setZipValue(normalizeZip(value))
    setResult(IDLE)
  }

  const check = (event) => {
    event.preventDefault()
    if (!isValidZip(zip)) {
      setResult({ status: 'invalid' })
      return
    }
    const zone = findDeliveryZone(zip)
    setResult(zone ? { status: 'available', city: zone.city } : { status: 'unavailable' })
  }

  return { zip, setZip, result, check }
}
