import styles from "./SpoilerItem.module.css";

import Image from "next/image";
import spoiler__icon from "@/assets/media/FAQ-section/spoiler-icon.png";

interface Spoiler {
	id: any;
	title: string;
	text: string;
}

interface SpoilerProps {
	spoiler: Spoiler;
	activeSpoiler: string | number | null;
	setActiveSpoiler: (id: string | null) => void;
}

export default function SpoilerItem({
	spoiler,
	activeSpoiler,
	setActiveSpoiler,
}: SpoilerProps) {
	const isOpen = activeSpoiler == spoiler.id;

	return (
		<>
			<div className={styles.spoilerItem} onClick={() => setActiveSpoiler(isOpen ? null : spoiler.id)}>
				<div className={isOpen ? [styles.spoiler__title, styles.active].join(' ') : styles.spoiler__title}>
					{spoiler.title}

					<Image
						src={spoiler__icon}
						alt=""
						className={styles.spoiler__icon}
					/>
				</div>

				{isOpen && (
					<div className={styles.spoiler__text}>{spoiler.text}</div>
				)}
			</div>
		</>
	);
}
