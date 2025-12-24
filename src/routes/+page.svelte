<script lang="ts">
	import { Hero, NextSteps, Marquee, t } from '$lib';
	import type { MessageKey } from '$lib';

	import { Audi, Bmw, Hyundai, Kia, Mercedes, Opel, Toyota, Volkswagen } from '$lib/icons/brands';

	const carBrands = [
		{ name: 'volkswagen', Icon: Volkswagen },
		{ name: 'mercedes', Icon: Mercedes },
		{ name: 'hyundai', Icon: Hyundai },
		{ name: 'kia', Icon: Kia },
		{ name: 'audi', Icon: Audi },
		{ name: 'toyota', Icon: Toyota },
		{ name: 'bmw', Icon: Bmw },
		{ name: 'opel', Icon: Opel }
	] as const;

	const mainCards = [
		{
			cardTitle: 'nextSteps.buy.title',
			buttonText: 'nextSteps.buy.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				href: '#/'
			}
		},
		{
			cardTitle: 'nextSteps.value.title',
			buttonText: 'nextSteps.value.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				href: '#/'
			}
		},
		{
			cardTitle: 'nextSteps.appointment.title',
			buttonText: 'nextSteps.appointment.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				href: '#/'
			}
		}
	] satisfies {
		cardTitle: MessageKey;
		buttonText: MessageKey;
		backgroundImage: string;
		button?: {
			href?: string;
			variant?: 'filled' | 'outline';
			contrast?: boolean;
		};
	}[];
</script>

<Hero title={t('hero.title')} text={t('hero.text')} backgroundImage="/images/hero-bg.png" />

<NextSteps headingKey="nextSteps.heading" steps={mainCards} />

<Marquee items={carBrands} />
