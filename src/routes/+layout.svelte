<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import { Favicon } from '$lib';
	import './layout.css';
	import './app.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={Favicon} /></svelte:head>

{@render children()}
<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
