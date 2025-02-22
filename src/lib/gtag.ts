// Extend the Window type to include gtag
declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

export const GA_TRACKING_ID = process.env.G_TAG;

// Only trigger events if GA is available
export const pageview = (url: string) => {
	if (typeof window !== "undefined" && window.gtag) {
		window.gtag("config", GA_TRACKING_ID, {
			page_path: url,
		});
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
	}
};
