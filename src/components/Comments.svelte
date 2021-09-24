<script>
	import { VIDEO_DATA } from "../stores";
	import { saveData } from "./video-handler";

	const submitComment = (event) => {
		const data = new FormData(event.target);
		const comment = data.get("comment");

		const currentTime = $VIDEO_DATA.video.currentTime;

		$VIDEO_DATA.comments = [
			...$VIDEO_DATA.comments,
			{ message: comment, timestamp: currentTime },
		].sort((a, b) => a.timestamp - b.timestamp);

		saveData();
	};
</script>

<div class="comments">
	<h2>Comment Section</h2>

	<form on:submit|preventDefault={submitComment}>
		<textarea name="comment" />
		<br />
		<button type="submit">Add comment</button>
	</form>

	{#each $VIDEO_DATA.comments as comment}
		<li>{comment.message} <span>{comment.timestamp}</span></li>
	{/each}
</div>
