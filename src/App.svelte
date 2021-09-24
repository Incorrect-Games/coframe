<script>
	const remote = require("electron").remote;
	const path = remote.require("path");

	let VIDEO_PLAYER;

	let videoSrc;
	const changeVideo = (event) => {
		videoSrc = event.target?.files[0].path;

		const configFile =
			path.parse(event.target?.files[0].path).name + ".json";
		const configPath = path.join(path.dirname(videoSrc), configFile);

		// Look for JSON file relative to video path.
		console.log(configPath);
	};

	let comments = [];
	const submitComment = (event) => {
		const data = new FormData(event.target);
		const comment = data.get("comment");
		const currentTime = VIDEO_PLAYER.currentTime;

		comments = [...comments, { message: comment, timestamp: currentTime }];
	};
</script>

<main>
	<p>{videoSrc}</p>
	<div>
		<input type="file" on:change={changeVideo} />
		<br />
		<video bind:this={VIDEO_PLAYER} controls src={videoSrc} />
	</div>
	<br />
	<br />
	<div>
		<form on:submit|preventDefault={submitComment}>
			<textarea name="comment" />
			<br />
			<button type="submit">Add comment</button>
		</form>
	</div>
	{#each comments as comment}
		<li on:click={() => (VIDEO_PLAYER.currentTime = comment.timestamp)}>
			<span>{comment.timestamp}</span>
			{comment.message}
		</li>
	{/each}
	<div />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
