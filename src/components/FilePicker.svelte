<script>
	import { VIDEO_DATA } from "../stores.js";
	import * as videoHandler from "./video-handler";

	const changeVideo = (event) => {
		$VIDEO_DATA.videoPath = event.target?.files[0].path;

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
</script>

<input type="file" on:change={changeVideo} />
