<script lang="ts">
	import { Card, t } from '$lib';
	import type { MessageKey } from '$lib';

	interface Step {
		cardTitle: MessageKey;
		buttonText: MessageKey;
		backgroundImage: string;
		button?: {
			href?: string;
			variant?: 'filled' | 'outline';
			contrast?: boolean;
		};
	}

	const { headingKey, steps } = $props<{
		headingKey: MessageKey;
		steps: Step[];
	}>();
</script>

<section class="container">
	<h2>{t(headingKey)}</h2>

	<div class="grid">
		{#each steps as step}
			<Card
				title={t(step.cardTitle)}
				buttonText={t(step.buttonText)}
				backgroundImage={step.backgroundImage}
				button={step.button}
			/>
		{/each}
	</div>
</section>

<style>
	section {
		margin-top: 6.25rem;

		h2 {
			font-size: 1.5rem;
			text-align: center;

			@media (min-width: 768px) {
				font-size: 2rem;
			}
		}

		.grid {
			display: grid;
			gap: 1rem;
			grid-template-columns: 1fr;
			margin-top: 1.563rem;

			@media (min-width: 1024px) {
				gap: 2.125rem;
			}
		}

		@media (min-width: 768px) {
			.grid {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		@media (min-width: 1024px) {
			.grid {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
