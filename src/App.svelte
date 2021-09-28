<script>
	import { VIDEO_DATA } from "./stores.js";

	import Comments from "./components/Comments.svelte";
	import CommentInput from "./components/Comments/CommentInput.svelte";
	import VideoPlayer from "./components/VideoPlayer.svelte";
	import FilePicker from "./components/FilePicker.svelte";
	import Frame from "./components/ui/Frame.svelte";
</script>

{#if $VIDEO_DATA.videoPath}
	<div class="layout">
		<Frame />
		<div id="app">
			<div class="header">
				<button class="text back-button" on:click={() => ($VIDEO_DATA.videoPath = null)}>
					<span class="material-icons-outlined"> chevron_left </span>
				</button>
				<h2>{$VIDEO_DATA.videoName}</h2>
				<span class="path">{$VIDEO_DATA.videoPath}</span>
			</div>
			<div class="content">
				<div>
					<VideoPlayer />
					<CommentInput />
				</div>
				<Comments />
			</div>
		</div>
	</div>
{:else}
	<FilePicker />
{/if}

<style>
	#app {
		height: calc(100% - 18px);
		width: 100%;
	}
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
		font-size: 0.8rem;
		opacity: 0.6;
	}

	.header > * {
		margin-right: 30px;
	}

	.content {
		height: calc(100% - 64px);
		display: flex;
	}

	.content div {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	h2 {
		font-size: 1.2rem;
	}
</style>
