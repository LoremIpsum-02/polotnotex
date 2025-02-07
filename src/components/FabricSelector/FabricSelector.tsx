import styles from "./FabricSelector.module.css";

import FormPolicyAgreement from "../UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteInput from "../UI/input/SiteInput";
import icon__arrow from "@/assets/media/fabric-selector/arrow.png";
import Image from "next/image";
import SiteBtn from "../UI/button/SiteBtn";

export default function FabricSelector() {
	const lists = [
		{
			title: "Выбрать ткань флис",
			pointsList: [
				"Флис односторонний",
				"Флис двухсторонний",
				"Трикотаж на флисе",
			],
		},
		{
			title: "Выбрать ткань футер",
			pointsList: ["Футер 2-х нитка", "Футер 3-х нитка"],
		},
		{
			title: "Смотреть другие ткани",
			pointsList: ["Ткань для термобелья"],
		},
	];

	return (
		<>
			<div className={styles.fabricSelector__container}>
				<div className={styles.fabricSelector}>
					<div className={styles.container}>
						<div className={styles.chooseFabric__container}>
							<div className={styles.titles__wrapper}>
								<h1>Выбрать ткань </h1>
								<h2>по каталогУ</h2>
							</div>

							<div className={styles.fabricLists__wrapper}>
								{lists.map((list, i) => (
									<div className={styles.fabricList} key={i}>
										<div
											className={styles.fabricList__title}
										>
											{list.title}

											<Image src={icon__arrow} alt="" />
										</div>

										<div className={styles.points__list}>
											{list.pointsList.map((point) => (
												<a
													href="#"
													className={styles.listPoint}
													key={point}
												>
													{point}
												</a>
											))}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className={styles.fabricDelivery__container}>
							<h2>Доставка ткани от производителЯ на склад</h2>

							<div className={styles.fabricDelivery__text}>
								<p>
									Покупайте качественную ткань оптом от
									производителя по оптовой цене. Обеспечим вас
									широким выбором тканей высокого качества, а
									собственный склад позволит оперативно
									доставить заказы.
								</p>
								<br />
								Мы гарантируем быструю доставку ткани по оптовой
								цене. Индивидуальный подход к каждому клиенту.
								Сотрудничая с нами, вы получите качественную
								ткань в срок, при бронировании, или на нашем
								складе контейнерных поставок ткани.
							</div>

							<div className={styles.fabricDelivery__formWrapper}>
								<h2>бронь & консУльтациЯ</h2>

								<form action="#" className={styles.form}>
									<SiteInput var2 placeholder="Тел" />
									<SiteBtn>ОСТАВИТЬ ЗАЯВКУ</SiteBtn>
								</form>

								<FormPolicyAgreement />
							</div>
						</div>
					</div>

					<div className={styles.description__wrapper}>
						<h3 className={styles.description__title}>
							ОПТОВЫЕ ПОСТАВКИ ТКАНИ ИЗ КИТАЯ, ТУРЦИИ И
							УЗБЕКИСТАНА
						</h3>

						<p className={styles.description__text}>
							Особенность наших поставок ткани оптом, заключается
							в том, что мы не просто работаем по договорам с
							конкретными производителям ткани. Но и в том, что
							основным из условия является постоянство качества и
							цветов. Ткань по качеству и цвету всегда одинаковая.
							Каждая партия ткани отгружается из Китая, Турции или
							Узбекистана в контейнер по строгим технологическим
							стандартам хранения и доставки.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
