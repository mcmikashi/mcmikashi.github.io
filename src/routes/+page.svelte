<script>
	import About from '$lib/components/common/About.svelte';
	import Contact from '$lib/components/common/Contact.svelte';
	import Education from '$lib/components/common/Education.svelte';
	import Experience from '$lib/components/common/Experience.svelte';
	import Hero from '$lib/components/common/Hero.svelte';
	import Project from '$lib/components/common/Project.svelte';
</script>

<div class="flex flex-col">
	<Hero />
	<About />
	<Project />
	<Experience />
	<Education />
	<Contact />
</div>
