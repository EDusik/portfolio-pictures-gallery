import Image from 'next/image'

export function Picture({ picture }) {
  return (
    <>
      <h3>{picture.title}</h3>
      <p>{picture.description}</p>
      <span>{picture.badge}</span>
      <time>{picture.creation_date}</time>
      <Image
        src={picture.thumbnail}
        alt={picture.description}
        width={200}
        height={200}
      />
    </>
  )
}
