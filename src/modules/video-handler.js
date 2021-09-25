import { get } from "svelte/store"
import { VIDEO_DATA } from "../stores"

const remote = require("electron").remote;
const path = remote.require("path");
const fs = remote.require("fs");

export const getName = (videoPath) => {
	return path.parse(videoPath).name;
}

export const getConfig = (videoPath) => {
	const configFile =
		getName(videoPath) + ".json";

	return path.join(
		path.dirname(videoPath),
		configFile)
}

export const getRealPath = (_path) => {
	return path.resolve(remote.app.getAppPath(), _path)
}

export const readConfig = (configPath) => {
	if (fs.existsSync(configPath)) {
		return JSON.parse(fs.readFileSync(configPath, "utf-8").toString());
	}
	// Return no comments
	return []
}

export const saveData = () => {
	const data = JSON.stringify(get(VIDEO_DATA).comments);
	fs.writeFileSync(get(VIDEO_DATA).configPath, data, (err) => {
		if (err) {
			console.log("unlucky can't write to file");
			return;
		}

		console.log("yoo saved");
	});
};