<script lang="ts">
	import { page } from '$app/stores';
	import { locales, localizeHref } from '$lib/i18n/paraglide/runtime';
	import '../app.css';
	import './layout.css';
	import favicon from '$lib/assets/icons/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}
<div>
	{#each locales as locale}
		<a href={localizeHref($page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>

<style>
	a {
		display: none;
	}
</style>
