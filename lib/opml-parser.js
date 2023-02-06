import fs from "fs";
import path from "path";
import { opmlToJSON } from "opml-to-json";

export default async function parseOpml() {
	const opmlDirectory = path.join(process.cwd(), "opml");
	const filePath = path.join(opmlDirectory, "podcasts.opml");
	const opmlContent = fs.readFileSync(filePath, "utf-8");
	const json = await opmlToJSON(opmlContent);
	console.log(json);
	return json;
}
