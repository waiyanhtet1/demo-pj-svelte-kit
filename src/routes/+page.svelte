<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

{#snippet leftButton(isHovered: boolean)}
	{#if isHovered}
		<p>Hovered left button icon</p>
	{:else}
		<p>Left button icon</p>
	{/if}
{/snippet}

<Button left={leftButton} onClick={() => alert('hello')}>Button Text</Button>
