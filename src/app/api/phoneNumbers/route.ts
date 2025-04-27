// app/api/phoneNumbers/route.ts

import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_WC_API_URL}/custom-api/v1/phone-numbers`
		);
		const data = await response.json();
		return new Response(JSON.stringify(data), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Error fetching", error);
		return new Response(JSON.stringify({ error: "Failed to fetch" }), {
			status: 500,
		});
	}
}
