<script lang="ts">
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';

	import NavElement from './NavElement.svelte';
	import Button from './Button.svelte';

	import { pages } from '../const';

	let segment: string;
	$: segment = $page.path;

	const dispatch = createEventDispatcher();
	let showMobileMenu = false;

	let innerWidth;
	$: showMobileMenu = showMobileMenu && innerWidth <= 1024; // If resizing, hide mobile menu

	let scrollY = 0;
	$: isSticky = scrollY > 50;

	let transparent: boolean = false;
	$: transparent = !isSticky && segment === '/'; // No segment means index page

	function onMenuClick() {
		showMobileMenu = !showMobileMenu;
	}

	function onModalClick() {
		dispatch('triggerModal', {});
	}

	async function onNavClick(event: MouseEvent) {
		if (!showMobileMenu) return;
		showMobileMenu = !showMobileMenu;
	}
</script>

<svelte:window bind:scrollY bind:innerWidth />

<nav
	class="{!transparent || isSticky ? 'bg-green-700' : ''}
    fixed w-full z-30 flex items-center transition-colors duration-300 justify-between lg:justify-start"
>
	<a href="/">
		<picture>
			<source srcset="/logo_white.webp" type="image/webp" />
			<source srcset="/logo_white.png" type="image/png" />
			<img
				src="/logo_white.png"
				alt="Logo Meilleur Plan Climat"
				class="h-12 md:h-12 m-4 md:mx-8"
				width="130"
				height="48"
			/>
		</picture>
	</a>

	<ul class="hidden lg:flex">
		{#each pages as page}
			<li>
				<NavElement {segment} {page} on:click={onNavClick} />
			</li>
		{/each}
	</ul>

	<Button secondary classes="hidden lg:block mx-4 ml-auto" on:click={onModalClick}>
		Rejoindre le mouvement
	</Button>

	<button on:click={onMenuClick} class="m-6">
		<div class="lg:hidden flex items-center text-white flex">
			<div class="mt-px mr-2">Menu</div>
			<div class="w-6 h-6 icon"><FaBars /></div>
		</div>
	</button>
</nav>

{#if showMobileMenu}
	<style>
		.menu-item:after {
			@apply bg-green-700;
		}
	</style>
	<nav transition:slide class="bg-white mobile-menu z-30 fixed w-full pt-2 pb-2">
		<ul>
			{#each pages as page}
				<li>
					<NavElement isMobile={true} {segment} {page} on:click={onNavClick} />
				</li>
			{/each}

			<li
				on:click={onModalClick}
				class="text-green-900 bg-sand-200 font-bold py-4 cursor-pointer w-full sm:w-4/12 px-4 mx-auto text-center rounded-sm block"
			>
				Rejoindre le mouvement
			</li>
		</ul>
	</nav>
{/if}

<style>
	.mobile-menu {
		top: 80px;
		border-bottom-width: 3px;
		border-bottom-color: theme('colors.green.700');
		border-bottom-style: solid;
	}

	.icon {
		fill: #fff;
	}
</style>
