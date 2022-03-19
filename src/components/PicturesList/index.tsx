import { Picture } from "./Picture"
import { PictureList } from "types"

export function PicturesList({ pictures }: PictureList) {
  return (
    <>
      {pictures.map(picture => (
        <Picture key={picture.slug} picture={picture} />
      ))}
    </>
  )
}
