<script lang="ts">
	const { label } = $props<{ label: string }>();
</script>

<button>
	{label}
</button>

<style>
	button {
		color: var(--color-black);
		background-color: var(--color-btn);
		padding: 5px 12px;
		border-radius: 6.25rem;
		font-size: 14px;

		@media (min-width: 768px) {
			font-size: 1.125rem;
		}
	}
</style>
