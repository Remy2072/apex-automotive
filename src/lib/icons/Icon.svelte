<script lang="ts">
	import { getIcon } from './get-icon';
	import type { IconName } from './index';

	const { name, size, color } = $props<{
		name: IconName;
		size?: number;
		color?: string;
	}>();

	const icon = $derived(getIcon(name));
	const iconUrl = $derived(typeof icon === 'string' ? icon : undefined);
	const IconComponent = $derived(typeof icon === 'string' ? undefined : icon);
</script>

{#if iconUrl}
	<img
		src={iconUrl}
		alt=""
		aria-hidden="true"
		style={size ? `width: ${size}px; height: auto;` : undefined}
	/>
{:else if IconComponent}
	<svelte:component this={IconComponent} {size} {color} />
{/if}

<!-- svg's mappen structuur anders doen -->
