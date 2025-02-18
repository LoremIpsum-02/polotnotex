"use client";

import styles from "./OrderFabric.module.css";

import { RefObject, useState } from "react";
import SiteInput from "../UI/input/SiteInput";
import SiteBtn from "../UI/button/SiteBtn";
import FormPolicyAgreement from "../UI/FormPolicyAgreement/FormPolicyAgreement";
import Image from "next/image";
import decoration from "@/assets/media/order-fabric/form-decoration.png";
import { useRouter } from "next/navigation";

interface Props {
	targetRef: RefObject<HTMLDivElement>;
}

export default function OrderFabric({ targetRef }: Props) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		price_production: false,
		price_availability: false,
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
					first_name: formData.name,
					phone: formData.phoneNumber,
					email: "test@example.com", // WooCommerce requires an email
				},
				meta_data: [
					{
						key: "comment",
						value: formData.email,
					},
				],
				line_items: [], // Add products if needed
			}),
		});

		const data = await response.json();

		localStorage.setItem("thankReason", "form");
		router.push("/thank-you");
	}

	return (
		<>
			<div className={styles.orderFabric} ref={targetRef}>
				<div className={styles.block}>
					<h2>заказать ткань оптом со склада или забронировать</h2>

					<div className={styles.content}>
						<form
							action="#"
							className={styles.form}
							onSubmit={(e) => {
								e.preventDefault();
								sendForm();
							}}
						>
							<SiteInput
								value={formData.name}
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
								placeholder="Имя"
							/>

							<SiteInput
								type="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
								placeholder="Эл. почта"
							/>

							<SiteInput
								type="tel"
								value={formData.phoneNumber}
								onChange={(e) =>
									setFormData({
										...formData,
										phoneNumber: e.target.value,
									})
								}
								placeholder="Тел"
							/>

							<div className={styles.points__wrapper}>
								<div className={styles.formPoint}>
									<input
										type="checkbox"
										checked={formData.price_production}
										onChange={(e) =>
											setFormData({
												...formData,
												price_production:
													e.target.checked,
											})
										}
										id="price_production"
                                        className={styles.form__checkbox}
									/>
									<label htmlFor="price_production">
										Нужен прайс с ценами производства
									</label>
								</div>

								<div className={styles.formPoint}>
									<input
										type="checkbox"
										checked={formData.price_availability}
										onChange={(e) =>
											setFormData({
												...formData,
												price_availability:
													e.target.checked,
											})
										}
										id="price_availability"
                                        className={styles.form__checkbox}
									/>
									<label htmlFor="price_availability">
										Нужен прайс с ценами о наличии
									</label>
								</div>
							</div>

							<SiteBtn>ОСТАВИТЬ ЗАЯВКУ</SiteBtn>

							<FormPolicyAgreement />
						</form>

						<div className={styles.text__container}>
							К оптовым заявкам на покупку или бронирование тканей
							предлагается ткань из флиса оптом, а также ткань из
							футера. <br />
							<br />
							<span>
								Это ткани, которые всегда есть на складе в
								объеме, цвете и не изменяемом качестве. Мы
								работаем с поставками ткани так, чтобы у наших
								покупателей не было сложностей с изменением
								цвета или состава тканного полотна.
							</span>{" "}
							<br />
							<br />
							После пошива партии изделий из нашей ткани, вы
							удачно продадите и соберете еще много заказов на
							такие изделия. Можете не переживать - у нас всегда
							поставки ткани из флиса и футера одного и того же
							качества и таких же цветов без изменений. <br />
							<br />
							Ассортимент ткани конечно всегда в хорошем выборе.
							Ждем!
						</div>
					</div>

					<Image
						src={decoration}
						alt=""
						className={styles.decoration}
					/>
				</div>
			</div>
		</>
	);
}
