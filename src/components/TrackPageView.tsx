"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function TrackPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (typeof window.ym !== "function") return;

		const url =
			pathname +
			(searchParams.toString() ? `?${searchParams.toString()}` : "");
		const counterId = Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID);

		window.ym(counterId, "hit", url);
	}, [pathname, searchParams]);

	return null;
}
