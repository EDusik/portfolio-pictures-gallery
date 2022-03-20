import { HeroProps } from 'types'

export function Footer({ hero }: HeroProps) {
  return (
    <div className="flex h-16	justify-center items-center text-center bg-slate-300 text-slate-900">
      <p>Made with ♡ by <strong>{hero.name}</strong></p>
    </div>
  )
}
