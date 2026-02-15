<script lang="ts">
	import { Logoblack, Bovenag, Nap, Rdw, Tiktok, Facebook, Instagram, Marktplaats } from '$lib';
	import { onMount } from 'svelte';

	const {
		description = `Wij houden van persoonlijk contact en een informele sfeer, hier kunt u onze auto's in de showroom bekijken, uw wensen met ons bespreken onder het genot van een lekker drankje. Wij hopen u snel te zien!`,
		navItems = ['Home', 'Occasion', 'Inkoop', 'Over ons', 'Contact', 'Vacatures', 'Reviews'],
		openingHours = [
			{ day: 'Maandag', hours: '09:00 - 17:00' },
			{ day: 'Dinsdag', hours: '09:00 - 17:00' },
			{ day: 'Woensdag', hours: '09:00 - 17:00' },
			{ day: 'Donderdag', hours: '09:00 - 17:00' },
			{ day: 'Vrijdag', hours: '09:00 - 17:00' },
			{ day: 'Zaterdag', hours: '10:00 - 15:00' },
			{ day: 'Zondag', hours: 'Gesloten' }
		],
		addressLines = ['Spelderholt 325', '1025 BP Amsterdam'],
		email = 'info@apexautomotive.nl',
		phone = '+31 (6) 11 48 03 17'
	} = $props<{
		description?: string;
		navItems?: string[];
		openingHours?: { day: string; hours: string }[];
		addressLines?: string[];
		email?: string;
		phone?: string;
	}>();

	function toHref(item: string) {
		if (item.toLowerCase() === 'home') return '/';
		return '/' + item.toLowerCase().replace(/\s+/g, '-');
	}
</script>

<footer class="footer">
	<div class="footer-inner container">
		<!-- 1. Brand -->
		<section class="col brand">
			<div class="logo">
				<Logoblack />
			</div>

			<p class="description">{description}</p>
		</section>

		<!-- 2. Navigatie (hidden on mobile) -->
		<section class="col nav">
			<h3>Navigatie</h3>
			<ul>
				{#each navItems as item}
					<li><a href={toHref(item)}>{item}</a></li>
				{/each}
			</ul>
		</section>

		<!-- 3. Showroom -->
		<section class="col showroom">
			<h3>Showroom</h3>
			<ul>
				{#each openingHours as row}
					<li>
						<span class="day">{row.day}</span>
						<span class="hours">{row.hours}</span>
					</li>
				{/each}
			</ul>
		</section>

		<!-- 4. Contact -->
		<section class="col contact">
			<h3>Contact</h3>

			<p class="address">
				{#each addressLines as line, i}
					{line}{i < addressLines.length - 1 ? ', ' : ''}
				{/each}
			</p>

			<p class="meta">
				<a href={`mailto:${email}`}>{email}</a><br />
				<a href={`tel:${phone.replace(/\s|\(|\)/g, '')}`}>{phone}</a>
			</p>

			<div class="socials">
				<Facebook />
				<Instagram />
				<Tiktok />
				<Marktplaats />
			</div>
		</section>

	</div>
  <div class="second-footer container">
    <p class="copyright">© 2025 Apex Automotive</p>

    <div class="certifications">
      <span class="cert cert--bov"><Bovenag /></span>
      <span class="cert cert--nap"><Nap /></span>
      <span class="cert cert--rdw"><Rdw /></span>
    </div>
  </div>
</footer>

<style>
	/* Mobile-first base */
	.footer {
		background: var(--color-light-gray);
		padding: 3rem 0;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		align-items: start;
	}

	/* hide 2nd section by default (mobile) */
	.nav {
		display: none;
	}

	.col h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.logo {
		/* logo container */
		min-height: 2.5rem;
		margin-bottom: 1.25rem;
	}

	.description {
		max-width: 26rem;
		font-family: var(--main-font);
		font-weight: 300;
		line-height: 1.55;
		color: var(--color-black);
	}

	/* lists */
	.col ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
	}

	.col a {
		text-decoration: none;
		color: var(--color-black);
		transition: 0.25s ease;

		&:hover {
			color: var(--color-btn);
		}
	}

	.showroom li {
		display: grid;
		grid-template-columns: 7.5rem 1fr;
		gap: 1rem;
	}

	.day {
		font-family: var(--main-font);
		font-weight: 400;
	}

	.hours {
		font-family: var(--main-font);
		font-weight: 300;
		min-width: 100px;
	}

	.address,
	.meta {
		font-family: var(--main-font);
		font-weight: 300;
		line-height: 1.55;
		margin-bottom: 1rem;
	}

	.socials {
		min-height: 2.25rem;
		margin: 1.25rem 0 0;
		display: flex;
		gap: 0.75rem;
	}

	.second-footer {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
		align-items: center;
	}

	.copyright {
		font-family: var(--main-font);
		font-weight: 300;
		color: var(--color-black);
		opacity: 0.7;
	}

	.certifications {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.cert {
		display: inline-flex;
		align-items: center;
		line-height: 0;
	}

	.cert :global(svg) {
		height: 1.25rem;
		width: auto;
		display: block;
	}

	.cert--nap :global(svg) {
		height: 1.1rem;
	}

	@media (min-width: 768px) {
		.footer {
			padding: 4rem 0;
		}

		.footer-inner {
			grid-template-columns: 1.4fr 1fr 1fr 1fr;
			gap: 3rem;
		}

    .second-footer {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr;
      gap: 3rem;
    }

    .certifications {
      grid-column: 4 / 4;
    }

		.nav {
			display: block;
		}
	}
</style>
