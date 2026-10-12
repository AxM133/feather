export function SocialLinks({ items }) {
  return (
    <ul className="flex flex-wrap gap-4">
      {items.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            className="flex size-12 items-center justify-center rounded-full border-2 border-ink transition duration-300 ease-out-expo hover:-translate-y-1 hover:bg-ink hover:text-white"
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  )
}
