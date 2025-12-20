import Facebook from './facebook.svelte';
import Instagram from './instagram.svelte';
import Marktplaats from './marktplaats.svelte';
import Tiktok from './tiktok.svelte';

export const socialIcons = {
	facebook: Facebook,
	instagram: Instagram,
	marktplaats: Marktplaats,
	tiktok: Tiktok
} as const;

export type SocialIcon = keyof typeof socialIcons;

export { Facebook, Instagram, Marktplaats, Tiktok };
