import { NewsletterForm } from '@/features/subscribe-newsletter'
import { Container, LogoMark, Reveal } from '@/shared/ui'
import { footerColumns, footerTitles, socialLinks } from '../config/links'
import { FooterColumn } from './FooterColumn'
import { FooterTitle } from './FooterTitle'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="border-t-2 border-lime bg-sand pt-20 pb-12">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[176px_230px_210px_1fr] lg:gap-0">
          {footerColumns.map((column, index) => (
            <Reveal key={column.title} delay={index * 100}>
              <FooterColumn title={column.title} links={column.links} />
            </Reveal>
          ))}
          <Reveal delay={footerColumns.length * 100}>
            <FooterTitle>{footerTitles.social}</FooterTitle>
            <SocialLinks items={socialLinks} />
            <FooterTitle className="mt-14">{footerTitles.newsletter}</FooterTitle>
            <NewsletterForm />
          </Reveal>
        </div>
        <div className="mt-12 flex justify-end">
          <LogoMark className="transition duration-500 ease-out-expo hover:-translate-y-2 hover:rotate-3" />
        </div>
      </Container>
    </footer>
  )
}
