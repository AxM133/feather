import { FooterTitle } from './FooterTitle'

export function FooterColumn({ title, links }) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="inline-block transition duration-300 hover:translate-x-1 hover:text-brand">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
