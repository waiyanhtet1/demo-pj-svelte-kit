<script lang="ts">
	export let data;
	$: character = data.character;
</script>

<h1>Character Detail Page</h1>

<h4>{character.name}</h4>

<img src={character.image} alt="" />

<style>
	img {
		width: 300px;
		height: auto;
		object-fit: contain;
	}
</style>
