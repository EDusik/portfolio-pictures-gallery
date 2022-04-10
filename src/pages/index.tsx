import Prismic from '@prismicio/client'

import { Hero } from "../components/Hero"
import { Footer } from "../components/Footer"
import { LightBox } from 'components/LightBox'
import { PictureList } from "../components/PicturesList"
import { GetStaticProps } from "next/types"
import { getPrismicClient } from "../services/prismic"
import { IHero, HomeProps } from 'types'
import { useContext } from "react"
import { Context } from "context/index";

export default function Home({ hero, pictures }: HomeProps) {
  const { context } = useContext(Context);

  return (
    <>
      {context.clickedImage && <LightBox clickedImage={context.clickedImage} />}
      <Hero hero={hero} />
      <PictureList pictures={pictures} />
      <Footer hero={hero} />
    </>
  )
}

function oneDayInHours(): number {
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
    footer: hero.data.footer
  }))

  const hero: IHero = Object.assign({}, ...home);
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
