<script lang="ts">
	import Button from '../button/Button.svelte';

	export let title: string;
	export let buttonText: string;
	export let backgroundImage: string;
</script>

<article style="background-image: url('{backgroundImage}')">
	<h3>{title}</h3>
	<Button label={buttonText} />
</article>

<style>
	article {
		width: 100%;
		height: 200px;
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
	}

	h3 {
		font-weight: 300;
		font-size: 1rem;

		@media (min-width: 768px) {
			font-size: 1.25rem;
		}
	}

	@media (min-width: 1300px) {
		article {
			min-width: 21.875rem;
		}
	}
</style>
