export async function sendOrder(orderData: any) {
	try {
		const response = await fetch("/api/proxy", {
            method: "POST",
            body: JSON.stringify(orderData),
        });

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Failed to place order");
		}

		return { success: true, orderId: data.order_id };
	} catch (error: any) {
		console.error("Order Error:", error);
		return { success: false, message: error.message };
	}
}
