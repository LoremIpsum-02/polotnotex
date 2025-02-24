import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";
import { fetchSEOData } from "@/lib/fetchSEOData";

export async function generateMetadata(){
    const metadata = await fetchSEOData('home')
    return metadata
};

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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
				</head>
				<body>
					<div className="mainContainer">
						<main className="main">{children}</main>
					</div>
				</body>
			</html>
		</>
	);
}
