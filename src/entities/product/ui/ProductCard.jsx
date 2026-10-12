import { Image } from '@/shared/ui'
import { ProductPrice } from './ProductPrice'

// actions — слот для кнопок из слоя features (например, "в корзину")
export function ProductCard({ product, actions }) {
  return (
    <article className="group flex h-full flex-col items-center bg-white px-5 pt-10 pb-8 text-center text-base transition duration-500 ease-out-expo hover:-translate-y-2 hover:shadow-[0_28px_48px_-28px_rgba(0,0,0,0.35)] md:text-lg">
      <Image
        src={product.image}
        alt={product.name}
        className="mb-6 aspect-209/180 w-full"
        imgClassName="object-contain group-hover:scale-110"
      />
      <h3 className="mb-2 text-balance">{product.name}</h3>
      <ProductPrice rent={product.rent} retail={product.retail} price={product.price} />
      {actions && (
        <div className="mt-6 w-full transition duration-500 ease-out-expo lg:translate-y-3 lg:opacity-0 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
          {actions}
        </div>
      )}
    </article>
  )
}
