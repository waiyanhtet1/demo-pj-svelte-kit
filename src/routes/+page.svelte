<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { fly } from 'svelte/transition';
	let isShown = $state(false);
</script>

{#snippet leftButton(isHovered: boolean)}
	{#if isHovered}
		<p>Hovered left button icon</p>
	{:else}
		<p>Left button icon</p>
	{/if}
{/snippet}

<Button left={leftButton} onClick={() => alert('hello')}>Button Text</Button>

<Button onClick={() => (isShown = !isShown)}>Fade Animation</Button>

{#if isShown}
	<p transition:fly={{ duration: 500, x: 30 }}>watermelon 🍉</p>
{/if}
