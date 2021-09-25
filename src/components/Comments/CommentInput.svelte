<script>
	import { VIDEO_DATA } from "../../stores";
	import { saveData } from "../../modules/video-handler";

	import Quil, { content } from "../external/QuilSvelte.svelte";
	import dayjs from "dayjs";

	const submitComment = () => {
		const comment = $content;

		const videostamp = $VIDEO_DATA.video.currentTime;

		$VIDEO_DATA.comments = [...$VIDEO_DATA.comments, { message: comment, videostamp, timestamp: dayjs() }].sort((a, b) => (dayjs(b.timestamp).isAfter(a.timestamp) ? 1 : -1));
		console.log($VIDEO_DATA.comments);

		saveData();
	};
</script>

<div class="comment-input">
	<div>
		<div class="editor">
			<Quil />
		</div>
		<div class="call-to-action">
			<div>
				<button on:click={submitComment} class="bttn bttn-primary submit">Add comment</button>
			</div>
		</div>
	</div>
</div>

<style>
	.comment-input {
		min-height: 300px;
		padding: 2rem;
		display: grid;
		place-items: center;
	}

	.comment-input > div {
		border-radius: 6px;
		max-width: 600px;
		width: 100%;
		overflow: hidden;
		background-color: var(--color-background-darker);
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.editor {
		flex: 1 0;
	}

	.call-to-action {
		display: flex;
		padding: 1rem;
		place-items: center;
	}

	.call-to-action > div {
		margin-left: auto;
	}
</style>
