<script lang="ts">
	import Footer from '@/sections/Footer.svelte';

	import './page.css';
	import type { PageProps } from '../$types';
	import type { BlogData } from './page';

	let { data }: PageProps | BlogData = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css"
		integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib"
		crossorigin="anonymous"
	/>
	{#await data}
		<title>Loading...</title>
		{:then blogs}
		{#if 'file' in blogs}
			<title>{blogs.file.metadata.title || "404"}</title>
		{:else}
			<title>404</title>
		{/if}
		{/await}
</svelte:head>

<section class="mt-32 flex w-full justify-center">
	{#await data}
		<div class="skeleton h-14 w-1/2 rounded-full"></div>
		<div class="skeleton mt-2 h-8 w-full rounded-full"></div>
		<div class="skeleton mt-2 h-8 w-full rounded-full"></div>
	{:then blogs}
		{#if 'file' in blogs}
			<article
				class="prose prose-stone prose-lg prose-img:rounded-xl bg-base-200 shadow-base-300 border-t-2 border-t-white px-20 pt-5 pb-10 shadow-2xl"
			>
				<header>
					<span class="breadcrumbs text-sm">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/blog">Blogs</a></li>
							<li>{blogs.file.metadata.title}</li>
						</ul>
					</span>

					<h1>
						<span class="text-gray-300">&gt; </span>
						{blogs.file.metadata.title}
					</h1>
					<blockquote class="text-gray-300">
						{blogs.file.metadata.description}
						<br />
						<span class="text-sm text-gray-500"
							>Last updated: {new Date(blogs.file.metadata.timestamp)}</span
						>
					</blockquote>
				</header>
				<hr />
				<blogs.file.default />
			</article>
		{:else}
			<p>Error: Blog Not Found</p>
		{/if}
	{/await}
</section>

<Footer />
