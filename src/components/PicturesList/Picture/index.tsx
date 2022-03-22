import Image from 'next/image'
import { PictureProps } from 'types'

export function Picture({ picture, show }: PictureProps) {

  const setFlexColumns = () => {
    return 'flex-auto w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5'
  }

  return (
    <div
      className={`relative transition ease-in duration-300 transform ${setFlexColumns()} ${show ? "" : "translate-y-16 opacity-0"
        }`}
    >
      <div className="flex absolute inset-0 transition duration-150	ease-in cursor-pointer">
        <div className="flex absolute inset-0 bg-slate-700 opacity-70 hover:opacity-0">
          <div className="flex mx-auto text-white justify-center items-center">
            <h3 className="uppercase text-xl">{picture.title}</h3>
            {/*<p className="flex justify-start">{picture.description}</p>
            <time className="flex justify-start">{picture.creation_date}</time> 
            <span className="inline-block align-middle">{picture.badge}</span> */}
          </div>
        </div>
      </div>
      <img
        className="object-cover h-64 w-full"
        src={picture.thumbnail}
        alt={picture.description}
      />
    </div>
  )
}
