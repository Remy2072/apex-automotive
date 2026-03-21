import type { Component } from 'svelte';

export type IconComponent = Component<{
	className?: string;
}>;

export type ButtonConfig = {
	label?: string;
	href?: string;
	variant?: 'filled' | 'outline';
	contrast?: boolean;
	icon?: IconComponent;
};
