<script>
	import { VIDEO_DATA } from "../stores";
	import { saveData } from "./video-handler";

	let message;

	const submitComment = (event) => {
		const data = new FormData(event.target);
		const comment = message;

		const currentTime = $VIDEO_DATA.video.currentTime;

		$VIDEO_DATA.comments = [
			...$VIDEO_DATA.comments,
			{ message: comment, timestamp: currentTime },
		].sort((a, b) => a.timestamp - b.timestamp);

		message = "";

		saveData();
	};
</script>

<div class="comment-section">
	<div class="comments">
		{#each $VIDEO_DATA.comments as comment}
			<li class="comment">
				<div class="author">
					{comment.author || "Anonymous"}
					<span>{comment.timestamp}</span>
				</div>
				<div class="message">{comment.message}</div>
			</li>
		{/each}
	</div>

	<form class="comment-input" on:submit|preventDefault={submitComment}>
		<textarea name="comment" bind:value={message} />
		<br />
		<button type="submit">Add comment</button>
	</form>
</div>

<style>
	.comment-section {
		width: 450px;
		padding: 35px 2.5%;
		background-color: var(--color-background-darker);
		position: relative;
		height: 100%;
	}

	.comment-section .comment-input {
		position: absolute;
		bottom: 0;
		padding: 35px 0;
		height: auto;
	}

	.comment-section .comments {
		height: calc(100% - 55px - 30px);
		overflow-y: scroll;
	}

	.comment-section .comments .comment {
		list-style: none;
		padding: 15px;
		background-color: var(--color-background-lighter);
		margin-bottom: 30px;
	}

	.comment-section .comments .comment:last-of-type {
		margin-bottom: 0;
	}
</style>
