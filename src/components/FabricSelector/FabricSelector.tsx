import styles from "./FabricSelector.module.css";

import FormPolicyAgreement from "@/components/UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteInput from "@/components/UI/input/SiteInput";
import icon__arrow from "@/assets/media/fabric-selector/arrow.png";
import Image from "next/image";
import SiteBtn from "@/components/UI/button/SiteBtn";
import { RefObject } from "react";

interface Props {
	selectFabric: (arg: any) => void;
	productsRef: RefObject<HTMLDivElement>;
}

export default function FabricSelector({ selectFabric, productsRef }: Props) {
	const lists = [
		{
			title: "Выбрать ткань флис",
			pointsList: [
				{
					type: "Флис",
					subtypes: ["односторонний"],
					availability: [],
				},
				{
					type: "Флис",
					subtypes: ["двухсторонний"],
					availability: [],
				},
				{
					type: "Флис",
					subtypes: ["Трикотаж на флисе"],
					availability: [],
				},
			],
		},
		{
			title: "Выбрать ткань футер",
			pointsList: [
				{
					type: "Футер",
					subtypes: ["2-х нитка"],
					availability: [],
				},
				{
					type: "Футер",
					subtypes: ["3-х нитка"],
					availability: [],
				},
			],
		},
		{
			title: "Смотреть другие ткани",
			pointsList: [
				{
					type: "Ткань для термобелья",
					subtypes: [],
					availability: [],
				},
			],
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
											{list.pointsList.map(
												(point, index) => (
													<button
														className={
															styles.listPoint
														}
														key={index}
														onClick={() => {
															selectFabric(point);
															productsRef.current?.scrollIntoView(
																{
																	behavior:
																		"smooth",
																}
															);
														}}
													>
														{point.subtypes.includes(
															"Трикотаж на флисе"
														)
															? null
															: point.type}{" "}
														{point.subtypes}
													</button>
												)
											)}
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
