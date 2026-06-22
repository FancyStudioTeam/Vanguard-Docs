import { defineConfig } from 'vitepress';

import { ENGLISH_THEME_CONFIG } from './locales/English.ts';
import { SPANISH_THEME_CONFIG } from './locales/Spanish.ts';

export default defineConfig({
	appearance: 'force-dark',
	cleanUrls: true,
	ignoreDeadLinks: true,
	lastUpdated: true,
	locales: {
		es: {
			label: 'Español',
			lang: 'es',
			link: '/es/',
			...SPANISH_THEME_CONFIG,
		},
		root: {
			label: 'English',
			lang: 'en',
			link: '/en/',
			...ENGLISH_THEME_CONFIG,
		},
	},
	markdown: {
		lineNumbers: true,
		theme: 'nord',
	},
	themeConfig: {
		logo: '/Logo.svg',
		search: {
			options: {
				detailedView: true,
			},
			provider: 'local',
		},
		socialLinks: [
			{
				icon: 'github',
				link: 'https://github.com/FancyStudioTeam/Vanguard',
			},
		],
	},
	title: 'Vanguard',
});
