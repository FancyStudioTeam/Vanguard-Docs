import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress';

export const ENGLISH_THEME_CONFIG: LocaleSpecificConfig<DefaultTheme.Config> = {
	lang: 'en-US',
	themeConfig: {
		docFooter: {
			next: 'Next Page',
			prev: 'Previous Page',
		},
		lastUpdated: {
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'short',
			},
			text: 'Last Update',
		},
		nav: [
			{
				link: 'https://vanguard.fancystudio.xyz',
				target: '_blank',
				text: 'Website',
			},
		],
		outline: {
			label: 'On this Page',
			level: 'deep',
		},
		sidebar: [
			{
				base: '/en/general-information/',
				items: [
					{
						link: 'premium-features',
						text: 'Premium Features',
					},
				],
				text: 'General Information',
			},
			{
				base: '/en/plugins/',
				collapsed: false,
				items: [
					{
						link: 'welcomes',
						text: 'Welcomes',
					},
				],
				text: 'Modules',
			},
		],
	},
};
