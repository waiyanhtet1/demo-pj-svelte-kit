<script>
	import { page } from '$app/state';
</script>

<h1>Failed! 💥</h1>

<p>{page.error?.message}</p>

<pre>{JSON.stringify(page, null, 2)}</pre>
