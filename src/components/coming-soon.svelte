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
	<div class="heading-wrap">
		<h2>Frog & Wolf PR</h2>
		<h1>Coming Soon...</h1>
		<a href="mailto:pr@frogandwolfpr.com" target="_blank" rel="noopener noreferrer"
			><button>Tell me more!</button></a
		>
		<div class="social-buttons">
			<a href="https://www.instagram.com/frogandwolfpr/" target="_blank" rel="noopener noreferrer"
				><svg
					height="100%"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					version="1.1"
					viewBox="0 0 512 512"
					width="100%"
					><path
						d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm0,96c-43.453,0 -48.902,0.184 -65.968,0.963c-17.03,0.777 -28.661,3.482 -38.839,7.437c-10.521,4.089 -19.444,9.56 -28.339,18.455c-8.895,8.895 -14.366,17.818 -18.455,28.339c-3.955,10.177 -6.659,21.808 -7.437,38.838c-0.778,17.066 -0.962,22.515 -0.962,65.968c0,43.453 0.184,48.902 0.962,65.968c0.778,17.03 3.482,28.661 7.437,38.838c4.089,10.521 9.56,19.444 18.455,28.34c8.895,8.895 17.818,14.366 28.339,18.455c10.178,3.954 21.809,6.659 38.839,7.436c17.066,0.779 22.515,0.963 65.968,0.963c43.453,0 48.902,-0.184 65.968,-0.963c17.03,-0.777 28.661,-3.482 38.838,-7.436c10.521,-4.089 19.444,-9.56 28.34,-18.455c8.895,-8.896 14.366,-17.819 18.455,-28.34c3.954,-10.177 6.659,-21.808 7.436,-38.838c0.779,-17.066 0.963,-22.515 0.963,-65.968c0,-43.453 -0.184,-48.902 -0.963,-65.968c-0.777,-17.03 -3.482,-28.661 -7.436,-38.838c-4.089,-10.521 -9.56,-19.444 -18.455,-28.339c-8.896,-8.895 -17.819,-14.366 -28.34,-18.455c-10.177,-3.955 -21.808,-6.66 -38.838,-7.437c-17.066,-0.779 -22.515,-0.963 -65.968,-0.963Zm0,28.829c42.722,0 47.782,0.163 64.654,0.933c15.6,0.712 24.071,3.318 29.709,5.509c7.469,2.902 12.799,6.37 18.397,11.969c5.6,5.598 9.067,10.929 11.969,18.397c2.191,5.638 4.798,14.109 5.509,29.709c0.77,16.872 0.933,21.932 0.933,64.654c0,42.722 -0.163,47.782 -0.933,64.654c-0.711,15.6 -3.318,24.071 -5.509,29.709c-2.902,7.469 -6.369,12.799 -11.969,18.397c-5.598,5.6 -10.928,9.067 -18.397,11.969c-5.638,2.191 -14.109,4.798 -29.709,5.509c-16.869,0.77 -21.929,0.933 -64.654,0.933c-42.725,0 -47.784,-0.163 -64.654,-0.933c-15.6,-0.711 -24.071,-3.318 -29.709,-5.509c-7.469,-2.902 -12.799,-6.369 -18.398,-11.969c-5.599,-5.598 -9.066,-10.928 -11.968,-18.397c-2.191,-5.638 -4.798,-14.109 -5.51,-29.709c-0.77,-16.872 -0.932,-21.932 -0.932,-64.654c0,-42.722 0.162,-47.782 0.932,-64.654c0.712,-15.6 3.319,-24.071 5.51,-29.709c2.902,-7.468 6.369,-12.799 11.968,-18.397c5.599,-5.599 10.929,-9.067 18.398,-11.969c5.638,-2.191 14.109,-4.797 29.709,-5.509c16.872,-0.77 21.932,-0.933 64.654,-0.933Zm0,49.009c-45.377,0 -82.162,36.785 -82.162,82.162c0,45.377 36.785,82.162 82.162,82.162c45.377,0 82.162,-36.785 82.162,-82.162c0,-45.377 -36.785,-82.162 -82.162,-82.162Zm0,135.495c-29.455,0 -53.333,-23.878 -53.333,-53.333c0,-29.455 23.878,-53.333 53.333,-53.333c29.455,0 53.333,23.878 53.333,53.333c0,29.455 -23.878,53.333 -53.333,53.333Zm104.609,-138.741c0,10.604 -8.597,19.199 -19.201,19.199c-10.603,0 -19.199,-8.595 -19.199,-19.199c0,-10.604 8.596,-19.2 19.199,-19.2c10.604,0 19.201,8.596 19.201,19.2Z"
					/></svg
				>
			</a>
			<a
				href="https://www.linkedin.com/company/frog-wolf-pr"
				target="_blank"
				rel="noopener noreferrer"
				><svg
					height="100%"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					version="1.1"
					viewBox="0 0 512 512"
					width="100%"
					><path
						d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z"
					/></svg
				></a
			>
			<a href="https://twitter.com/frogandwolf" target="_blank" rel="noopener noreferrer"
				><svg
					height="100%"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					version="1.1"
					viewBox="0 0 512 512"
					width="100%"
					><path
						d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-45.091,392.158c113.283,0 175.224,-93.87 175.224,-175.223c0,-2.682 0,-5.364 -0.128,-7.919c12.005,-8.684 22.478,-19.54 30.779,-31.928c-10.983,4.853 -22.861,8.174 -35.377,9.706c12.772,-7.663 22.478,-19.668 27.076,-34.099c-11.878,7.024 -25.032,12.132 -39.081,14.942c-11.239,-12.005 -27.203,-19.412 -44.955,-19.412c-33.972,0 -61.558,27.586 -61.558,61.558c0,4.853 0.511,9.578 1.66,14.048c-51.213,-2.554 -96.552,-27.075 -126.947,-64.368c-5.237,9.068 -8.302,19.668 -8.302,30.907c0,21.328 10.856,40.23 27.459,51.213c-10.09,-0.255 -19.541,-3.065 -27.842,-7.662l0,0.766c0,29.885 21.2,54.661 49.425,60.409c-5.108,1.404 -10.6,2.171 -16.219,2.171c-3.96,0 -7.791,-0.383 -11.622,-1.15c7.79,24.521 30.523,42.274 57.471,42.784c-21.073,16.476 -47.637,26.31 -76.501,26.31c-4.981,0 -9.834,-0.256 -14.687,-0.894c26.948,17.624 59.387,27.841 94.125,27.841Z"
					/></svg
				></a
			>
		</div>
	</div>
	<!-- Removing email caputre for now -->
	<!-- <form on:submit|preventDefault={onSubmit}>
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
	</form> -->
</div>

<style>
	.container {
		width: 100%;
		height: 100vh;
		background: url('/background-coffee.jpeg');
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.heading-wrap {
		background: rgba(255, 255, 255, 0.3);
		padding: 1rem 2rem;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 4px 4px 20px 4px rgb(255 255 255 / 15%);
	}

	.social-buttons {
		display: flex;
	}

	.social-buttons a {
		margin: 0.5rem;
		display: block;
	}

	.social-buttons svg {
		height: 2.5rem;
		fill: #734046;
		transition: fill 0.2s ease-in-out;
	}

	.social-buttons svg:hover {
		fill: #a05344;
	}

	h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
	}

	h1 {
		font-size: 5rem;
		margin-bottom: 2rem;
	}

	h1,
	h2 {
		font-weight: bold;
		color: #321f28;
	}

	a {
		text-decoration: none;
	}

	button {
		display: block;
		margin: 0 auto;
		margin-bottom: 1rem;
		border: none;
		font-size: 1.5rem;
		padding: 0.2rem 1.5rem;
		background: #734046;
		color: #e79e4f;
		border-radius: 4px;
		transition: background 0.2s ease-in-out;
	}

	button:hover {
		background: #a05344;
	}

	button:focus {
		outline: none;
	}

	@media screen and (min-width: 1300px) {
		.container {
			align-items: flex-start;
		}

		.heading-wrap {
			margin-left: 10rem;
		}
	}

	@media screen and (max-width: 767px) {
		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 2rem;
		}

		button {
			font-size: 1.25rem;
		}
	}
</style>
