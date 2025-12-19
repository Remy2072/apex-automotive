<script lang="ts">
	const { title, text, backgroundImage } = $props<{
		title: string;
		text?: string;
		backgroundImage?: string;
	}>();
</script>

<section style={backgroundImage ? `--hero-bg: url("${backgroundImage}")` : undefined}>
	<div class="hero-content container">
		<h1>{title}</h1>

		{#if text}
			<p>{text}</p>
		{/if}
	</div>
</section>

<style>
	section {
		display: grid;
		place-items: center;
		height: 100vh;
		background-color: var(--color-black);
		background-image: var(--hero-bg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.hero-content {
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h1 {
		font-size: 2.5rem;
		font-family: var(--sub-font);
		font-weight: 300;
		color: var(--color-white);

		@media (min-width: 768px) {
			font-size: 3.375rem;
		}

		@media (min-width: 1024px) {
			font-size: 4.75rem;
		}
	}

	p {
		font-size: 1.25rem;
		color: var(--color-white);
		font-weight: 300;
		max-width: 35rem;

		@media (min-width: 768px) {
			font-size: 1.563rem;
		}

		@media (min-width: 1024px) {
			font-size: 2rem;
		}
	}
</style>
