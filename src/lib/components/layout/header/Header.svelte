<script>
	import { assets } from '$app/paths';
	import MenuList from './MenuList.svelte';
	import SwapTheme from './SwapTheme.svelte';
</script>

<header id="header">
	<div class="navbar bg-base-100 shadow-sm">
		<div class="navbar-start">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
				>
					<MenuList />
				</ul>
			</div>
			<a class="btn btn-ghost text-lg" href="#header">
				<div class="avatar">
					<div class="w-10 rounded-full">
						<img src={`${assets}/logo_mickael_anicette.png`} alt="logo de mickaël anicette" />
					</div>
				</div>
				Mickaël Anicette
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<MenuList />
			</ul>
		</div>
		<div class="navbar-end">
			<SwapTheme />
		</div>
	</div>
</header>

<style>


@media only screen and (min-width: 1024px) and (max-width: 1100px) {
  header .navbar-end {
    width: 25%;
  }
}
</style>