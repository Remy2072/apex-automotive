<script lang="ts">
	import { getIcon } from './get-icon';
	import type { IconName } from './index';

	const { name, size, color, strokeWidth } = $props<{
		name: IconName;
		size?: number;
		color?: string;
		strokeWidth?: number;
	}>();

	const IconComponent = $derived(() => getIcon(name));
</script>

<IconComponent {size} {color} {strokeWidth} />
