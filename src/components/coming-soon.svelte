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
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	h2 {
		position: absolute;
		top: 2rem;
		right: 2rem;
		font-size: 2rem;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 2rem;
	}

	h1,
	h2 {
		font-weight: bold;
	}

	input {
		display: block;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		width: 18rem;
		border-radius: 0;
		padding: 0.2rem 1.5rem;
		border: none;
		text-align: center;
	}

	button {
		display: block;
		margin: 0 auto;
		border-radius: 0;
		border: none;
		font-size: 1.5rem;
		padding: 0.2rem 1.5rem;
		background: aliceblue;
	}

	p {
		margin: 0 auto;
		font-size: 1.2rem;
		text-align: center;
	}

	input:focus,
	button:focus {
		outline: none;
	}
</style>
