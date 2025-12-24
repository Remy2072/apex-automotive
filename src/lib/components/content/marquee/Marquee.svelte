<script lang="ts" context="module">
	export type MarqueeItem = {
		name: string;
		Icon: any;
	};
</script>

<script lang="ts">
	export let items: readonly MarqueeItem[];
	export let repeats = 4;

	const rows = Array.from({ length: repeats }, () => items);
</script>

<section class="marquee">
	<div class="marquee__track">
		{#each rows as row, i}
			<ul class:margin-left={i !== 0} aria-hidden={i === 0 ? undefined : 'true'}>
				{#each row as item}
					{@const Icon = item.Icon}
					<li>
						<Icon className="brand-icon" />
					</li>
				{/each}
			</ul>
		{/each}
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
			animation: marquee 40s linear infinite;
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
