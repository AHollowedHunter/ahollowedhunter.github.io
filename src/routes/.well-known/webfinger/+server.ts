import { json } from "@sveltejs/kit";
import data from "./webfinger.json";

export function GET() {
	return json({ content: data });
}

// For static generation
export const prerender = true;
