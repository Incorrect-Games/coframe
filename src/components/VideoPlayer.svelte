<script>
	import { VIDEO_DATA } from "../stores.js";
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video src={$VIDEO_DATA.videoPath} bind:this={$VIDEO_DATA.video} controls />
