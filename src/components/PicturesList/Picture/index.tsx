import Image from 'next/image'
import { PictureProps } from 'types'

export function Picture({ picture, show }: PictureProps) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${show ? "" : "translate-y-16 opacity-0"
        }`}
    >
      <div className="flex absolute inset-0 z-10 transition duration-400 ease-in cursor-pointer	hover:opacity-0">
        <div className="flex absolute inset-0 bg-black opacity-60">
          <div className="flex mx-auto text-white justify-center items-center">
            <h3 className="uppercase text-xl">{picture.title}</h3>
            {/*<p className="flex justify-start">{picture.description}</p>
            <time className="flex justify-start">{picture.creation_date}</time> 
            <span className="inline-block align-middle">{picture.badge}</span> */}
          </div>
        </div>
      </div>
      <img
        src={picture.thumbnail}
        alt={picture.description}
      />
    </div>
  )
}