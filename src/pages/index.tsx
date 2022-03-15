import Prismic from '@prismicio/client'

import { GetStaticProps } from "next/types"
import { getPrismicClient } from "../services/prismic"

export default function Home({ pictures }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>Hello World</div>
      <div>Hello World</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'picture')
  ], { orderings: '[document.first_publication_date desc]' })

  const pictures = response.results.map(picture => ({
    slug: picture.uid,
    title: picture.data.title,
    description: picture.data.description,
    creation_date: new Intl.DateTimeFormat("en-US").format(
      new Date(picture.data.creation_date)
    ),
    thumbnail: picture.data.thumbnail.url,
    badges: picture.data.badges
  }))

  console.log(pictures)

  return {
    props: {
      pictures
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
