export default async function sendForm(formData: any) {
    const form = {
        name: formData.name || '-',
        phoneNumber: formData.phoneNumber || '-',
        email: formData.email || '-',
        comment: formData.comment || '-',
        price_production: formData.price_production ? 'Нужен' : "НЕ нужен",
        price_availability: formData.price_availability ? 'Нужен' : "НЕ нужен",
    }

    const response = await fetch("/api/proxy", {
    	method: "POST",
    	headers: {
    		"Content-Type": "application/json",
    	},
    	body: JSON.stringify({
    		billing: {
    			first_name: formData.name,
    			phone: formData.phoneNumber,
    			email: formData.email, // WooCommerce requires an email
    		},
    		meta_data: [
    			{
    				key: "comment",
    				value: form.comment,
    			},
    		],
    		line_items: [], // products if needed
    	}),
    });

    const data = await response.json()
}