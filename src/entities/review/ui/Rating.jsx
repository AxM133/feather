import { StarIcon } from '@/shared/ui'

export function Rating({ value, max = 5, color }) {
  return (
    <div role="img" aria-label={`${value} out of ${max} stars`} className="flex gap-0.5" style={{ color }}>
      {Array.from({ length: max }, (_, index) => (
        <StarIcon
          key={index}
          style={{ transitionDelay: `${index * 40}ms` }}
          className={`size-6 transition duration-300 group-hover:-translate-y-1 ${index < value ? '' : 'opacity-25'}`}
        />
      ))}
    </div>
  )
}
