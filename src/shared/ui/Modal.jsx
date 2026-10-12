import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn, useEscape, useLockBodyScroll } from '@/shared/lib'
import { CloseIcon } from './icons'

export function Modal({ open, onClose, title, children }) {
  const titleId = useId()
  const dialogRef = useRef(null)

  useLockBodyScroll(open)
  useEscape(onClose, open)

  useEffect(() => {
    if (open) dialogRef.current?.querySelector('input, button:not([data-close]), [href]')?.focus()
  }, [open])

  return createPortal(
    <div
      inert={!open}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center p-4 transition duration-300',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'relative w-full max-w-md border-2 border-ink bg-cream p-8 shadow-[10px_10px_0_var(--color-mint)] transition duration-500 ease-out-expo md:p-10',
          open ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95',
        )}
      >
        <button
          type="button"
          data-close
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 rounded-full p-2 transition hover:rotate-90 hover:bg-ink/5"
        >
          <CloseIcon className="size-5" />
        </button>
        <h2 id={titleId} className="mb-6 pr-8 text-3xl">
          {title}
        </h2>
        {children}
      </div>
    </div>,
    document.body,
  )
}
