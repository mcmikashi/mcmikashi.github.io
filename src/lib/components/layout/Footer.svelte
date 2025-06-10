<script>
	import { Copyright } from '@lucide/svelte';
	import Github from '../common/icons/Github.svelte';
	import Linkedin from '../common/icons/Linkedin.svelte';
	import Twitter from '../common/icons/Twitter.svelte';
</script>

<footer class="bg-base-100 flex flex-row items-center justify-between px-10 py-4 shadow-sm">
	<aside class="flex flex-row gap-2">
		<Copyright />
		<p>{new Date().getFullYear()} Votre Mickaël Anicette. Tous droits réservés.</p>
	</aside>
	<div class="flex flex-row items-center gap-4">
		<h6 class="footer-title mb-0">Réseau sociaux</h6>
		<nav>
			<div class="grid grid-flow-col gap-8">
				<a
					href="https://github.com/mcmikashi"
					aria-label="Mon profil GitHub - Voir mes projets (nouvel onglet)"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github />
				</a>
				<a
					href="https://www.linkedin.com/in/micka%C3%ABl-anicette-484002245/"
					aria-label="Visiter mon profil LinkedIn (nouvel onglet)"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin />
				</a>
				<a
					href="https://x.com/mcmikashi973"
					aria-label="Visiter mon profil Twitter (nouvel onglet)"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Twitter />
				</a>
			</div>
		</nav>
	</div>
</footer>
