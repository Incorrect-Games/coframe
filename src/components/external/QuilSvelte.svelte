<script context="module">
	import { writable } from "svelte/store";
	export let content = writable({ html: "", text: "" });
</script>

<script>
	import { quill } from "svelte-quill";

	let options = {
		placeholder: "Write something from outside...",
		modules: {
			toolbar: ["bold", "italic", "underline", "strike"],
		},
	};
</script>

<svelte:head>
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />

	<style>
		.ql-container {
			height: calc(100% - 44px);
			font: var(--font);
			font-size: 1rem;
		}

		.ql-container.ql-snow,
		.ql-toolbar.ql-snow {
			border: none;
		}

		.ql-snow .ql-fill,
		.ql-snow .ql-stroke {
			color: var(--color-text-primary);
		}

		.ql-snow .ql-fill {
			fill: currentColor;
		}

		.ql-snow .ql-stroke {
			stroke: currentColor;
		}

		.ql-snow .ql-active .ql-fill {
			fill: currentColor !important;
		}

		.ql-snow .ql-active .ql-stroke {
			stroke: currentColor !important;
		}

		.ql-snow .ql-active .ql-fill,
		.ql-snow .ql-active .ql-stroke {
			color: var(--color-primary);
		}

		.ql-snow.ql-toolbar button,
		.ql-snow .ql-toolbar button {
			margin: 0 2px;

			text-align: center;
		}

		.ql-snow.ql-toolbar button.ql-active,
		.ql-snow .ql-toolbar button.ql-active {
			background-color: #232124;
			border-radius: 6px;
		}

		.ql-editor.ql-blank::before {
			opacity: 0.4;
			color: var(--color-text-secondary);
		}
	</style>
</svelte:head>

<div class="editor" use:quill={options} on:text-change={(e) => ($content = e.detail)} />
