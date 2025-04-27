// context/ContactsContext.tsx

"use client";

import { createContext, useContext } from "react";
import { PhoneNumber, SocialLink } from "@/lib/contacts-api";

type ContactContextType = {
	phoneNumbers: PhoneNumber[];
	socialLinks: SocialLink[];
};

const ContactContext = createContext<ContactContextType>({
	phoneNumbers: [],
	socialLinks: [],
});

export function ContactProvider({
	children,
	value,
}: {
	children: React.ReactNode;
	value: ContactContextType;
}) {
	return (
		<ContactContext.Provider value={value}>
			{children}
		</ContactContext.Provider>
	);
}

export function useContact() {
	return useContext(ContactContext);
}
