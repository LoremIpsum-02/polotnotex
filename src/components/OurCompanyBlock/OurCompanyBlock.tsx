import styles from "./OurCompanyBlock.module.css";

export default function OurCompanyBlock() {
	return (
		<>
			<div className={styles.ourCompanyBlock}>
				<div className={styles.container}>
					<h2 className={styles.block__title}>
						что вы получаете в нашей компании
					</h2>

					<p className={styles.subtitle}>
						Системный подход и постоянное наличие ткани на складе а
						также цветах и качестве, как идет по прайсу от самой
						первой покупки. Нам не трудно фиксировать предпочтения
						каждого покупателя и обеспечивать своевременное
						пополнение тканями склад для оптовых продаж.
					</p>

					<div className={styles.grid__container}>
						<div
							className={[styles.grid__card, styles.card1].join(
								" "
							)}
						>
							<div className={styles.text__wrapper}>
								<div className={styles.gridItem__title}>
									ПРОДАЖА ТКАНИ ОПТОМ
								</div>

								<div className={styles.gridItem__text}>
									Сужение круга выбора поставщиков
								</div>
							</div>
						</div>

						<div
							className={[styles.grid__card, styles.card2].join(
								" "
							)}
						>
							<div className={styles.text__wrapper}>
								<div className={styles.gridItem__title}>
									ВАРИАТИВНОСТЬ
								</div>

								<div className={styles.gridItem__text}>
									Альтернативные решения и варианты
								</div>
							</div>
						</div>

						<div
							className={[styles.grid__card, styles.card3].join(
								" "
							)}
						>
							<div className={styles.text__wrapper}>
								<div className={styles.gridItem__title}>
									ВНИМАНИЕ
								</div>

								<div className={styles.gridItem__text}>
									Акцент на постоянстве качества ткани и цвета
								</div>
							</div>
						</div>

						<div className={[styles.grid__card, styles.card4].join(" ")}>
							<div className={styles.text__wrapper}>
								<div className={styles.gridItem__title}>
									ЧЕТКОСТЬ
								</div>

								<div className={styles.gridItem__text}>
									Требуемые параметры и диапазон цен
								</div>
							</div>
						</div>

						<div className={[styles.grid__card, styles.card5].join(" ")}>
							<div className={styles.text__wrapper}>
								<div className={styles.gridItem__title}>
									ГАРАНТИИ
								</div>

								<div className={styles.gridItem__text}>
									Что включают в себя гарантии при покупке
								</div>
							</div>
						</div>

						<div className={[styles.grid__card, styles.card6].join(" ")}>
							<div className={styles.text__wrapper}>
								<div className={styles.gridItem__title}>
									СЕРВИС
								</div>

								<div className={styles.gridItem__text}>
									Перечень услуг от поставщика
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
