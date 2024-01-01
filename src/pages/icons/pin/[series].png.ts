import type { APIRoute } from "astro";
import sharp from "sharp";
import { getSeriesColor } from "$lib/utils/series";
import type { SeriesId } from "$db/schema";

const svgSingle = (
	color?: string
) => `<svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z" fill="${
	color ?? "#000"
}"/>
</svg>`;
const svgMultiple = (colors?: string[]) =>
	`<svg width="64" height="64" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.22548 5.22548C10.2877 3.1633 13.0836 2.00331 16 2C18.9164 2.00331 21.7123 3.1633 23.7745 5.22548C25.8367 7.28766 26.9967 10.0836 27 13C27 13.6792 26.9479 14.3465 26.8511 15H19.4641C19.6816 14.6233 19.8374 14.2116 19.9231 13.7804C20.0775 13.0044 19.9983 12.2002 19.6955 11.4693C19.3928 10.7384 18.8801 10.1136 18.2223 9.67412C17.5645 9.2346 16.7911 9 16 9C14.9391 9 13.9217 9.42143 13.1716 10.1716C12.4214 10.9217 12 11.9391 12 13C12 13.7037 12.1856 14.3933 12.5359 15H5.14887C5.05207 14.3465 5 13.6792 5 13C5.00331 10.0836 6.1633 7.28766 8.22548 5.22548Z" fill="${
		colors?.at(0) ?? "#000"
	}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.8512 15H19.4642C19.2903 15.3011 19.077 15.5799 18.8285 15.8284C18.2691 16.3878 17.5563 16.7688 16.7804 16.9231C16.0045 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1137 15.8801 12.6742 15.2223C12.6256 15.1496 12.5795 15.0754 12.536 15H5.14893C6.39345 23.403 15.0308 29.5427 15.4263 29.8188C15.5944 29.9365 15.7948 29.9997 16.0001 29.9997C16.2054 29.9997 16.4057 29.9365 16.5738 29.8188C16.9693 29.5427 25.6067 23.403 26.8512 15Z" fill="${
		colors?.at(1) ?? "#000"
	}"/>
</svg>`;

export const GET: APIRoute = async ({ params }) => {
	const seriesSet = new Set(params.series?.split("-"));
	const series = [...seriesSet];

	if (!series || !series.length)
		return new Response(undefined, {
			status: 404,
		});

	let svg: string;
	if (series && series.length === 1) {
		svg = svgSingle(getSeriesColor(series.at(0) as SeriesId));
	} else {
		svg = svgMultiple(series.map((s) => getSeriesColor(s as SeriesId)));
	}

	const png = sharp(Buffer.from(svg)).png();
	const response = await png.toBuffer();

	return new Response(response, {
		status: 200,
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "s-maxage=1, stale-while-revalidate=59",
		},
	});
};
