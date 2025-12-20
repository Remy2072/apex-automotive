<script lang="ts">
	import { Hero, NextSteps, HeroBg, CardImg, t, Marquee } from '$lib';
	import type { MessageKey } from '$lib';
	import type { IconName } from '$lib/icons';

	const mainCards = [
		{
			cardTitle: 'nextSteps.buy.title',
			buttonText: 'nextSteps.buy.button',
			backgroundImage: CardImg,
			button: {
				icon: 'chevron',
				iconPosition: 'right',
				href: '#/'
			}
		},
		{
			cardTitle: 'nextSteps.value.title',
			buttonText: 'nextSteps.value.button',
			backgroundImage: CardImg,
			button: {
				icon: 'chevron',
				iconPosition: 'right',
				href: '#/'
			}
		},
		{
			cardTitle: 'nextSteps.appointment.title',
			buttonText: 'nextSteps.appointment.button',
			backgroundImage: CardImg,
			button: {
				icon: 'chevron',
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
			icon?: IconName;
			iconProps?: {
				size?: number;
				color?: string;
				strokeWidth?: number;
			};
			iconPosition?: 'left' | 'right';
		};
	}[];
</script>

<Hero title={t('hero.title')} text={t('hero.text')} backgroundImage={HeroBg} />
<NextSteps headingKey="nextSteps.heading" steps={mainCards} />
<Marquee />
