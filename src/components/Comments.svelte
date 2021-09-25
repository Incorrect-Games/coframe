<script>
	import { VIDEO_DATA } from "../stores";
	import { saveData } from "../modules/video-handler";
	import { formatDisplayTime } from "../modules/util";

	import dayjs from "dayjs";
	import relativeTime from "dayjs/plugin/relativeTime";
	import duration from "dayjs/plugin/duration";
	dayjs.extend(duration);
	dayjs.extend(relativeTime);

	let message;

	const submitComment = () => {
		const comment = message;

		const videostamp = $VIDEO_DATA.video.currentTime;

		$VIDEO_DATA.comments = [...$VIDEO_DATA.comments, { message: comment, videostamp, timestamp: dayjs() }].sort((a, b) => (dayjs(b.timestamp).isAfter(a.timestamp) ? 1 : -1));

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
					<span>{dayjs().to(comment.timestamp)}</span>
				</div>
				<div class="videostamp">
					<button class="text" on:click={() => ($VIDEO_DATA.video.currentTime = comment.videostamp)}>
						<span class="material-icons-outlined"> timer </span>
						{dayjs.duration(comment.videostamp * 1000).format("m:ss")}
					</button>
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
		display: flex;
		flex-direction: column;
		height: 100%;
		border-left: 2px solid var(--color-background-darker);
	}

	.comment-input {
		margin-bottom: 0;
		padding: 35px 0;
		height: auto;
		background-color: var(--color-background-primary);
		width: 100%;
	}

	.comments {
		height: calc(100% - 55px - 30px);
		overflow-y: scroll;
	}

	.comments .comment {
		list-style: none;
		margin-bottom: 30px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.5);
	}

	.comments .comment:last-of-type {
		margin-bottom: 0;
	}

	.comment .message {
		margin-top: 10px;
		margin-bottom: 30px;
		padding-right: 15px;
	}

	.comment .author {
		font-weight: 600;
	}

	.comment .author span {
		font-size: 14px;
		font-weight: 400;
		padding-left: 10px;
		opacity: 0.4;
	}

	.comment .videostamp button {
		color: var(--color-primary);
		font-weight: 600;
		margin-top: 5px;
		display: flex;
		font-size: 14px;
	}

	.comment .videostamp button span {
		font-size: 16px;
		padding-right: 5px;
	}
</style>
