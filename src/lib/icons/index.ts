import type { Component } from 'svelte';

import { buttonIcons } from './button';
import { carBrandIcons } from './car-brands';
import { socialIcons } from './socials';

type IconSource = Component | string;

export const icons = {
	...buttonIcons,
	...carBrandIcons,
	...socialIcons
} satisfies Record<string, IconSource>;

export type IconName = keyof typeof icons;
