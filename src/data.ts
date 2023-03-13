import type { Data } from "$lib/types/data";

const data: Data = {
	links: [
		{
			site: "GitHub",
			username: "AHollowedHunter",
			icon: "github-mark-white.svg",
			url: "https://github.com/AHollowedHunter",
			emoji: "🐈"
		},
		{
			site: "LinkedIn",
			username: "acave-dev",
			icon: "linkedin-white.svg",
			url: "https://www.linkedin.com/in/acave-dev",
			emoji: "💼"
		},
		{
			site: "Instagram",
			username: "@acave.photos",
			icon: "instagram-white.svg",
			url: "https://www.instagram.com/acave.photos/",
			emoji: "📷"
		},
		{
			site: "Mastodon",
			username: "@AHollowedHunter@universeodon.com",
			icon: "mastodon.svg",
			url: "https://techhub.social/@AHollowedHunter",
			rel: "me",
			emoji: "🐘"
		}
	],
	projects: [
		{
			title: "MagusBot",
			description:
				"A Discord bot that provides information about the game DotA 2; such as the latest news, live e-sports info, parsed patch notes, and other game information.",
			url: "https://magusbot.xyz",
			img: "https://magusbot.xyz/images/magus.png"
		}
	]
};

export default data;
