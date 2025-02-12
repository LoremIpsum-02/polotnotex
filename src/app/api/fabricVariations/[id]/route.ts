import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string | number }> }
) {
	const id = (await params).id; // Correct way to access params

	if (!id) {
		return NextResponse.json(
			{ error: "Product ID is required" },
			{ status: 400 }
		);
	}

	try {
		const response = await fetch(
			`http://polotnotex.beget.tech/wp-json/custom-api/v1/variations/${id}`
		);

		if (!response.ok) {
			return NextResponse.json(
				{ error: "Failed to fetch variations" },
				{ status: response.status }
			);
		}

		const data = await response.json();

		// Decode all keys
		const decodedData = data.map((variation: any) => {
			const decodedAttributes: Record<string, any> = {};

			Object.keys(variation.attributes).forEach((key) => {
				const decodedKey = decodeURIComponent(key);
				decodedAttributes[decodedKey] = variation.attributes[key];
			});

			return { ...variation, attributes: decodedAttributes };
		});

		return NextResponse.json(decodedData);
	} catch (error) {
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
