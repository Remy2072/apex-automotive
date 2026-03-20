<script lang="ts">
	import { Footer, Nav, getNavigationItems } from '$lib';
	import './layout.css';
	import './app.css';

	let { children } = $props();
	const navigationItems = getNavigationItems();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="icon" href="/favicon.ico" sizes="any" />
</svelte:head>

<Nav items={navigationItems} />

{@render children()}

<Footer />
