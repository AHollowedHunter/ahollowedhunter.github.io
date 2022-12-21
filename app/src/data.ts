import type { Data } from '$lib/types/data';

const data: Data = {
	links: [
		{
			site: 'GitHub',
			username: 'AHollowedHunter',
			icon: 'github-white.ico',
			url: 'https://github.com/AHollowedHunter',
			emoji: '🐈'
		},
		{
			site: 'Instagram',
			username: '@acave.photos',
			icon: 'instagram.png',
			url: 'https://www.instagram.com/acave.photos/',
			emoji: '📷'
		},
		{
			site: 'LinkedIn',
			username: 'acave-dev',
			icon: 'linkedin.png',
			url: 'https://www.linkedin.com/in/acave-dev',
			emoji: '💼'
		},
		{
			site: 'Mastodon',
			username: '@AHollowedHunter@universeodon.com',
			icon: 'mastodon.svg',
			url: 'https://universeodon.com/@AHollowedHunter',
			rel: 'me',
			emoji: '🐘'
		}
	]
};

export default data;
