export async function POST(req: Request) {
    const body = await req.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_WC_API_URL}/custom-api/v1/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    // return new Response(JSON.stringify(data), { status: response.status });
    return new Response(JSON.stringify(body));
}
