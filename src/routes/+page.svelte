<script lang="ts">
	import { Hero, NextSteps, HeroBg, CardImg, t } from '$lib';
	import type { MessageKey } from '$lib';

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

<Hero title={t('hero.title')} text={t('hero.text')} backgroundImage={HeroBg} />

<NextSteps headingKey="nextSteps.heading" steps={mainCards} />
