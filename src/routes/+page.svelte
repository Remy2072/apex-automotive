<script lang="ts">
	import { Hero, NextSteps, t } from '$lib';
	import type { MessageKey } from '$lib';
	import { Arrow } from '$lib/icons/ui';

	const mainCards = [
		{
			cardTitle: 'nextSteps.buy.title',
			buttonText: 'nextSteps.buy.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				icon: Arrow,
				iconPosition: 'right',
				href: '#/'
			}
		},
		{
			cardTitle: 'nextSteps.value.title',
			buttonText: 'nextSteps.value.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				icon: Arrow,
				iconPosition: 'right',
				href: '#/'
			}
		},
		{
			cardTitle: 'nextSteps.appointment.title',
			buttonText: 'nextSteps.appointment.button',
			backgroundImage: '/images/auto-shop.png',
			button: {
				icon: Arrow,
				iconPosition: 'right',
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
			icon?: typeof Arrow;
			iconPosition?: 'left' | 'right';
		};
	}[];
</script>

<Hero title={t('hero.title')} text={t('hero.text')} backgroundImage="/images/hero-bg.png" />

<NextSteps headingKey="nextSteps.heading" steps={mainCards} />
