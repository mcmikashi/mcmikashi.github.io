<script>
	import { Copyright } from '@lucide/svelte';
	import Github from '../common/icons/Github.svelte';
	import Linkedin from '../common/icons/Linkedin.svelte';
	import Twitter from '../common/icons/Twitter.svelte';
</script>

<footer class="bg-base-100 flex lg:flex-row flex-col items-center justify-between p-2 shadow-sm gap-3 lg:px-10 lg:py-4">
	<aside class="flex flex-row gap-1">
		<Copyright size={18} />
		<p class="text-sm">{new Date().getFullYear()} Mickaël Anicette. Tous droits réservés.</p>
	</aside>
	<div class="flex flex-row items-center gap-4">
		<h6 class="footer-title mb-0 lg:text-base text-sm">Réseau sociaux</h6>
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
