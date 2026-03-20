<script lang="ts">
	import { Logowhite } from '$lib';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const { items } = $props<{
		items: Record<string, string>;
	}>();

	let menuOpen = $state(false);
	let scrolled = $state(false);
	let scrollY = 0;

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

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function toHref(key: string) {
		if (key === 'occasion') return '/occasion';
		if (key === 'purchasing') return '/purchasing';
		if (key === 'about_us') return '/about-us';
		if (key === 'contact') return '/contact';

		return '/' + key.toLowerCase().replace(/_/g, '-');
	}

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

		<ul class="lg-links">
			{#each Object.entries(items) as [key, label]}
				<li>
					<a href={toHref(key)}>{label}</a>
				</li>
			{/each}
		</ul>

		<button class="menu" class:open={menuOpen} onclick={toggleMenu} aria-label="Toggle navigation">
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
			<button type="button" class="menu-wrapper" onclick={(e) => e.stopPropagation()}>
				<ul class="sm-links">
					{#each Object.entries(items) as [key, label]}
						<li>
							<a href={toHref(key)} onclick={closeMenu}>
								{label}
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
		transition: 0.25s ease;
	}

	nav.scrolled {
		background: var(--color-black);
		padding: 0.25rem 0;
	}

	nav div.nav-inner {
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
		transition: 0.25s ease;
		font-weight: 600;
		font-size: 22px;
	}

	ul li a:hover {
		color: var(--color-btn);
	}

	/* Desktoplinks */
	ul.lg-links {
		display: none;
		list-style: none;
		gap: 2rem;
	}

	button.menu {
		position: relative;
		width: 2.25rem;
		height: 1.5rem;
		display: block;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 3;
		padding: 0;
	}

	button.menu span {
		position: absolute;
		left: 0;
		width: 100%;
		height: 3px;
		border-radius: 999px;
		background-color: var(--color-white);
		display: block;
		transform-origin: center;
	}

	button.menu span:nth-child(1) {
		top: 0;
		transition: 0.3s all ease-in-out .1s;
	}

	button.menu span:nth-child(2) {
		top: 50%;
		transform: translate(0.35rem, -50%);
		transition:
			transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6),
			opacity 0.3s ease 0.2s;
	}

	button.menu span:nth-child(3) {
		top: calc(100% - 3px);
		transition: 0.3s all ease-in-out .1s;
	}

	.menu.open span:nth-child(1) {
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
		transition: 0.3s all ease-in-out .1s;
	}

	.menu.open span:nth-child(2) {
		transform: translate(-1.25rem, -50%);
		opacity: 0;
		transition:
			transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6),
			opacity 0.15s ease 0.15s;
	}

	.menu.open span:nth-child(3) {
		top: 50%;
		transform: translateY(-50%) rotate(-45deg);
		transition: 0.3s all ease-in-out .1s;
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

	ul.sm-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	ul.sm-links a {
		font-size: 22px;
		font-weight: 600;
	}

	@media (min-width: 768px) {
		.menu {
			display: none;
		}

		ul.lg-links {
			display: flex;
		}
	}
</style>
