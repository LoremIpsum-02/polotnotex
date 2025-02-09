import styles from "./OpportunitiesInfo.module.css";

export default function OpportunitiesInfo() {
	const opportunitiesList = [
		{
			title: `Ткань`,
			text: `Постоянные цвета в ток. Контроль за трендовыми цветами. Полотно разной ширины. Полное обеспечение производства.`,
		},
		{
			title: `Поставки`,
			text: `Работа идет напрямую с производителями ткани в Китае, Узбекистане. Отлаженная логистика, без таможенных проблем и задержек. Поставки контейнерами. Возможна работа эксклюзивных контейнерных поставок.`,
		},
		{
			title: `Склад`,
			text: `Склад работает по принципу постоянного наличия ассортимента. Возможны ограничения в объеме.`,
		},
	];
	return (
		<>
			<div className={styles.opportunitiesInfo}>
				<h2 className={styles.title}>ВОЗМОЖНОСТИ “ТЕКСТИЛЬ ПОЛОТНО”</h2>

				<div className={styles.list__wrapper}>
					{opportunitiesList.map((opportunity) => (
						<div className={styles.list__item} key={opportunity.title}>
							<h3 className={styles.opportunity__title}>
								{opportunity.title}
							</h3>

							<div className={styles.opportunity__text}>
								{opportunity.text}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
