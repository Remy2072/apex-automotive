<script lang="ts">
	const {
		label,
		href = undefined,
		variant = 'filled',
		contrast = false
	} = $props<{
		label: string;
		href?: string;
		variant?: 'filled' | 'outline';
		contrast?: boolean;
	}>();

	const disabled = $derived(!href);
</script>

<a
	{href}
	class="btn {variant} {contrast ? 'contrast' : ''} {disabled ? 'is-disabled' : ''}"
	aria-disabled={disabled}
	tabindex={disabled ? -1 : undefined}
>
	{label}
	<!-- icon toevoegen als optie en witte of zwarte outline weg halen -->
</a>

<style>
	.btn {
		padding: 5px 12px;
		border-radius: 6.25rem;
		font-size: 14px;
		text-decoration: none;
		transition: 300ms ease;

		@media (min-width: 768px) {
			font-size: 1.125rem;
		}
	}

	.filled {
		color: var(--color-black);
		background-color: var(--color-btn);
		border: none;
	}

	.filled:hover {
		color: var(--color-white);
		background-color: var(--color-black);
	}

	.outline {
		color: var(--color-black);
		background-color: transparent;
		border: 3px solid var(--color-btn);
	}

	.outline.contrast {
		color: var(--color-white);
	}

	.outline:hover,
	.outline.contrast:hover {
		color: var(--color-white);
		background-color: var(--color-black);
		border-color: var(--color-black);
	}

	.is-disabled {
		pointer-events: none;
		cursor: default;
	}

	.is-disabled:hover {
		background-color: inherit;
		color: inherit;
		border-color: inherit;
	}
</style>
