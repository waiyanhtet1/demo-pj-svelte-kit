<script lang="ts">
	import '../app.css';
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
