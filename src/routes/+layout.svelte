<script lang="ts">
	import Header from '$lib/components/layout/header/Header.svelte';
	import { theme } from '$lib/store/Theme.svelte';
	import '../app.css';
	let { children } = $props();
</script>


<div data-theme={theme.value} class="min-h-screen flex flex-col">
<Header />
<main>
{@render children()}
</main>
</div>

