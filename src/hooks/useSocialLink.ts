import { useContact } from "@/context/ContactsContext";

export function useSocialLink(name: string) {
	const { socialLinks } = useContact();
	return socialLinks.find(
		(link) => link.name.toLowerCase() === name.toLowerCase()
	);
}
