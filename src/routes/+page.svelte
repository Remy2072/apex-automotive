<script lang="ts">
	import { Arrow, Nav, Hero, NextSteps, Marquee, CalloutSection, t } from '$lib';
	import type { MessageKey } from '$lib';

	import { Audi, Bmw, Hyundai, Kia, Mercedes, Opel, Toyota, Volkswagen } from '$lib/icons/brands';

	const carBrands = $state([
		{ name: 'volkswagen', Icon: Volkswagen },
		{ name: 'mercedes', Icon: Mercedes },
		{ name: 'hyundai', Icon: Hyundai },
		{ name: 'kia', Icon: Kia },
		{ name: 'audi', Icon: Audi },
		{ name: 'toyota', Icon: Toyota },
		{ name: 'bmw', Icon: Bmw },
		{ name: 'opel', Icon: Opel }
	] as const);

	const mainCards = $state([
		{
			cardTitle: 'nextSteps.buy.title',
			buttonText: 'nextSteps.buy.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				href: '#/',
				icon: Arrow
			}
		},
		{
			cardTitle: 'nextSteps.value.title',
			buttonText: 'nextSteps.value.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				href: '#/',
				icon: Arrow
			}
		},
		{
			cardTitle: 'nextSteps.appointment.title',
			buttonText: 'nextSteps.appointment.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				href: '#/',
				icon: Arrow
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
			icon?: any;
		};
	}[]);
</script>

<Nav items={['occasion', 'inkoop', 'over ons', 'contact']} />

<Hero title={t('hero.title')} text={t('hero.text')} backgroundImage="/images/hero-bg.png" />

<NextSteps headingKey="nextSteps.heading" steps={mainCards} />

<Marquee items={carBrands} />

<CalloutSection
	title={t('calloutSection.value.title')}
	text={t('calloutSection.value.text')}
	imageSrc="/images/keys.png"
	button={{
		label: t('calloutSection.value.button'),
		href: '#/',
		variant: 'outline',
		icon: Arrow
	}}
/>

<CalloutSection
	layout="flipped"
	title={t('calloutSection.finance.title')}
	text={t('calloutSection.finance.text')}
	imageSrc="/images/keys.png"
	button={{
		label: t('calloutSection.finance.button'),
		href: '#/',
		variant: 'outline',
		icon: Arrow
	}}
/>
