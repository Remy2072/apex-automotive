<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import Hero from '$lib/components/content/hero/Hero.svelte';
	import heroBg from '$lib/assets/img/hero-bg.png';
</script>

<Hero title={m['hero.title']()} text={m['hero.text']()} backgroundImage={heroBg} />
