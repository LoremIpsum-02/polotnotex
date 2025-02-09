import styles from "./DeliveryInfo.module.css";

import Image from "next/image";
import pic from "@/assets/media/delivery-info/image.png";

export default function DeliveryInfo() {
	const scheduleList = [
		"пн - чт: с 8:00 до 18:00",
		"пт: с 8:00 до 17:00",
		"сб: с 8:00 до 14:00",
	];
	return (
		<>
			<div className={styles.deliveryInfo}>
				<div className={styles.container}>
					<div className={styles.image__wrapper}>
						<Image
							src={pic}
							alt=""
							className={styles.delivery__image}
						/>
					</div>

					<div className={styles.info__container}>
						<h2 className={styles.title}>ИНФОРМАЦИЯ О ДОСТАВКЕ</h2>

						<div className={styles.inner}>
							<h2 className={styles.title}>Доставка ткани</h2>

							<p className={styles.text}>
								“ТК Деловые линии” и “ТК Байкал сервис”
							</p>
						</div>

						<div className={styles.schedule__wrapper}>
							<h2 className={styles.title}>
								Самовывоз ткани со склада
							</h2>

							<ul className={styles.schedule}>
								{scheduleList.map((i) => (
									<li
										className={styles.schedule__item}
										key={i}
									>
										<p className={styles.text}>{i}</p>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.address}>
							Адрес склада: г. Иваново, ул. Ленина, д.35/д
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
