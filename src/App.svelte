<script>
	import { VIDEO_DATA } from "./stores.js";

	import Comments from "./components/Comments.svelte";
	import VideoPlayer from "./components/VideoPlayer.svelte";
	import FilePicker from "./components/FilePicker.svelte";

	const remote = require("electron").remote;
	const path = remote.require("path");
	const fs = remote.require("fs");

	let VIDEO_PLAYER;
	let CONFIG_PATH;

	let comments = [];
	let videoSrc;
</script>

<main>
	<h1>coframe</h1>
	{#if $VIDEO_DATA.videoPath}
		<VideoPlayer />
		<Comments />
	{:else}
		<FilePicker />
	{/if}
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
