import { Image } from '@/shared/ui'
import { neverAssembleContent } from '../config'
import { FeatureBlock } from './FeatureBlock'

export function NeverAssemble() {
  const { image, ...content } = neverAssembleContent

  return (
    <FeatureBlock
      {...content}
      reverse
      className="pb-24 md:pb-[220px]"
      media={
        <Image
          src={image.src}
          alt={image.alt}
          className="group mx-auto aspect-410/616 md:mx-0 w-full max-w-[410px]"
          imgClassName="duration-[1.5s] group-hover:scale-105"
        />
      }
    />
  )
}
