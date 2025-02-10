import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(
            `https://polotnotex.beget.tech/wp-json/wc/v3/products?consumer_key=${process.env.NEXT_PUBLIC_WC_CONSUMER_KEY}&consumer_secret=${process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET}`
        );

        if (!response.ok) {
            throw new Error(`WooCommerce API Error: ${response.statusText}`);
        }

        const data = await response.json();

        return NextResponse.json(data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET",
            },
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
