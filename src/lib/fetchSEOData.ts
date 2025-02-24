export async function fetchSEOData(slug: string) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_WC_API_URL}/wp/v2/pages?slug=${slug}`
		);
		if (!res.ok) throw new Error("Failed to fetch SEO data");

		const pages = await res.json();

		// ✅ Check if the page exists before accessing page[0]
		if (!pages.length) {
			console.warn(`No SEO data found for slug: ${slug}`);
			return {
				title: "Default Title",
				description: "Default description",
				schema: {},
			};
		}

		return {
			title: pages[0].yoast_head_json?.title || "Default Title",
			description:
				pages[0].yoast_head_json?.description || "Default description",
			schema: pages[0].yoast_head_json?.schema || {},
			data: pages[0],
			url: pages[0]?.link,
		};
	} catch (error) {
		console.error("Error fetching SEO data:", error);
		return {
			title: "Default Title",
			description: "Default description",
			schema: {},
		};
	}
}
