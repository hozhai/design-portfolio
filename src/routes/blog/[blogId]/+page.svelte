<script lang="ts">
	import Footer from '@/sections/Footer.svelte';
	import type { BlogData } from './page';

	let { data }: BlogData = $props();
</script>

<section class="mt-32 flex w-full justify-center">
	{#if data.component}
		<article class="prose prose-stone prose-lg bg-black/20 px-20 pt-20 pb-10">
			<h1>
				<span class="text-stone-300">| </span>
				{data.metadata.title}
			</h1>
			<h3 class="text-gray-300">{data.metadata.description}</h3>
			<hr />
			<data.component />
		</article>
	{:else}
		<p>Error: Blog Not Found</p>
	{/if}
</section>

<Footer />
