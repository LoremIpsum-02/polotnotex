import styles from "./Partnership.module.css";

import Image from "next/image";
import icon__wa from "@/assets/media/partnership-block/wa.png";
import icon__tg from "@/assets/media/partnership-block/tg.png";

export default function PartnershipBlock() {
	const pointsList = [
		"МАСШТАБЫ И СКОРОСТЬ ОТГРУЗОК ТКАНИ",
		"ПРЯМАМЯ ПОКУПКА ТКАНИ И БРОНИРОВАНИЕ",
		"ФОТО И ВИДЕО ОБЗОРЫ НА ПОСТАВЛЯЕМУЮ ТКАНЬ",
	];

	return (
		<>
			<div className={styles.partnershipBlock}>
				<div className={styles.container}>
					<h2>
						сотрУдничество с прямым поставщиком ткани от
						производителя
					</h2>

					<p className={styles.subtitle}>
						На принципы нашего подхода по продаже ткани обратили
						внимание много швейных цехов и фабрик России, в том
						числе и по Ивановской области. Создавая склад прямых
						поставок ткани, наши стандарты работают четко, в этом не
						трудно убедиться лично.
					</p>

					<div className={styles.wrapper}>
						<div className={styles.points__wrapper}>
							{pointsList.map((item) => (
								<div className={styles.pointItem} key={item}>
									{item}
								</div>
							))}
						</div>

						<div className={styles.btns__wrapper}>
							<a href="#" className={styles.socialBtn}>
								WhatsApp-chat
								<Image
									src={icon__wa}
									alt=""
									className={styles.btn__icon}
								/>
							</a>

							<a href="#" className={styles.socialBtn}>
								Telegram-kanal
								<Image
									src={icon__tg}
									alt=""
									className={styles.btn__icon}
								/>
							</a>
						</div>
					</div>
				</div>

                <div className={styles.bg}></div>
			</div>
		</>
	);
}
