import Prismic from '@prismicio/client'

import { Hero } from "../components/Hero"
import { PicturesList } from "../components/PicturesList"
import { GetStaticProps } from "next/types"
import { getPrismicClient } from "../services/prismic"

export default function Home({ hero, pictures }) {
  return (
    <>
      <Hero hero={hero} />
      <PicturesList pictures={pictures} />
    </>
  )
}

function oneDayInHours() {
  return 60 * 60 * 24 // 24 hours
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const pictureResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'picture')
  ], { orderings: '[document.first_publication_date desc]' })

  const homeResponse = await prismic.query([
    Prismic.predicates.at('document.type', 'home')
  ])

  const home = homeResponse.results.map(hero => ({
    name: hero.data.name,
    description: hero.data.description,
    github: hero.data.github.url,
    linkedin: hero.data.linkedin.url,
  }))

  const hero = Object.assign({}, ...home);
  const pictures = pictureResponse.results.map(picture => ({
    slug: picture.uid,
    title: picture.data.title,
    description: picture.data.description,
    creation_date: new Intl.DateTimeFormat("en-US").format(
      new Date(picture.data.creation_date)
    ),
    thumbnail: picture.data.thumbnail.url,
    badge: picture.data.badge
  }))

  return {
    props: {
      pictures,
      hero
    },
    revalidate: oneDayInHours()
  }
}
