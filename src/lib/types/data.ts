export type Data = {
	links?: Link[];
	projects?: Project[];
	shields?: Shield[];
};

export type Link = {
	site: string;
	username: string;
	icon: string;
	url: string;
	rel?: string;
	emoji?: string;
};

export type Project = {
	title: string;
	description: string;
	links: ProjectLink[];
	img: string;
};

export type ProjectLink = {
	url: string;
	title: string;
};

export type Shield = {
	text: string;
	uri: string;
};
