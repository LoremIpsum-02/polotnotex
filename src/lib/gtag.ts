// Extend the Window type to include gtag and GA_TRACKING_ID
declare global {
	interface Window {
		gtag: (...args: any[]) => void;
		GA_TRACKING_ID?: string; // ✅ Declare GA_TRACKING_ID properly
	}
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_G_TAG || "";

// ✅ Store GA_TRACKING_ID in `window`
if (typeof window !== "undefined") {
	window.GA_TRACKING_ID = GA_TRACKING_ID;
}

// Only trigger events if GA is available
export const pageview = (url: string) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("config", GA_TRACKING_ID, {
			page_path: url,
		});
	} else {
		console.error("❌ GA not initialized!");
	}
};

export const event = ({
	action,
	category,
	label,
	value,
}: {
	action: string;
	category: string;
	label: string;
	value?: number;
}) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("event", action, {
			event_category: category,
			event_label: label,
			value,
		});
	} else {
		console.log("❌ GA not initialized");
	}
};
