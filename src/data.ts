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
			site: "Mastodon",
			username: "@AHollowedHunter@techhub.social",
			icon: "mastodon.svg",
			url: "https://techhub.social/@AHollowedHunter",
			rel: "me",
			emoji: "🐘"
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
		}
	],
	projects: [
		{
			title: "MagusBot",
			description:
				"A Discord bot that provides information about the game DotA 2; such as the latest news, live e-sports info, parsed patch notes, and other game information.",
			links: [
				{ url: "https://magusbot.xyz", title: "Website" },
				{ url: "https://github.com/AHollowedHunter/Magus", title: "Repository" }
			],
			img: "images/magus.png"
		},
		{
			title: "National Trust Discover App",
			description:
				"A Redesigned National Trust app, written in TypeScript with React Native/Expo. This was a Ubiquitous Computing project for University.",
			links: [
				{
					url: "https://github.com/AHollowedHunter/National-Trust-App-Ubiquitous-Computing",
					title: "Repository"
				}
			],
			img: "images/nt-app.png"
		}
	],
	shields: [
		{
			text: "C#",
			uri: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
		},
		{
			text: ".Net",
			uri: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white"
		},
		{
			text: "TypeScript",
			uri: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
		},
		{
			text: "GraphQL",
			uri: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
		},
		{
			text: "Azure",
			uri: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white"
		},
		{
			text: "Terraform",
			uri: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white"
		},
		{
			text: "AWS",
			uri: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
		},
		{
			text: "Google Cloud",
			uri: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
		},
		{
			text: "MongoDB",
			uri: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
		},
		{
			text: "Svelte",
			uri: "https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white"
		},
		{
			text: "Microsoft SQL Server",
			uri: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
		},
		{
			text: "Prometheus",
			uri: "https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white"
		},
		{
			text: "Grafana",
			uri: "https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white"
		},
		{
			text: "Python",
			uri: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
		},
		{
			text: "Git",
			uri: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
		},
		{
			text: "Java",
			uri: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"
		}
	]
};

export default data;
