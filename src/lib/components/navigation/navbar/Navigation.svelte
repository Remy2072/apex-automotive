<script lang="ts">
	import { Logo } from '$lib';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const { items = ['occasion',
	'inkoop',
	'over ons',
	'contact'
]} = $props<{
		items?: string[];
	}>();

	// Component state
	let menuOpen = $state(false);
	let scrolled = $state(false);
	let scrollY = 0;

	// Effect to lock body scroll when menu is open
	$effect(() => {
	if (!menuOpen) return;

	scrollY = window.scrollY;

	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
	document.body.style.width = '100%';

	return () => {
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.width = '';

		window.scrollTo(0, scrollY);
	};
});

	// Toggles the mobile menu open/closed state.
	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	// Closes the mobile menu.
	function closeMenu() {
		menuOpen = false;
	}

	// Converts a navigation label to a URL path.
	function toHref(item: string) {
		return '/' + item.toLowerCase().replace(/\s+/g, '-');
	}

	// Set up scroll listener on mount
	onMount(() => {
		function onScroll() {
			scrolled = window.scrollY > 10;
		}

		window.addEventListener('scroll', onScroll);
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<nav class:scrolled={!menuOpen && scrolled}>
	<div class="nav-inner container">
		<a href="/" class="logo">
			<Logo />
		</a>

		<ul class="nav-links">
			{#each items as item}
				<li>
					<a href={toHref(item)}>{item}</a>
				</li>
			{/each}
		</ul>

		<button
			class="hamburger"
			onclick={toggleMenu}
			aria-label="Toggle navigation"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>

	{#if menuOpen}
		<div
			class="overlay"
			role="button"
			tabindex="0"
			aria-label="Close menu"
			onclick={closeMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMenu()}
			in:fade={{ duration: 200 }}
			out:fade={{ duration: 150 }}
		>
			<button
				type="button"
				class="menu-wrapper"
				onclick={(e) => e.stopPropagation()}
			>
				<ul class="menu">
					{#each items as item}
						<li>
							<a href={toHref(item)} onclick={closeMenu}>
								{item}
							</a>
						</li>
					{/each}
				</ul>
			</button>
		</div>
	{/if}
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		padding-top: 1.25rem;
		width: 100%;
		z-index: 1;
		background: transparent;
		transition:  .25s ease;
	}

	nav.scrolled {
		background: var(--color-black-85);
		padding: .25rem 0;
	}

	.nav-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 4rem;
	}

	a.logo {
		z-index: 3;
	}

	ul li a {
		text-decoration: none;
		color: var(--color-white);
		transition:  .25s ease;
		font-weight: 300;


		&:hover {
			transition:  .25s ease;
			color: var(--color-btn);
		}
	}

	/* Desktop links */
	ul.nav-links {
		display: none;
		list-style: none;
		gap: 2rem;
	}

	/* Hamburger */
	.hamburger {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 3;
	}

	.hamburger span{
		width: 2rem;
		height: .175rem;
		border-radius: 1rem;
		background-color: var(--color-white);
		display: block;

		&:nth-child(1) {
			margin-left: -.35rem;
		}

		&:nth-child(3) {
			margin-left: -.5rem;
		}
	}

	/* Overlay */
	.overlay {
		position: fixed;
		inset: 0;
		background-color: var(--color-black-85);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	ul.menu {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	ul.menu a {
		font-size: 1.5rem;
	}

	@media (min-width: 768px) {
		.hamburger {
			display: none;
		}

		ul.nav-links {
			display: flex;
		}
	}
</style>
