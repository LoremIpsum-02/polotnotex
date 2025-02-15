"use client";

import styles from "./DescriptionItem.module.css";

import SiteBtn from "@/components/UI/button/SiteBtn";
import { useState } from "react";

interface FabricItem {
	fabricName: string;
	fabricDescription: string;
}

interface Props {
	fabric: FabricItem;
}

export default function DescriptionItem({ fabric }: Props) {
	const [showAllText, setShowAllText] = useState<boolean>(false);
	return (
		<>
			<div className={styles.fabricItem}>
				<h2>{fabric.fabricName}</h2>

				<div
					className={`${styles.fabric__text} ${
						showAllText ? styles.showAll : ""
					}`}
				>
					{fabric.fabricDescription}
				</div>

				<div className={styles.btn__wrapper}>
					<SiteBtn onClick={() => setShowAllText(!showAllText)}>
						{showAllText ? "Скрыть" : "Подробнее"}
					</SiteBtn>
				</div>
			</div>
		</>
	);
}
