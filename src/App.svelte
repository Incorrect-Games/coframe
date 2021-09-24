<script>
	const remote = require("electron").remote;
	const path = remote.require("path");
	const fs = remote.require("fs");

	let VIDEO_PLAYER;
	let CONFIG_PATH;

	let comments = [];
	let videoSrc;

	const saveData = () => {
		const data = JSON.stringify(comments);
		fs.writeFile(CONFIG_PATH, data, (err) => {
			if (err) {
				console.log("unlucky can't write to file");
				return;
			}

			console.log("yoo saved");
		});
	};

	const changeVideo = (event) => {
		videoSrc = event.target?.files[0].path;

		const configFile =
			path.parse(event.target?.files[0].path).name + ".json";
		CONFIG_PATH = path.join(path.dirname(videoSrc), configFile);

		if (fs.existsSync(CONFIG_PATH)) {
			const _comments = fs.readFile(CONFIG_PATH, "utf-8", (err, data) => {
				if (err) {
					console.log("unlucky can't read that json file");
				}
				comments = [...comments, JSON.parse(data.toString())][0];
			});
		}
	};

	const submitComment = (event) => {
		const data = new FormData(event.target);
		const comment = data.get("comment");
		const currentTime = VIDEO_PLAYER.currentTime;

		comments = [
			...comments,
			{ message: comment, timestamp: currentTime },
		].sort((a, b) => a.timestamp - b.timestamp);

		saveData();
	};
</script>

<main>
	<p>{videoSrc}</p>
	<div>
		<input type="file" on:change={changeVideo} />
		<br />
		<!-- svelte-ignore a11y-media-has-caption -->
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
