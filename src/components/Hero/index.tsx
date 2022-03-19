import { HeroProps } from 'types'

export function Hero({ hero }: HeroProps) {
  return (
    <>
      <h1>{hero.name}</h1>
      <h2>{hero.description}</h2>
    </>
  )
}
