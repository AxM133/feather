import { cn } from '@/shared/lib'
import { ArrowRightIcon } from './icons'

// Оранжевая ссылка из макета: подчёркивание "вырастает" слева, стрелка выезжает справа
export function TextLink({ href = '#', className, children }) {
  return (
    <a href={href} className={cn('group relative inline-flex items-center text-lg text-brand', className)}>
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-size-[0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out-expo group-hover:bg-size-[100%_1px]">
        {children}
      </span>
      <ArrowRightIcon className="absolute -right-6 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  )
}
