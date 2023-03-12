export type Data = {
	links: Link[];
};

export type Link = {
	site: string;
	username: string;
	icon: string;
	url: string;
	rel?: string;
	emoji?: string;
};
