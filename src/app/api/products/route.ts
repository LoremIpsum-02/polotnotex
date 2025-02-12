import { NextResponse } from "next/server";

export async function GET() {
    const response = await fetch("http://polotnotex.beget.tech/wp-json/wc/v3/products", {
        headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return NextResponse.json(data);
}