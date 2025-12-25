<script lang="ts">
	import { Button } from '$lib';

	const {
		title,
		text,
		imageSrc,
		imageAlt = '',
		button,
		layout = 'default'
	} = $props<{
		title: string;
		text: string;
		imageSrc: string;
		imageAlt?: string;
		button?: {
			label: string;
			href?: string;
			variant?: 'filled' | 'outline';
			icon?: any;
		};
		layout?: 'default' | 'flipped';
	}>();
</script>

<section class="container {layout}">
	<article>
		<h2>{title}</h2>
		<p>{text}</p>

		{#if button}
			<Button label={button.label} href={button.href} variant={button.variant} icon={button.icon} />
		{/if}
	</article>

	<img src={imageSrc} alt={imageAlt} />
</section>

<style>
	section {
		margin-top: 4.688rem;
		display: flex;
		flex-direction: column;

		@media (min-width: 1024px) {
			margin-top: 6.875rem;
			flex-direction: row;
			align-items: center;
			gap: 6.875rem;
		}

		&.flipped {
			@media (min-width: 1024px) {
				flex-direction: row-reverse;
			}
		}

		article {
			h2 {
				font-size: 1.5rem;
				font-family: var(--sub-font);

				@media (min-width: 1024px) {
					font-size: 2rem;
				}
			}

			p {
				font-size: 1.25rem;
				margin: 10px 0;

				@media (min-width: 1024px) {
					font-size: 1.5rem;
				}
			}
		}
	}

	img {
		margin-top: 1.25rem;
		width: 100%;

		@media (min-width: 1024px) {
			margin-top: 0;
		}
	}
</style>
