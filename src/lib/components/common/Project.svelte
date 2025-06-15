<script>
	import { assets } from '$app/paths';
</script>

<section class="hero" id="project">
	<div class="hero-content text-center">
		<div>
			<h3 class="mb-4 text-2xl font-extrabold">Projets</h3>
			<div class="my-4 grid lg:grid-cols-6 grid-cols-3 lg:gap-4 lg:max-w-4/6 mx-auto">
				<div class="card bg-base-100 shadow-sm col-span-3">
					<figure>
						<img src={`${assets}/kesquondine.webp`} alt="l'application kesquondine" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">KesQuonDine</h2>
						<p>
							KesQuodine modernise l'expérience en restaurant en permettant aux clients de consulter
							un menu illustré, commander et payer directement depuis leur smartphone. J'ai
							participé au développement de l'application avec un focus sur l'expérience
							utilisateur, la fluidité des parcours et la performance du système de commande.
						</p>
						<div class="card-actions justify-end">
							<div class="badge badge-outline">Flutter</div>
							<div class="badge badge-outline">Nextjs</div>
							<div class="badge badge-outline">Firebase</div>
						</div>
					</div>
				</div>
				<div class="card bg-base-100 shadow-sm col-span-3">
					<figure>
						<img src={`${assets}/lesmobilitains.webp`} alt="l'application kesquondine" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">LES MOBILITAINS</h2>
						<p>
							Participation au développement et à l'amélioration du site de l'association Les
							Mobilitains. Missions principales : création de nouvelles fonctionnalités en Django,
							résolution de tickets via pull requests, couverture de test unitaire et mise en place
							d'un processus d'intégration continue.
						</p>
						<div class="card-actions justify-end">
							<div class="badge badge-outline">Django</div>
							<div class="badge badge-outline">Python</div>
							<div class="badge badge-outline">PostgreSQL</div>
							<div class="badge badge-outline">CI</div>
						</div>
					</div>
				</div>
				<div class="card bg-base-100 shadow-sm col-span-3 lg:col-start-3">
					<figure>
						<img src={`${assets}/crypto-tracker.webp`} alt="l'application kesquondine" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">CRYPTO TRACKER</h2>
						<p>
							Crypto Tracker permet de gérer ses investissements en cryptomonnaies via un tableau de
							bord, un espace d'administration pour enregistrer les transactions, et un graphique
							pour suivre l'évolution du portefeuille jour après jour. J'ai conçu et développé
							l'ensemble de l'application, de la gestion des données à l'interface responsive.
						</p>
						<div class="card-actions justify-end">
							<div class="badge badge-outline">Flask</div>
							<div class="badge badge-outline">Python</div>
							<div class="badge badge-outline">PostgreSQL</div>
							<div class="badge badge-outline">CI/CD</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";
	:global(.card-body p) {
		@apply text-justify;
	}
</style>
