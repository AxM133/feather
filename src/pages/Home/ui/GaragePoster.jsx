import { Image } from '@/shared/ui'

export function GaragePoster({ poster }) {
  return (
    <div className="group mx-auto flex aspect-421/616 md:mx-0 w-full max-w-[421px] flex-col items-center justify-center border-[18px] border-lime bg-cream px-6 text-center transition duration-700 ease-out-expo hover:-rotate-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
      <Image
        src={poster.image.src}
        alt={poster.image.alt}
        className="mb-8 w-[86%] animate-float"
        imgClassName="object-contain transition duration-700 group-hover:scale-105"
      />
      <p className="text-2xl font-medium md:text-[26px]">{poster.title}</p>
      <p className="mt-2 text-sm">{poster.subtitle}</p>
    </div>
  )
}
