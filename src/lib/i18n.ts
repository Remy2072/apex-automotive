import { m } from '$lib/paraglide/messages';

export type MessageKey = keyof typeof m;
export const t = (key: MessageKey) => m[key]();
