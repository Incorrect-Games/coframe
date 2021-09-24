<script>
	import { VIDEO_DATA } from "./stores.js";

	import Comments from "./components/Comments.svelte";
	import VideoPlayer from "./components/VideoPlayer.svelte";
	import FilePicker from "./components/FilePicker.svelte";
</script>

{#if $VIDEO_DATA.videoPath}
	<div class="layout">
		<div class="header">
			<h1>coframe</h1>
		</div>
		<div class="content">
			<VideoPlayer />
			<Comments />
		</div>
	</div>
{:else}
	<FilePicker />
{/if}

<style>
	.layout {
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: column;
	}

	.layout .content {
		height: 100%;
		width: 100%;
		display: flex;
	}
</style>
