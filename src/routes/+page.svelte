<script lang="ts">
	import { Hero, NextSteps, HeroBg, CardImg, t } from '$lib';
	import type { MessageKey } from '$lib';

	const mainCards = [
		{
			titleKey: 'nextSteps.buy.title',
			buttonKey: 'nextSteps.buy.button',
			backgroundImage: CardImg,
			button: {}
		},
		{
			titleKey: 'nextSteps.value.title',
			buttonKey: 'nextSteps.value.button',
			backgroundImage: CardImg,
			button: {}
		},
		{
			titleKey: 'nextSteps.appointment.title',
			buttonKey: 'nextSteps.appointment.button',
			backgroundImage: CardImg,
			button: {}
		}
	] satisfies {
		titleKey: MessageKey;
		buttonKey: MessageKey;
		backgroundImage: string;
		button?: {
			href?: string;
			variant?: 'filled' | 'outline';
			contrast?: boolean;
		};
	}[];
</script>

<Hero title={t('hero.title')} text={t('hero.text')} backgroundImage={HeroBg} />

<NextSteps headingKey="nextSteps.heading" steps={mainCards} />
