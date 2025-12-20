<script lang="ts">
	const {
		size = 20,
		color = 'currentColor',
		strokeWidth = 1.5
	} = $props<{
		size?: number;
		color?: string;
		strokeWidth?: number;
	}>();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 21 21"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
>
	<path
		d="M6 16.0208H13.6621"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M8.65894 5C10.1684 6.42616 11.5936 7.93898 12.9273 9.53081C12.9273 9.53081 9.63854 13.3094 8.79885 13.8864"
		stroke={color}
		stroke-width={strokeWidth}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M20 6.27778V14.7222C20 17.637 17.637 20 14.7222 20H6.27778C3.36295 20 1 17.637 1 14.7222V6.27778C1 3.36295 3.36295 1 6.27778 1H14.7222C17.637 1 20 3.36295 20 6.27778Z"
		stroke={color}
		stroke-width={2}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
