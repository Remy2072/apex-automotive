<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { MessageKey } from '$lib/i18n';
	import Hero from '$lib/components/content/hero/Hero.svelte';
	import NextSteps from '$lib/components/content/next-steps/NextSteps.svelte';
	import HeroBg from '$lib/assets/img/hero-bg.png';
	import CardImg from '$lib/assets/img/auto-shop.png';

	const mainCards = [
		{
			titleKey: 'nextSteps.buy.title',
			buttonKey: 'nextSteps.buy.button',
			backgroundImage: CardImg
		},
		{
			titleKey: 'nextSteps.value.title',
			buttonKey: 'nextSteps.value.button',
			backgroundImage: CardImg
		},
		{
			titleKey: 'nextSteps.appointment.title',
			buttonKey: 'nextSteps.appointment.button',
			backgroundImage: CardImg
		}
	] satisfies {
		titleKey: MessageKey;
		buttonKey: MessageKey;
		backgroundImage: string;
	}[];
</script>

<Hero title={m['hero.title']()} text={m['hero.text']()} backgroundImage={HeroBg} />

<NextSteps headingKey="nextSteps.heading" steps={mainCards} />
