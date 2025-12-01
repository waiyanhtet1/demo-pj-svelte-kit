<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		left?: Snippet<[boolean]>;
		children: Snippet;
		onClick?: () => void;
	}

	let { left, children, onClick }: Props = $props();
	let isHovered = $state(false);
</script>

{#if left}
	{@render left(isHovered)}
{/if}

<button onclick={onClick}>
	<div
		role="presentation"
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
	>
		{@render children()}
	</div>
</button>
