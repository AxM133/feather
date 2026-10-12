import { Button, MapPinIcon } from '@/shared/ui'
import { deliveryMessages } from '../config/messages'
import { deliveryZones } from '../config/zones'
import { useCheckDelivery } from '../model/useCheckDelivery'
import { DeliveryResult } from './DeliveryResult'

export function CheckDeliveryForm() {
  const { zip, setZip, result, check } = useCheckDelivery()

  return (
    <form onSubmit={check} noValidate>
      <p className="mb-6 text-muted">{deliveryMessages.description}</p>
      <div className="flex gap-3">
        <label className="flex flex-1 items-center gap-2 border-b-2 border-ink transition-colors focus-within:border-brand">
          <MapPinIcon className="shrink-0" />
          <input
            inputMode="numeric"
            autoComplete="postal-code"
            aria-label={deliveryMessages.placeholder}
            placeholder={deliveryMessages.placeholder}
            value={zip}
            onChange={(event) => setZip(event.target.value)}
            className="w-full bg-transparent py-2 text-lg tracking-widest outline-none placeholder:tracking-normal"
          />
        </label>
        <Button type="submit" size="sm">
          {deliveryMessages.submit}
        </Button>
      </div>
      <DeliveryResult result={result} />
      <p className="mt-6 text-sm text-muted">We deliver to: {deliveryZones.map((zone) => zone.city).join(' · ')}</p>
    </form>
  )
}
