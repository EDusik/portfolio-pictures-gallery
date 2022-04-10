import { HeroProps } from 'types';

export function Footer({ hero }: HeroProps) {
  return (
    <div className='flex h-12	pt-5 pb-5 justify-center items-center text-center bg-slate-300 text-slate-900'>
      <p dangerouslySetInnerHTML={{ __html: hero.footer }}></p>
    </div>
  )
}
