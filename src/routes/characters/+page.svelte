<script lang="ts">
	export let data;

	$: characters = data.characters;
</script>

<h1>Characters List</h1>

<div class="characters-list">
	{#each characters as character}
		<div class="character-card">
			<a href={`/characters/${character.id}`}>
				<img src={character.image} alt={character.name} />
			</a>

			<div>
				<h2>{character.name}</h2>
				<p>{character.occupation || 'Unknown'}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.characters-list {
		max-width: 500px;
		margin: 0 auto;
	}

	.character-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		max-width: 100px;
		object-fit: contain;
	}
</style>
