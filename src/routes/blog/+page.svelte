<script lang="ts">
	import Navbar from '@/components/Navbar.svelte';

	let { data } = $props();
</script>

<Navbar />

<section>
	<header>
		<h1 class="mt-32 text-center text-6xl">Latest Posts</h1>
	</header>
	<div class="mt-20 flex w-full flex-col items-center justify-center space-y-12">
		{#each data.data as blog}
			<a
				href="/blog/{blog.slug}"
				class="bg-base-200 relative p-10 shadow-md transition-all hover:shadow-xl hover:brightness-110"
			>
				<article
					class="prose prose-blockquote:font-light prose-blockquote:not-italic prose-blockquote:text-xl"
				>
					<h3 class="text-3xl font-bold">&gt; {blog.title}</h3>
					<blockquote>{blog.description}</blockquote>
					<p class="italic">Last Updated: {new Date(blog.timestamp).toLocaleDateString()}</p>
				</article>
			</a>
		{/each}
		<article
			class="prose prose-blockquote:font-light prose-blockquote:not-italic prose-blockquote:text-xl bg-base-200 p-10 shadow-md"
		>
			<h3 class="text-3xl font-bold">&gt; More in the future :)</h3>
		</article>
	</div>
</section>

<style>
	div a::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		transition: all 0.5s ease-in-out;
		width: 0%;
		height: 3px;
		background-color: white;
	}

	div a:hover::before {
		width: 100%;
	}
</style>
