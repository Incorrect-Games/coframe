<script>
	import { VIDEO_DATA } from "../stores.js";
</script>

<div class="video">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video src={$VIDEO_DATA.videoPath} bind:this={$VIDEO_DATA.video} controls />
</div>

<style>
	.video {
		width: 100%;
		height: 100%;
		background-color: var(--color-background-darker);
	}

	video {
		width: 100%;
	}
</style>
