import { useState } from 'react'
import { isEmail } from '@/shared/lib'
import { subscribeToNewsletter } from '../api/subscribe'
import { newsletterMessages } from '../config/messages'

export function useNewsletter() {
  const [email, setEmailValue] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const setEmail = (value) => {
    setEmailValue(value)
    setError(null)
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!isEmail(email)) {
      setError(newsletterMessages.invalid)
      return
    }
    setStatus('loading')
    try {
      await subscribeToNewsletter(email.trim())
      setStatus('success')
      setEmailValue('')
    } catch {
      setStatus('idle')
      setError(newsletterMessages.failed)
    }
  }

  return { email, setEmail, status, error, submit }
}
