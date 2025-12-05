<script>
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<div class="spinner"></div>
{/if}

<slot />

<style>
	.spinner {
		width: 40px;
		height: 40px;
		border: 4px solid #ddd;
		border-top-color: #333;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin: 1rem auto;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
