<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
</script>

<h2>{m.test()}</h2>
<div>
	<button onclick={() => setLocale('nl')}>nl</button>
	<button onclick={() => setLocale('en')}>en</button>
</div>
