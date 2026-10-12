import { TextLink } from '@/shared/ui'
import { garageSaleContent } from '../config'
import { FeatureBlock } from './FeatureBlock'
import { GaragePoster } from './GaragePoster'

export function GarageSale() {
  const { poster, terms, ...content } = garageSaleContent

  return (
    <FeatureBlock
      {...content}
      reverse
      aside={
        <p>
          {terms.text}{' '}
          <TextLink href={terms.link.href} className="text-ink">
            {terms.link.label}
          </TextLink>
        </p>
      }
      media={<GaragePoster poster={poster} />}
    />
  )
}
