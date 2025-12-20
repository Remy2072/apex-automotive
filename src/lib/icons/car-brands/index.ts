import Audi from './audi.svelte';
import BMW from './bmw.svelte';
import Hyundai from './hyundai.svelte';
import Kia from './kia.svelte';
import Mercedes from './mercedes.svelte';
import Opel from './opel.svelte';
import Toyota from './toyota.svelte';
import Volkswagen from './volkswagen.svelte';

export const carBrandIcons = {
	audi: Audi,
	bmw: BMW,
	hyundai: Hyundai,
	kia: Kia,
	mercedes: Mercedes,
	opel: Opel,
	toyota: Toyota,
	volkswagen: Volkswagen
} as const;

export type CarBrandIcon = keyof typeof carBrandIcons;

export { Audi, BMW, Hyundai, Kia, Mercedes, Opel, Toyota, Volkswagen };
