import type { Component } from 'svelte';

import { buttonIcons } from './button';
import { carBrandIcons } from './car-brands';
import { socialIcons } from './socials';

export const icons = {
	...buttonIcons,
	...carBrandIcons,
	...socialIcons
} satisfies Record<string, Component>;

export type IconName = keyof typeof icons;
