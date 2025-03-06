<script lang="ts">
	import { Canvas } from '@threlte/core';
	import HomeScene from '@/scenes/HomeScene.svelte';
</script>

<section class="bg-base-100 grid min-h-screen place-items-center">
	<span class="absolute bottom-0 w-full">
		<Canvas>
			<HomeScene />
		</Canvas>
	</span>

	<article>
		<h2 class="text-6xl" on:visibilitychange={(event) => {}}>Hey! 👋</h2>
		<h1 class="text-8xl">I'm Hongmeng Zhai</h1>
		<h3 class="font-mono text-2xl text-stone-200">Full-Stack Web Developer and Designer</h3>
	</article>

	<span
		class="pointer-events-none absolute bottom-[10vh] left-1/2 -translate-x-1/2 animate-ping text-3xl"
	>
		&DownArrow;
	</span>
	<span class="pointer-events-none absolute bottom-[10vh] left-1/2 -translate-x-1/2 text-3xl"
		>&DownArrow;</span
	>
</section>
