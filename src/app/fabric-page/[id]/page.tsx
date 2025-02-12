"use client";

import styles from "./page.module.css";

import Image from "next/image";
import backIcon from "@/assets/media/fabric-page/back-arrow.png";
import FabricCard from "@/components/FabricCard/FabricCard";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function FabricPage() {
	const params = useParams();
	const fabric_id: any = params.id;
    const router = useRouter()

	return (
		<>
			<div className={styles.fabricPage}>
			    <header className={styles.header}>
    				<button className={styles.backBtn} onClick={() => router.back()}>
    					<Image src={backIcon} alt="" className={styles.backIcon} />
    					Вернуться назад
    				</button>
    			</header>
    
    			<main className={styles.fabricPage__main}>
    				<FabricCard fabric_id={fabric_id} />
    			</main>
			</div>
		</>
	);
}