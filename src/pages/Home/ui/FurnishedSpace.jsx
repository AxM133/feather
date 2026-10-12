import { Image } from '@/shared/ui'
import { furnishedContent } from '../config'
import { FeatureBlock } from './FeatureBlock'

export function FurnishedSpace() {
  const { image, ...content } = furnishedContent

  return (
    <FeatureBlock
      {...content}
      media={
        <Image
          src={image.src}
          alt={image.alt}
          className="group -mr-(--gutter) aspect-616/411 md:bleed-r"
          imgClassName="duration-[1.5s] group-hover:scale-105"
        />
      }
    />
  )
}
