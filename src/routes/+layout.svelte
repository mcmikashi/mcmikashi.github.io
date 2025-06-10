<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/header/Header.svelte';
	import { theme } from '$lib/store/Theme.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div data-theme={theme.value} class="flex min-h-screen flex-col">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(section) {
		@apply my-auto;
		min-height: 50vh;
	}
</style>
