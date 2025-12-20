import Chevron from './chevron.svelte';

export const buttonIcons = {
	chevron: Chevron
} as const;

export type ButtonIcon = keyof typeof buttonIcons;

export { Chevron };
