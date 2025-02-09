import styles from "./PaymentInfo.module.css";

export default function PaymentInfo() {
	const offersList = [
		"Прогрессивную систему скидок",
		"Возможность отсрочки платежа",
	];
	return (
		<>
			<div className={styles.container}>
				<h2 className={styles.title}>ИНФОРМАЦИЯ ПО ОПЛАТЕ</h2>

				<div className={styles.text}>
					Принимаем оплату от Юридических лиц, ИП, и физических лиц на
					р/с предприятия, или иными способами, не противоречащими
					законодательства РФ
				</div>

				<div className={styles.wrapper}>
					<h3 className={styles.wrapper__title}>
						Для постоянных клиентов можем предложить
					</h3>

					<ul className={styles.offers__list}>
						{offersList.map((item) => (
							<li className={styles.offer__item} key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
