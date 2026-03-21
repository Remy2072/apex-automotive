<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Button } from '$lib';

	const isNotFound = $derived(page.status === 404);
	const title = $derived(isNotFound ? 'Pagina niet gevonden' : 'Er is iets misgegaan');
	const description = $derived(
		isNotFound
			? 'De pagina die je zoekt bestaat niet of is verplaatst.'
			: 'Er ging iets fout bij het laden van deze pagina. Probeer het opnieuw of ga terug naar de homepage.'
	);
</script>

<svelte:head>
	<title>{title} | Apex Automotive</title>
</svelte:head>

<section class="error-page">
	<div class="container">
		<div class="error-card">
			<p class="status">{page.status}</p>
			<h1>{title}</h1>
			<p class="description">{description}</p>
			<Button label="Terug naar home" href={resolve('/')} />
		</div>
	</div>
</section>

<style>
	.error-page {
		min-height: calc(100vh - 10rem);
		display: flex;
		align-items: center;
		padding: 4rem 0 6rem;
	}

	.error-card {
		max-width: 40rem;
		padding: 2rem;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 2rem;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.78) 100%);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
	}

	.status {
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-black-85);
		margin-bottom: 1rem;
	}

	h1 {
		font-size: clamp(2.5rem, 8vw, 4.5rem);
		line-height: 0.95;
		margin-bottom: 1rem;
	}

	.description {
		max-width: 32rem;
		font-family: var(--sub-font);
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-black-85);
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		.error-card {
			padding: 3rem;
		}
	}
</style>
