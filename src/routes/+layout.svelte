<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/space-grotesk';
	import '@fontsource/space-mono';
	import '@fontsource-variable/material-symbols-rounded';

	import Navbar from '@/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css"
		integrity="sha384-zh0CIslj+VczCZtlzBcjt5ppRcsAmDnRem7ESsYwWwg3m/OaJ2l4x7YBZl9Kxxib"
		crossorigin="anonymous"
	/>
</svelte:head>

<Navbar />
{@render children()}
