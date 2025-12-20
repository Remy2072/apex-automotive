<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';
</script>

<section class="marquee">
	<div class="marquee__track">
		<ul>
			<li><Icon name="volkswagen" /></li>
			<li><Icon name="mercedes" /></li>
			<li><Icon name="hyundai" /></li>
			<li><Icon name="kia" /></li>
			<li><Icon name="audi" /></li>
			<li><Icon name="toyota" /></li>
			<li><Icon name="bmw" /></li>
			<li><Icon name="opel" /></li>
		</ul>

		<ul class="margin-left" aria-hidden="true">
			<li><Icon name="volkswagen" /></li>
			<li><Icon name="mercedes" /></li>
			<li><Icon name="hyundai" /></li>
			<li><Icon name="kia" /></li>
			<li><Icon name="audi" /></li>
			<li><Icon name="toyota" /></li>
			<li><Icon name="bmw" /></li>
			<li><Icon name="opel" /></li>
		</ul>
		<ul class="margin-left" aria-hidden="true">
			<li><Icon name="volkswagen" /></li>
			<li><Icon name="mercedes" /></li>
			<li><Icon name="hyundai" /></li>
			<li><Icon name="kia" /></li>
			<li><Icon name="audi" /></li>
			<li><Icon name="toyota" /></li>
			<li><Icon name="bmw" /></li>
			<li><Icon name="opel" /></li>
		</ul>
		<ul class="margin-left" aria-hidden="true">
			<li><Icon name="volkswagen" /></li>
			<li><Icon name="mercedes" /></li>
			<li><Icon name="hyundai" /></li>
			<li><Icon name="kia" /></li>
			<li><Icon name="audi" /></li>
			<li><Icon name="toyota" /></li>
			<li><Icon name="bmw" /></li>
			<li><Icon name="opel" /></li>
		</ul>
	</div>
</section>

<style>
	.marquee {
		background-color: var(--color-light-gray);
		overflow: hidden;
		width: 100%;
		margin-top: 4.688rem;
		padding: 1.25rem 0;

		@media (min-width: 768px) {
			margin-top: 6.875rem;
		}
	}

	.marquee__track {
		display: flex;
		width: max-content;
		animation: marquee 60s linear infinite;
		will-change: transform;

		@media (min-width: 768px) {
			animation: marquee 30s linear infinite;
		}
	}

	.margin-left {
		margin-left: 1.875rem;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 1.875rem;
		list-style: none;
		margin: 0;
		padding: 0;
		flex: 0 0 auto;
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
