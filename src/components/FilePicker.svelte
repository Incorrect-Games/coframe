<script>
	import { onMount } from "svelte";

	import { VIDEO_DATA } from "../stores.js";
	import * as videoHandler from "./video-handler";

	const changeVideo = (videoPath) => {
		$VIDEO_DATA.videoPath = videoPath;

		// When video updates, update comment store.
		$VIDEO_DATA.configPath = videoHandler.getConfig($VIDEO_DATA.videoPath);

		try {
			$VIDEO_DATA.comments = videoHandler.readConfig(
				$VIDEO_DATA.configPath
			);
		} catch (err) {
			console.log(err);
		}
	};

	const onChange = (event) => {
		changeVideo(event.target?.files[0].path);
	};

	// Enabled for debugging
	onMount(() => {
		changeVideo(
			videoHandler.getRealPath("src/assets/videos/examples/onion.mp4")
		);
	});
</script>

<input type="file" on:change={onChange} />
