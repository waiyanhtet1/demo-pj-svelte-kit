<script lang="ts">
	export let data;
</script>

<h1>{data.user}</h1>

<form method="post" action="?/logout">
	<button type="submit">Logout</button>
</form>
