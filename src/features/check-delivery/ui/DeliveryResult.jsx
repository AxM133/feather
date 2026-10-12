import { cn } from '@/shared/lib'
import { CheckIcon, MapPinIcon } from '@/shared/ui'
import { deliveryMessages } from '../config/messages'

const styles = {
  available: 'bg-mint/40 text-ink',
  unavailable: 'bg-blush text-ink',
  invalid: 'bg-transparent px-0 text-tomato',
}

export function DeliveryResult({ result }) {
  if (result.status === 'idle') return null

  const message =
    result.status === 'available' ? deliveryMessages.available(result.city) : deliveryMessages[result.status]
  const Icon = result.status === 'available' ? CheckIcon : MapPinIcon

  return (
    <p
      key={`${result.status}-${result.city ?? ''}`}
      role="status"
      className={cn('mt-4 flex animate-fade-up items-center gap-2 px-4 py-3', styles[result.status])}
    >
      {result.status !== 'invalid' && <Icon className="shrink-0" />}
      {message}
    </p>
  )
}
