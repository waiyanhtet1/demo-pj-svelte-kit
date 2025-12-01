<script lang="ts">
	let firstName = $state("wai yan");
    let lastName = $state("htet");
    let fullName = $derived(`${firstName} ${lastName}`)
</script>

<input type="text" bind:value={firstName} >

<h1>Hello {firstName}</h1>

<p>Full name is {fullName}</p>


<style>
	h1 {
		color: red;
	}
</style>
