import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";
import { fetchSEOData } from "@/lib/fetchSEOData";
import { Suspense } from "react";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";
import { fetchContactInfo } from "@/lib/contacts-api";
import { ContactProvider } from "@/context/ContactsContext";

export async function generateMetadata() {
	const metadata = await fetchSEOData("home");
	return metadata;
}

const nk133 = localFont({
	src: "../assets/fonts/NK133/nk133.otf",
	display: "swap",
});

const involve = localFont({
	src: [
		{
			path: "../assets/fonts/Involve/Involve-Regular.ttf",
		},
		{
			path: "../assets/fonts/Involve/Involve-Medium.ttf",
		},
		{
			path: "../assets/fonts/Involve/Involve-SemiBold.ttf",
		},
		{
			path: "../assets/fonts/Involve/Involve-Bold.ttf",
		},
	],
});

const analyticsEnabled = !!(process.env.NODE_ENV === "production");

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const contactInfo = await fetchContactInfo();

	return (
		<>
			<html
				lang="en"
				className={[nk133.className, involve.className].join(" ")}
			>
				<head>
					{/* Google Analytics */}
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`}
					/>
					<Script
						id="google-analytics"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', ${process.env.G_TAG});
                            `,
						}}
					/>

					<meta
						name="yandex-verification"
						content="825d8321fb9234bd"
					/>
				</head>
				<body>
					<div className="mainContainer">
						<main className="main">
							<ContactProvider value={contactInfo}>
								{children}
							</ContactProvider>
						</main>
					</div>
					<YandexMetrika />
				</body>
			</html>
		</>
	);
}
