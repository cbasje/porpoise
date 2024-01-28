import * as sessions from "$db/session-repository";
import type { SeriesId } from "$db/types";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
	try {
		const query = new URL(request.url).searchParams;
		const seriesIds = query.get("series")?.split(",") as SeriesId[];

		const data = await sessions.getNextRaces(seriesIds);

		return new Response(
			JSON.stringify({
				success: true,
				data,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error(error);
		return new Response(JSON.stringify({ success: false, reason: error }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};