import { formatPrice } from '@/shared/lib'

export function ProductPrice({ rent, retail, price }) {
  return (
    <div className="leading-7">
      <p>
        rent for <span className="text-xl text-brand">{formatPrice(rent)}</span>/mo
      </p>
      <p>
        or buy for <span className="text-muted">{formatPrice(retail)}</span>
      </p>
      <p>{formatPrice(price)}</p>
    </div>
  )
}
