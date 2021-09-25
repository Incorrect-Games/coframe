<script>
	import { VIDEO_DATA } from "../stores";

	import dayjs from "dayjs";
	import relativeTime from "dayjs/plugin/relativeTime";
	import duration from "dayjs/plugin/duration";
	dayjs.extend(duration);
	dayjs.extend(relativeTime);
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
						<!--span class="material-icons-outlined"> timer </span>-->
						{dayjs.duration(comment.videostamp * 1000).format("m:ss")}
					</button>
				</div>
				<div class="message">{@html comment.message.html}</div>
			</li>
		{/each}
	</div>
</div>

<style>
	.comment-section {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 500px;
		padding: 35px 20px;
		height: 100%;
		border-left: 2px solid var(--color-background-darker);
	}

	.comments {
		height: 100%;
		overflow-y: scroll;
	}

	.comments .comment {
		list-style: none;
		margin-bottom: 30px;
		border-bottom: 2px solid var(--color-background-darker);
	}

	.comments .comment:last-of-type {
		margin-bottom: 0;
	}

	.comment .message {
		margin-top: 10px;
		margin-bottom: 30px;
		padding-right: 15px;
		white-space: pre-line;
		font-size: 0.9rem;
	}

	.comment .author {
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.comment .author span {
		font-size: 0.9rem;
		font-weight: 400;
		padding-left: 10px;
		opacity: 0.4;
		color: var(--color-text-secondary);
	}

	.comment .videostamp button {
		color: var(--color-primary);
		font-weight: 600;
		margin-top: 5px;
		display: flex;
		font-size: 0.9rem;
	}

	.comment .videostamp button span {
		font-size: 16px;
		padding-right: 5px;
	}
</style>
