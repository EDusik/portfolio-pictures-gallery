import { Dispatch } from 'react';

export enum GlobalActionType {
	SET_OPEN_IMAGE = 'SET_OPEN_IMAGE'
}

export interface GlobalState {
	clickedImage: IPicture;
}

export interface IPicture {
	badge: string;
	creation_date: Date;
	description: string;
	slug: string;
	thumbnail: string;
	title: string;
}

export interface ContextProps<T, P> {
	context: T;
	dispatch: Dispatch<P>;
}

export type GlobalAction = { type: GlobalActionType.SET_OPEN_IMAGE; payload: IPicture };
export interface GlobalContextProps extends ContextProps<GlobalState, GlobalAction> {}
