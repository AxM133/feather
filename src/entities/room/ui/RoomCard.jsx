import { Image } from '@/shared/ui'

export function RoomCard({ room }) {
  return (
    <a
      href={room.href}
      style={{ '--border': room.accent.border, '--shadow': room.accent.shadow }}
      className="group block border-2 border-(--border) bg-white shadow-[8px_8px_0_var(--shadow)] transition duration-500 ease-out-expo hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[14px_14px_0_var(--shadow)]"
    >
      <Image src={room.image} alt={room.title} className="aspect-243/191" imgClassName="group-hover:scale-110" />
      <p className="py-4 text-center text-base md:py-5 md:text-lg">{room.title}</p>
    </a>
  )
}
