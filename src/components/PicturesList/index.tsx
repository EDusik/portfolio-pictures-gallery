import { Picture } from "./Picture"

export function PicturesList({ pictures }) {
  return (
    <>
      {pictures.map(picture => (
        <Picture key={picture.slug} picture={picture} />
      ))}
    </>
  )
}
