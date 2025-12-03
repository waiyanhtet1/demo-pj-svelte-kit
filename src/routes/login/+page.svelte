<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<h1>Login page</h1>

<form use:enhance method="post" action="?/login">
	<label for="username">UserName</label>
	<input type="text" id="username" name="username" value={form?.username ?? ''} />
	<p style="color: red;">{form?.errors?.username}</p>

	<label for="password">Password</label>
	<input type="text" id="password" name="password" value={form?.password ?? ''} />
	<p style="color: red;">{form?.errors?.password}</p>

	<p style="color: red;">{form?.error}</p>

	<button type="submit">Login</button>
</form>
