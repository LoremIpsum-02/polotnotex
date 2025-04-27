import { useContact } from "@/context/ContactsContext";

export function usePhoneNumber(key: string) {
	const { phoneNumbers } = useContact();
	
	return phoneNumbers?.find(
		(item) => item.key.toLowerCase() === key.toLowerCase()
	);
}
