import { RoomCard, rooms } from '@/entities/room'
import { Container, Reveal, SectionTitle } from '@/shared/ui'
import { shopByRoomContent } from '../config'

export function ShopByRoom() {
  return (
    <section id={shopByRoomContent.id} className="scroll-mt-16 bg-cream pt-24 pb-16 md:pt-[130px]">
      <Container>
        <SectionTitle className="mb-12">{shopByRoomContent.title}</SectionTitle>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-[34px]">
          {rooms.map((room, index) => (
            <Reveal as="li" key={room.id} delay={index * 120}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
