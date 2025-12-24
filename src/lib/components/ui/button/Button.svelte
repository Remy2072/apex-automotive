<script lang="ts">
	const {
		label,
		href = undefined,
		variant = 'filled',
		contrast = false,
		icon = undefined
	} = $props<{
		label: string;
		href?: string;
		variant?: 'filled' | 'outline';
		contrast?: boolean;
		icon?: any;
	}>();

	const disabled = $derived(!href);
</script>

<a
	{href}
	class="btn {variant} {contrast ? 'contrast' : ''} {disabled ? 'is-disabled' : ''}"
	aria-disabled={disabled}
	tabindex={disabled ? -1 : undefined}
>
	<span class="label">{label}</span>
	{#if icon !== null}
		{#if icon}
			<svelte:component this={icon} className="arrow" aria-hidden="true" />
		{:else}
			<svg
				class="arrow"
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"
				/>
			</svg>
		{/if}
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
	}

	.btn .label {
		white-space: nowrap;
	}

	.btn .arrow {
		width: 1rem;
		height: 1rem;
		display: block;
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
