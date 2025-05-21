<script>
	import { theme, ThemeType } from '$lib/store/Theme.svelte';
	import { Moon, Sun } from '@lucide/svelte';
</script>

<button class="swap swap-active swap-rotate text-6xl" onclick={() => theme.toggle()}>
	<div
		class={[
			theme.value === ThemeType.Light && 'swap-on',
			theme.value === ThemeType.Dark && 'swap-off'
		]}
	>
		<Sun size={30} />
	</div>
	<div
		class={[
			theme.value === ThemeType.Dark && 'swap-on',
			theme.value === ThemeType.Light && 'swap-off'
		]}
	>
		<Moon size={30} />
	</div>
</button>
