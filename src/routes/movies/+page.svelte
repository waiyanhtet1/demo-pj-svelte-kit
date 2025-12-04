<script lang="ts">
	import { enhance } from '$app/forms';
	import { flip } from 'svelte/animate';
	import { fade, scale } from 'svelte/transition';
	import type { PageData } from './$types';
	import './form.css';

	export let data: PageData;
	export let form;

	$: movies = data?.movies ?? [];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Movie Log</h1>

<!-- <form use:enhance={() => {
          console.log('BEFORE ACTIONS')
          loading = true;
          return ({ result, update }) => {
            console.log('AFTER ACTION', result)
            loading = false;
            update()
          }  
        }} method="post" action="?/logMovie"> -->
<div class="container">
	<form use:enhance method="post" action="?/addMovie">
		<label for="name">Name</label>
		<input id="name" name="name" value={form?.name ?? ''} />

		<label for="release">Release</label>
		<input type="number" id="release" name="release" value={form?.release ?? ''} />

		<label for="rating">Rating</label>
		<select id="rating" name="rating" value={form?.rating ?? ''}>
			<option>Select a rating</option>
			<option value="1">1 Stars ⭐️</option>
			<option value="2">2 Stars ⭐️⭐️</option>
			<option value="3">3 Stars ⭐️⭐️⭐️</option>
			<option value="4">4 Stars ⭐️⭐️⭐️⭐️</option>
			<option value="5">5 Stars ⭐️⭐️⭐️⭐️⭐️</option>
		</select>

		<label for="comment">Comment:</label>
		<textarea
			id="comment"
			name="comment"
			placeholder="What did you think?"
			value={form?.comment ?? ''}
		></textarea>

		<div class="submission">
			<span class="error">{form?.error}</span>
			<button type="submit">
				<!-- {loading ? '...loading' : 'Log The Movie'} -->
				Log the movie
			</button>
		</div>
	</form>

	<table>
		<thead>
			<tr>
				<th class="name">name</th>
				<th class="release">release</th>
				<th class="rating">rating</th>
				<th class="comment">comment</th>
				<th class="action"></th>
			</tr>
		</thead>
		<tbody>
			{#each movies as movie (movie.id)}
				<tr in:fade out:scale animate:flip={{ duration: 500 }}>
					<td class="name">{movie.name}</td>
					<td class="release">{movie.release}</td>
					<td class="rating">{movie.rating}</td>
					<td class="comment">{movie.comment}</td>
					<td class="action">
						<form use:enhance method="post" action="?/deleteMovie">
							<button type="submit" name="movieToDelete" value={movie.id}>Delete</button>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.container {
		display: flex;
		gap: 1rem;
	}

	.container form {
		flex: 2;
	}

	.container table {
		flex: 2;
	}
</style>
