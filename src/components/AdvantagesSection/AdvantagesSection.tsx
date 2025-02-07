import styles from "./AdvantagesSection.module.css";

export default function AdvantagesSection() {
	const advantagesList = [
		{
			title: "ПРЯМЫЕ ПОСТАВКИ",
			description: `
                Прямые поставки ткани 
                на склад от производителя.
                
                Качество и цвета ткани постоянны без изменений.
            `,
		},
		{
			title: "РЕАГИРУЕМ НА СПРОС",
			description: `
                Увеличение ассортимента плавное от персональных запросов покупателей.

                Собственные склады ткани. 
            `,
		},
		{
			title: "МИНИМАЛЬНАЯ НАЦЕНКА",
			description: `
                Только транспортные и складские расходы, плюс минимальная наценка.
                
                Цены как есть. Гарантия!
            `,
		},
		{
			title: "ДОСТАВКА НА ЗАКАЗ",
			description: `
                Мы не транспортная служба, но лично делаем закупки.

                На месте соберем для вас образцы ткани по запросу.
            `,
		},
	];

	return (
		<>
			<div className={styles.advantagesSection}>
				<div className={styles.advantages__container}>
					<h2 className={styles.advantages__title}>
						преимущества в сотрудничестве с прямым поставщиком ткани
					</h2>

					<div className={styles.advantages__wrapper}>
						{advantagesList.map((item) => (
							<div
								className={styles.advantage__card}
								key={item.title}
							>
								<div className={styles.image__container}>
									<div className={styles.title}>
										{item.title}
									</div>
								</div>

								<div className={styles.card__text}>
									{item.description}
								</div>
							</div>
						))}
					</div>

					<div className={styles.subtext}>
						Работая с нашим предприятием по закупке ткани, вы
						приобретаете не только низкие цены, но и гарантированное
						постоянство в ассортименте по цвету, составу и качеству
						ткани. Отсутствие искусственного наращивания
						ассортимента.
					</div>
				</div>
			</div>
		</>
	);
}
