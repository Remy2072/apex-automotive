import enMessages from '../../messages/en.json';
import nlMessages from '../../messages/nl.json';
import { getLocale } from '$lib/paraglide/runtime';

const navigationTranslations = {
	en: enMessages.navigation,
	nl: nlMessages.navigation
} as const;

type NavigationLocale = keyof typeof navigationTranslations;
type NavigationKey = keyof typeof nlMessages.navigation;

const hrefOverrides: Partial<Record<NavigationKey, string>> = {
	about_us: '/about-us'
};

export type NavigationItem = {
	key: NavigationKey;
	label: string;
	href: string;
};

function toHref(key: NavigationKey) {
	return hrefOverrides[key] ?? `/${key.replace(/_/g, '-')}`;
}

export function getNavigationItems(): NavigationItem[] {
	const locale = getLocale() as NavigationLocale;
	const translations = navigationTranslations[locale] ?? navigationTranslations.en;

	return Object.entries(translations).map(([key, label]) => {
		const navigationKey = key as NavigationKey;

		return {
			key: navigationKey,
			label,
			href: toHref(navigationKey)
		};
	});
}
