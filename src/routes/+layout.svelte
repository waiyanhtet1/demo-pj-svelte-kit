<script lang="ts">
	import '../app.css';

	export let data;
</script>

<svelte:head>
	<title>Svelt Kit Demo</title>
</svelte:head>

<nav>
	<li>
		<a href="/">Home</a>
	</li>
	<li>
		<a href="/posts">Posts</a>
	</li>
	<li>
		<a href="/characters">Characters</a>
	</li>
	<li>
		<a href="/movies">Movies</a>
	</li>
	{#if data.user}
		<a href="/profile">{data.user}</a>
	{:else}
		<a href="/login">Login</a>
	{/if}
	<li></li>
</nav>

<slot />

<style>
	nav {
		margin-bottom: 2rem;
	}
	li {
		display: inline;
		margin-right: 1rem;
	}
</style>
