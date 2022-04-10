import { HeroProps } from 'types'
import { RiGithubLine as GitHub } from 'react-icons/ri'
import { RiLinkedinLine as Linkedin } from 'react-icons/ri'

export function Social({ hero }: HeroProps) {
  return (
    <div className="flex h-28	justify-center items-center text-center">
      <a href={hero.github} className="no-underline hover:underline" target="_blank" rel="noreferrer" >
        <GitHub size="48" className="text-white hover:text-slate-500 duration-75 ease-in" />
      </a>

      <a href={hero.linkedin} className="no-underline hover:underline" target="_blank" rel="noreferrer">
        <Linkedin size="48" className="text-white hover:text-slate-500 duration-75 ease-in" />
      </a>
    </div>
  )
}
