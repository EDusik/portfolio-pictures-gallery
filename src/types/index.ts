interface IHero {
	name: string;
	description: string;
	github: string;
	linkedin: string;
	footer: string;
}

interface HeroProps {
	hero: IHero;
}

interface HomeProps {
	hero: IHero;
	pictures: IPicture[];
}

interface IPicture {
	slug: string;
	title: string;
	description: string;
	creation_date: Date;
	thumbnail: string;
	badge: string;
}

interface PictureProps {
	picture: IPicture;
	show: boolean[];
}

interface PictureList {
	pictures: IPicture[];
}

export type { IHero, HomeProps, HeroProps, IPicture, PictureList, PictureProps };
