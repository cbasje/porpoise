import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
    const manifest = {
        name: "Porpoise Motorsport Calendar",
        short_name: "Porpoise",
        // "description": "De Civitas Studiosorum Reformatorum is een bruisende, actieve, christelijke studentenvereniging in Delft, rijk aan tradities die zijn ontstaan in haar 61-jarig bestaan. Het is een breed gezelschap van zo'n 270 leden met een zeer gevarieerde (kerkelijke) achtergrond, maar met een duidelijke eenheid door het christelijk geloof. C.S.R. is de plek waar al tientallen jaren studenten goede vrienden van elkaar worden, op intellectueel en geestelijk gebied groeien en goede studentengrappen uithalen.",
        author: "Sebastiaan Benjamins",
        orientation: "portrait-primary",
        display: "standalone",
        lang: "en-GB",
        id: "/",
        start_url: "/",
        scope: "/",

        // icons: [
        //     {
        //         src: "/images/beeldmerk-maskable.png",
        //         sizes: "1024x1024",
        //         type: "image/png",
        //         purpose: "maskable",
        //     },
        //     {
        //         src: "/images/beeldmerk-192x192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //         purpose: "any",
        //     },
        //     {
        //         src: "/images/beeldmerk-512x512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //         purpose: "any",
        //     },
        //     {
        //         src: "/images/beeldmerk-1024x1024.png",
        //         sizes: "1024x1024",
        //         type: "image/png",
        //         purpose: "any",
        //     },
        // ],
        // background_color: "#152A48",
        // theme_color: "#152A48",
        // shortcuts: [
        //     {
        //         name: "Forum - Recent gewijzigd",
        //         short_name: "Forum",
        //         url: "/forum/recent",
        //         icons: [
        //             {
        //                 src: "/images/icon-forum.png",
        //                 sizes: "192x192",
        //                 type: "image/png",
        //             },
        //         ],
        //     },
        //     {
        //         name: "Agenda",
        //         short_name: "Agenda",
        //         url: "/agenda",
        //         icons: [
        //             {
        //                 src: "/images/icon-agenda.png",
        //                 sizes: "192x192",
        //                 type: "image/png",
        //             },
        //         ],
        //     },
        //     {
        //         name: "Ledenlijst",
        //         short_name: "Leden",
        //         url: "/ledenlijst",
        //         icons: [
        //             {
        //                 src: "/images/icon-leden.png",
        //                 sizes: "192x192",
        //                 type: "image/png",
        //             },
        //         ],
        //     },
        // ],
    };

    try {
        return new Response(JSON.stringify(manifest), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(null, {
            status: 500,
        });
    }
};