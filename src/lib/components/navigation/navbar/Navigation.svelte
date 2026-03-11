<script lang="ts">
	import { Logowhite } from '$lib';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const { items = ['occasion',
	'inkoop',
	'over ons',
	'contact'
]} = $props<{
		items?: string[];
	}>();

	// Componentstatus
	let menuOpen = $state(false);
	let scrolled = $state(false);
	let scrollY = 0;

	// Body scroll uitschakelen wanneer het menu open is
	$effect(() => {
	if (!menuOpen) return;

	scrollY = window.scrollY;

	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
	document.body.style.width = '100%';
	document.body.style.overflow = 'hidden';

	return () => {
		document.body.style.position = '';
		document.body.style.top = '';
		document.body.style.width = '';
		document.body.style.overflow = '';

		window.scrollTo(0, scrollY);
	};
});

	// Toggled hamburgermenu open/dicht
	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	// Sluit het hamburgermenu
	function closeMenu() {
		menuOpen = false;
	}

	// Eerste letter hoofdletter
	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	// Zet een navlabel om naar een URL
	function toHref(item: string) {
		return '/' + item.toLowerCase().replace(/\s+/g, '-');
	}

	// Scroll-listener instellen bij mounting
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
			<Logowhite />
		</a>

		<ul class="nav-links">
			{#each items as item}
				<li>
					<a href={toHref(item)}>{capitalize(item)}</a>
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
								{capitalize(item)}
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
		background: var(--color-black);
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
		font-weight: 600;
		font-size: 22px;


		&:hover {
			transition:  .25s ease;
			color: var(--color-btn);
		}
	}

	/* Desktoplinks */
	ul.nav-links {
		display: none;
		list-style: none;
		gap: 2rem;
	}

	/* Hamburger menu */
	.hamburger {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 3;
		padding: 1rem;
	}

	.hamburger span{
		width: 2rem;
		height: .175rem;
		border-radius: 1rem;
		background-color: var(--color-white);
		display: block;
		transition: .15s all ease-out;
		
		&:nth-child(1) {
			margin-left: -.35rem;
		}
		
		&:nth-child(2) {
			margin-right: -.5rem;
		}
		
		&:nth-child(3) {
			margin-left: -.5rem;
		}
	}
	
	.hamburger:hover span {
		transition: .15s all ease-out;

		&:nth-child(1) {
			margin-right: -.35rem;
		}
		
		&:nth-child(2) {
			margin-left: -.8rem;
		}
		
		&:nth-child(3) {
			margin-right: -.5rem;
		}
	}

	/* Overlay */
	.overlay {
		position: fixed;
		inset: 0;
		background-color: var(--color-black);
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
		font-size: 22px;
		font-weight: 600;
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
