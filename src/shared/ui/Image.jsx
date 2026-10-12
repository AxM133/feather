import { useCallback, useState } from 'react'
import { cn } from '@/shared/lib'

// Картинка с ленивой загрузкой и плавным появлением после загрузки
export function Image({ src, alt = '', eager = false, className, imgClassName }) {
  const [loaded, setLoaded] = useState(false)

  const imgRef = useCallback((node) => {
    if (node?.complete) setLoaded(true)
  }, [])

  return (
    <div className={cn('overflow-hidden', className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          'size-full object-cover transition duration-700 ease-out-expo',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
        )}
      />
    </div>
  )
}
