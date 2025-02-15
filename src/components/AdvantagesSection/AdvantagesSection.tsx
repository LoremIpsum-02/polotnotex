import styles from "./AdvantagesSection.module.css";

import img1 from '@/assets/media/advantages/img1.jpg'
import img2 from '@/assets/media/advantages/img2.jpg'
import img3 from '@/assets/media/advantages/img3.jpg'
import img4 from '@/assets/media/advantages/img4.jpg'
import Image from "next/image";

export default function AdvantagesSection() {
	const advantagesList = [
		{
			title: "ПРЯМЫЕ ПОСТАВКИ",
			description: `
                Прямые поставки ткани 
                на склад от производителя.
                
                Качество и цвета ткани постоянны без изменений.
            `,
            bg: `../../assets/media/advantages/img1.jpg`,
            image: img1,
		},
		{
			title: "РЕАГИРУЕМ НА СПРОС",
			description: `
                Увеличение ассортимента плавное от персональных запросов покупателей.

                Собственные склады ткани. 
            `,
            bg: `../../assets/media/advantages/img2.jpg`,
            image: img2,
		},
		{
			title: "МИНИМАЛЬНАЯ НАЦЕНКА",
			description: `
                Только транспортные и складские расходы, плюс минимальная наценка.
                
                Цены как есть. Гарантия!
            `,
            bg: `../../assets/media/advantages/img3.jpg`,
            image: img3,
		},
		{
			title: "ДОСТАВКА НА ЗАКАЗ",
			description: `
                Мы не транспортная служба, но лично делаем закупки.

                На месте соберем для вас образцы ткани по запросу.
            `,
            bg: `../../assets/media/advantages/img4.jpg`,
            image: img4,
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
                                    <Image src={item.image} alt="" className={styles.image} />
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
