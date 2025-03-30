import styles from "./FabricSelector.module.css";

import FormPolicyAgreement from "@/components/UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteInput from "@/components/UI/input/SiteInput";
import icon__arrow from "@/assets/media/fabric-selector/arrow.png";
import Image from "next/image";
import SiteBtn from "@/components/UI/button/SiteBtn";
import { RefObject, useState } from "react";
import { useRouter } from "next/navigation";

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

	const [formData, setFormData] = useState({
		tel: "",
	});

	const router = useRouter();

	async function sendForm() {
		const response = await fetch("/api/proxy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				billing: {
					first_name: "",
					phone: formData.tel,
					email: "test@example.com", // WooCommerce requires an email
				},
				line_items: [], // Add products if needed
			}),
		});

		const data = await response.json();

		localStorage.setItem("thankReason", "form");
		router.push("/thank-you");
	}

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
							<h2>Каталог тканей для пошива</h2>

							<div className={styles.fabricDelivery__text}>
								<p>
									В нашем интернет-магазине представлен
									каталог тканей. Мы предлагаем разнообразные
									ткани для пошива одежды, постельного белья,
									а также для мебели. Каждая ткань обладает
									высокой прочностью и долговечностью, что
									гарантирует качественный итоговый продукт.
								</p>
								<br />
								<p>
									Заказать ткани оптом на нашем сайте стало
									проще простого. Удобный интерфейс позволяет
									быстро находить нужные материалы и оформлять
									заказ в несколько кликов. Мы ценим своих
									клиентов и гарантируем высокое качество
									продукции.
								</p>
							</div>

							<div className={styles.fabricDelivery__formWrapper}>
								<h2>бронь & консУльтациЯ</h2>

								<form
									action="#"
									className={styles.form}
									onSubmit={(e) => {
										e.preventDefault();
										sendForm();
									}}
								>
									<div className={styles.form__inner}>
										<SiteInput
											var2
											placeholder="Тел"
											value={formData.tel}
											onChange={(e) =>
												setFormData({
													tel: e.target.value,
												})
											}
										/>
										<SiteBtn>ОСТАВИТЬ ЗАЯВКУ</SiteBtn>
									</div>
									<FormPolicyAgreement />
								</form>
							</div>
						</div>
					</div>

					<div className={styles.description__wrapper}>
						<h2 className={styles.description__title}>
							ОПТОВЫЕ ПОСТАВКИ ТКАНИ ИЗ КИТАЯ, ТУРЦИИ И
							УЗБЕКИСТАНА
						</h2>

						<p className={styles.description__text}>
							Наш интернет-магазин предлагает оптовые поставки
							ткани из Китая, Турции и Узбекистана, предоставляя
							нашим клиентам качественный материал для различных
							нужд. У нас вы найдете широкий ассортимент
							трикотажного полотна, постельного и мебельного
							текстиля от проверенных производителей, которые
							зарекомендовали себя на рынке. Мы понимаем важность
							надежной и своевременной доставки, поэтому
							обеспечиваем быструю и безопасную логистику, что
							делает наше сотрудничество максимально комфортным.
							Наши оптовые предложения позволяют вам извлечь
							выгоду от доступных цен, что особенно важно для тех,
							кто занимается пошивом одежды или производством
							мебельных изделий. Задействуя наш опыт, вы можете
							уверенно развивать свой бизнес и оставаться на шаг
							впереди конкурентов, используя качественные ткани из
							стабильных источников, таких как китайские, турецкие
							и узбекские производители.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
