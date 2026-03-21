// Content components ( site-level blocks)
export * from '$lib/components/navigation';

// Content components (page-level blocks)
export * from '$lib/components/content';

// UI components (reusable building blocks)
export * from '$lib/components/ui';

// i18n helpers & types
export { t } from './i18n';
export type { MessageKey } from './i18n';
export { getNavigationItems } from './navigation';
export type { NavigationItem } from './navigation';
export type { ButtonConfig, IconComponent } from './types';

// Icon components
export * from './icons/brands';
export * from './icons/brands-2';
export * from './icons/socials';
export * from './icons/ui';
