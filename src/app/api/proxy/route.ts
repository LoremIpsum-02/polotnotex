export async function POST(req: Request) {
    const body = await req.json();

    const response = await fetch("http://polotnotex.beget.tech/wp-json/custom-api/v1/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: response.status });
}
