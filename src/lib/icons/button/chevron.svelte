<script lang="ts">
	const { size = 16, color = 'currentColor' } = $props<{
		size?: number;
		color?: string;
	}>();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 8 15"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		d="M0.329346 13.73L7.09991 7.80572C7.55523 7.40731 7.55523 6.69898 7.0999 6.30057L0.329346 0.376348"
		stroke={color}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
