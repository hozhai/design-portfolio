<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/space-grotesk';
	import '@fontsource/space-mono';
	import '@fontsource-variable/material-symbols-rounded';

	import Navbar from '@/components/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />

{@render children()}
