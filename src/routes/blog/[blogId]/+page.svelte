<script lang="ts">
	import Footer from '@/sections/Footer.svelte';
	import type { BlogData } from './page';

	import './page.css';

	let { data }: BlogData = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css"
		integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib"
		crossorigin="anonymous"
	/>
</svelte:head>

<section class="mt-32 flex w-full justify-center">
	{#if data.component}
		<article class="prose prose-stone prose-lg bg-base-200 px-20 pt-20 pb-10">
			<header>
				<h1>
					<span class="text-gray-300">&gt; </span>
					{data.metadata.title}
				</h1>
				<blockquote class="text-gray-300">
					{data.metadata.description}
					<br />
					<span class="text-sm text-gray-500"
						>Last updated: {new Date(data.metadata.timestamp)}</span
					>
				</blockquote>
			</header>
			<hr />
			<data.component />
		</article>
	{:else}
		<p>Error: Blog Not Found</p>
	{/if}
</section>

<Footer />
