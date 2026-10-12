import { businessContent } from '../config'
import { BusinessShowcase } from './BusinessShowcase'
import { FeatureBlock } from './FeatureBlock'

export function ForBusiness() {
  const { id, title, paragraphs, link } = businessContent

  return <FeatureBlock id={id} title={title} paragraphs={paragraphs} link={link} media={<BusinessShowcase />} />
}
