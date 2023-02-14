export type ComicData = {
	id: number,
	title?: string,
	issueNumber?: number,
	dates?: Date[],
	creators?: ComicCreator[],
	thumbnail?: ComicThumbnail[],
}[]

export type Date = {
	type?: string,
	date?: string,
}

export type ComicCreator = {
	items?: CreatorItem[],
}

export type CreatorItem = {
	name?: string,
}

export type ComicThumbnail = {
	path?: string,
	extension?: string,
}
