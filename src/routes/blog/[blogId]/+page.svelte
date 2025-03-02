<script lang="ts">
	let { data }: { data: { component: any; metadata: any } } = $props();
</script>

<div>
	{#if data.component}
		<data.component />
		<p>
			{JSON.stringify(data.metadata, null, 2)}
		</p>
	{:else}
		<p>Component not found</p>
	{/if}
</div>
