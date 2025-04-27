// lib/contacts-apt.ts

export type PhoneNumberType = string;

export interface PhoneNumber {
	key: string;
	display: string;
	number: string;
}

export type SocialLinkType = string;

export interface SocialLink {
	name: string;
	url: string;
}

let phoneNumbersCache: PhoneNumber[] | null = null;
let socialLinksCache: SocialLink[] | null = null;

export async function fetchPhoneNumbers(): Promise<PhoneNumber[]> {
	if (phoneNumbersCache?.length) {
		return phoneNumbersCache;
	}

	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_WC_API_URL}/custom-api/v1/phone-numbers`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch phone numbers: ${res.status} ${res.statusText}`
			);
		}

		const data = await res.json();

		phoneNumbersCache = Array.isArray(data) ? data : [];

		return phoneNumbersCache;
	} catch (error) {
		console.error("❌ Error fetching phone numbers:", error);
		return [];
	}
}

export async function fetchSocialLinks(): Promise<SocialLink[]> {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_WC_API_URL}/custom-api/v1/social-links`
		);

		if (!res.ok) {
			throw new Error(
				`Failed to fetch social links: ${res.status} ${res.statusText}`
			);
		}

		const data = await res.json();

		return Array.isArray(data) ? data : [];
	} catch (error) {
		console.error("Error fetching social links:", error);
		return [];
	}
}

// Combined fetch for both endpoints
export async function fetchContactInfo() {
	try {
		const [phoneNumbers, socialLinks] = await Promise.all([
			fetchPhoneNumbers(),
			fetchSocialLinks(),
		]);

		return {
			phoneNumbers,
			socialLinks,
		};
	} catch (error) {
		console.error("Error fetching contact info : ", error);
		return { phoneNumbers: [], socialLinks: [] };
	}
}

// Phone number utilities
export async function getPhoneNumber(
	numberKey: string
): Promise<string | PhoneNumber | undefined> {
	const numbers: PhoneNumber[] = await fetchPhoneNumbers();
	if (!numbers) return "";
	return (
		numbers.find(
			(item) => item.key.toLowerCase() == numberKey.toLowerCase()
		) || ""
	);
}

// Social link utilities
export function getSocialLink(
	links: SocialLink[],
	name: SocialLinkType
): SocialLink | undefined {
	return links.find((link) => link.name.toLowerCase() === name.toLowerCase());
}
