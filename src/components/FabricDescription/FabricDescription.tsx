import SiteBtn from "../UI/button/SiteBtn";
import styles from "./FabricDescription.module.css";

import { fabricDescriptions } from "@/actions";

export default function FabricDescription() {
	const fabricsList = fabricDescriptions();
	return (
		<>
			<div className={styles.fabricDescriptions}>
				{fabricsList.map((fabric) => (
					<div className={styles.fabricItem} key={fabric.fabricName}>
						<h2>{fabric.fabricName}</h2>

						<div className={styles.fabric__text}>
							{fabric.fabricDescription}
						</div>

						<div className={styles.btn__wrapper}><SiteBtn>Подробнее</SiteBtn></div>
					</div>
				))}
			</div>
		</>
	);
}
