<script>
	import { GraduationCap } from '@lucide/svelte';
</script>

<section class="hero bg-base-200" id="education">
	<div class="hero-content text-center">
		<div class="lg:max-w-4/6">
			<h3 class="mb-4 text-2xl font-extrabold">Formation</h3>
			<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical m-3">
				<li>
					<div class="timeline-middle">
						<GraduationCap />
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<time class="font-mono italic">2021-2022</time>
						<div class="md:text-lg text-base font-black">BACHELOR développeur d'application python</div>
						<p>Studi(en ligne)</p>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<GraduationCap />
					</div>
					<div class="timeline-end md:mb-10">
						<time class="font-mono italic">2014-2016</time>
						<div class="md:text-lg text-base font-black">
							BTS SIO (Service Informatique aux Organisations) OPTION SLAM (solutions logicielles et
							applications métiers
						</div>
						<p>Lycée LE CASTEL (Dijon - France)</p>
					</div>
					<hr />
				</li>
				<li>
					<hr />
					<div class="timeline-middle">
						<GraduationCap />
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<time class="font-mono italic">2011-2014</time>
						<div class="md:text-lg text-base font-black">
							BTS SIO (Service Informatique aux Organisations) OPTION SLAM (solutions logicielles et
							applications métiers)
						</div>
						<p>BAC PRO SEN (Système Numérique Électronique) Mention Bien</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</section>
