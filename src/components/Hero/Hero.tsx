import { HeroProps } from 'types';
import { Social } from './Social';

export function Hero({ hero }: HeroProps) {
  return (
    <div className='h-screen bg-slate-900 flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-white text-5xl'>{hero.name}</h1>
        <h2 className='text-slate-500 text-2xl leading-loose'>{hero.description}</h2>
        <Social hero={hero} />
      </div>
    </div>
  )
}
