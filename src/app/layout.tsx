import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";
import { fetchSEOData } from "@/lib/fetchSEOData";
import { Suspense } from "react";
import YandexMetrika from "@/components/YandexMetrika/YandexMetrika";

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

					<meta name="yandex-verification" content="825d8321fb9234bd" />
				</head>
				<body>
					{/* <!-- Yandex.Metrika counter --> */}
					<Script strategy="afterInteractive">
						{
							`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							m[i].l=1*new Date();
							for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
							k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
							(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

							ym(100763687, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
							});`
						}
					</Script>

					<noscript>
						<div>
							<img
								src="https://mc.yandex.ru/watch/100763687"
								style={{
									position: "absolute",
									left: "-9999px",
								}}
								alt=""
							/>
						</div>
					</noscript>
					{/* <!-- /Yandex.Metrika counter --> */}
					
					<Suspense fallback={<></>}>
						<YandexMetrika />
					</Suspense>
					<div className="mainContainer">
						<main className="main">{children}</main>
					</div>
				</body>
			</html>
		</>
	);
}
