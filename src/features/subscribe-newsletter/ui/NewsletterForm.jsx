import { cn } from '@/shared/lib'
import { ArrowRightIcon, CheckIcon, LoaderIcon } from '@/shared/ui'
import { newsletterMessages } from '../config/messages'
import { useNewsletter } from '../model/useNewsletter'

export function NewsletterForm({ className }) {
  const { email, setEmail, status, error, submit } = useNewsletter()

  if (status === 'success') {
    return (
      <p role="status" className={cn('flex max-w-[298px] animate-fade-up items-center gap-2 py-2', className)}>
        <CheckIcon className="text-brand" /> {newsletterMessages.success}
      </p>
    )
  }

  return (
    <form onSubmit={submit} noValidate className={cn('max-w-[298px]', className)}>
      <div
        className={cn(
          'flex items-center border-b-2 transition-colors focus-within:border-brand',
          error ? 'border-tomato' : 'border-ink',
        )}
      >
        <input
          type="email"
          autoComplete="email"
          aria-label="Email address"
          aria-invalid={Boolean(error)}
          placeholder={newsletterMessages.placeholder}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-muted/50"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          disabled={status === 'loading'}
          className="p-2 transition duration-300 hover:translate-x-1 hover:text-brand disabled:opacity-60"
        >
          {status === 'loading' ? <LoaderIcon className="animate-spin" /> : <ArrowRightIcon />}
        </button>
      </div>
      {error && (
        <p role="alert" className="mt-2 animate-fade-up text-sm text-tomato">
          {error}
        </p>
      )}
    </form>
  )
}
