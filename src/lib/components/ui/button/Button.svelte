<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';
	import type { IconName } from '$lib/icons';

	const {
		label,
		href = undefined,
		variant = 'filled',
		contrast = false,
		icon,
		iconProps,
		iconPosition = 'left'
	} = $props<{
		label: string;
		href?: string;
		variant?: 'filled' | 'outline';
		contrast?: boolean;
		icon?: IconName;
		iconProps?: {
			size?: number;
			color?: string;
		};
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
		<Icon name={icon} size={iconProps?.size ?? 16} color={iconProps?.color} />
	{/if}

	<span class="label">{label}</span>

	{#if icon && iconPosition === 'right'}
		<Icon name={icon} size={iconProps?.size ?? 16} color={iconProps?.color} />
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

	.outline:hover :global(svg path),
	.outline.contrast:hover :global(svg path) {
		stroke: currentColor;
		fill: currentColor;
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
