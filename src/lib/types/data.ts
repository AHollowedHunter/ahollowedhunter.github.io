export type Data = {
	links?: Link[];
	projects?: Project[];
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
	url: string;
	img: string;
};
