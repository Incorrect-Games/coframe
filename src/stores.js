import { writable } from "svelte/store"

export const VIDEO_DATA = writable({
	videoPath: "",
	configPath: "",
	video: null,
	comments: []
})