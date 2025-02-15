"use client"

import styles from "./FabricDescription.module.css";

import SiteBtn from "../UI/button/SiteBtn";
import { fabricDescriptions } from "@/actions";
import { useState } from "react";
import DescriptionItem from "./DescriptionItem/DescriptionItem";

export default function FabricDescription() {
	const fabricsList = fabricDescriptions();

	return (
		<>
			<div className={styles.fabricDescriptions}>
				{fabricsList.map((fabric) => (
					<DescriptionItem fabric={fabric} key={fabric.fabricName} />
				))}
			</div>
		</>
	);
}
