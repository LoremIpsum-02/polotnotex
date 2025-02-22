import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WC_API_URL}/wc/v3/products`, {
        headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return NextResponse.json(data);
}