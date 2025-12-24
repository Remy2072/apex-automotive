<script lang="ts">
	import { Button } from '$lib';

	const { title, buttonText, backgroundImage, button } = $props<{
		title: string;
		buttonText: string;
		backgroundImage: string;
		button?: {
			href?: string;
			variant?: 'filled' | 'outline';
			contrast?: boolean;
			icon?: any;
		};
	}>();
</script>

<article style={`background-image: url('${backgroundImage}')`}>
	<h3>{title}</h3>

	{#if button}
		<Button
			label={buttonText}
			href={button.href}
			variant={button.variant}
			contrast={button.contrast}
			icon={button.icon}
		/>
	{/if}
</article>

<style>
	article {
		width: 100%;
		height: 12.5rem;
		border-radius: 8px;
		color: var(--color-white);
		padding: 1.5rem 1.5rem 1.125rem 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		gap: 6px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transition: 400ms ease;
	}

	article:hover {
		scale: 1.05;
	}

	h3 {
		font-weight: 300;
		font-size: 1.25rem;
	}
</style>
