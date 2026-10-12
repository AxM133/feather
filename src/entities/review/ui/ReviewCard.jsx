import { Rating } from './Rating'

export function ReviewCard({ review }) {
  return (
    <article
      style={{ '--border': review.accent.border, '--shadow': review.accent.shadow }}
      className="group flex h-full min-h-[254px] w-[min(82vw,396px)] flex-col border-2 border-(--border) bg-white px-8 pt-8 pb-10 shadow-[8px_-8px_0_var(--shadow)] transition duration-500 ease-out-expo hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[12px_-12px_0_var(--shadow)]"
    >
      <Rating value={review.rating} color={review.accent.shadow} />
      <p className="mt-5 mb-6 text-lg leading-7">{review.text}</p>
      <p className="mt-auto">
        - {review.author}, {review.location}
      </p>
    </article>
  )
}
