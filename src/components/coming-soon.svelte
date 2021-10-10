<script lang="ts">
	import { variables } from '../constants';
	let email: string;
	let displayMessage: string;

	const onSubmit = async () => {
		try {
			const request = await fetch(`${variables.googleSheet}?email=${email}`, {
				method: 'GET'
			});
			const response = await request.json();

			if (!response.result || response.result === 'error') {
				displayMessage = 'Something went wrong, please refresh the page and try again';
			}

			if (response.result === 'success') {
				displayMessage = "Thanks, we'll be in touch!";
			}
		} catch (error) {
			displayMessage = 'Something went wrong, please refresh the page and try again';
			console.error(error);
		}
	};
</script>

<div class="container">
	<h2>Frog & Wolf PR</h2>
	<h1>Coming Soon...</h1>
	<form on:submit|preventDefault={onSubmit}>
		<input
			type="email"
			name="email"
			id="email-input"
			placeholder="Enter your email address"
			bind:value={email}
		/>
		{#if displayMessage}
			<p>{displayMessage}</p>
		{/if}
		{#if !displayMessage}
			<button type="submit">Tell me more!</button>
		{/if}
	</form>
</div>

<style>
	.container {
		width: 100%;
		height: 100vh;
		background: url('/background.jpeg') center center no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
