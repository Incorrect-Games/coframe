<script>
	import { VIDEO_DATA } from "./stores.js";

	import Comments from "./components/Comments.svelte";
	import VideoPlayer from "./components/VideoPlayer.svelte";
	import FilePicker from "./components/FilePicker.svelte";
</script>

{#if $VIDEO_DATA.videoPath}
	<div class="layout">
		<div class="header">
			<button class="text back-button" on:click={() => ($VIDEO_DATA.videoPath = null)}>
				<span class="material-icons-outlined"> arrow_back </span>
			</button>
			<h2>{$VIDEO_DATA.videoName}</h2>
			<span class="path">{$VIDEO_DATA.videoPath}</span>
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

	.header {
		height: 64px;
		display: flex;
		align-items: center;
		padding: 0 32px;
		border-bottom: 2px solid var(--color-background-darker);
	}

	.header .path {
		font-size: 14px;
		opacity: 0.4;
	}

	.header > * {
		margin-right: 30px;
	}

	.content {
		height: calc(100% - 64px);
		display: flex;
	}
</style>
