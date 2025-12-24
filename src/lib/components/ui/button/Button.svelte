<script lang="ts">
	import type { Component } from 'svelte';

	const {
		label,
		href = undefined,
		variant = 'filled',
		contrast = false,
		icon,
		iconClass = 'icon',
		iconPosition = 'left'
	} = $props<{
		label: string;
		href?: string;
		variant?: 'filled' | 'outline';
		contrast?: boolean;

		icon?: Component<{ className?: string }>;

		iconClass?: string;
		iconPosition?: 'left' | 'right';
	}>();

	const disabled = $derived(!href);
</script>

<a
	{href}
	class="btn {variant} {contrast ? 'contrast' : ''} {disabled ? 'is-disabled' : ''}"
	aria-disabled={disabled}
	tabindex={disabled ? -1 : undefined}
>
	{#if icon && iconPosition === 'left'}
		{@render icon({ className: iconClass })}
	{/if}

	<span class="label">{label}</span>

	{#if icon && iconPosition === 'right'}
		{@render icon({ className: iconClass })}
	{/if}
</a>

<style>
	.btn {
		padding: 5px 12px;
		border-radius: 6.25rem;
		font-size: 1rem;
		text-decoration: none;
		transition: 300ms ease;
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.btn .label {
		white-space: nowrap;
	}

	.btn.is-disabled {
		pointer-events: none;
		opacity: 0.5;
	}

	/* Icon sizing */
	.btn :global(.icon) {
		width: 1em;
		height: 1em;
		flex: 0 0 auto;
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
