export interface IHero {
	name: string;
	description: string;
	github: string;
	linkedin: string;
	footer: string;
}

export interface HeroProps {
	hero: IHero;
}

export interface HomeProps {
	hero: IHero;
	pictures: IPicture[];
}

export interface IPicture {
	slug: string;
	title: string;
	description: string;
	creation_date: Date;
	thumbnail: string;
	badge: string;
}

export interface PictureProps {
	picture: IPicture;
	show: boolean[];
}

export interface PictureList {
	pictures: IPicture[];
}

export interface ClickedImage {
	clickedImage: IPicture;
}
