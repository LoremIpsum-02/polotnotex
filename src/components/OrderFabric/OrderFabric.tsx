"use client";

import styles from "./OrderFabric.module.css";

import { useState } from "react";
import SiteInput from "../UI/input/SiteInput";
import SiteBtn from "../UI/button/SiteBtn";
import FormPolicyAgreement from "../UI/FormPolicyAgreement/FormPolicyAgreement";
import Image from "next/image";
import decoration from "@/assets/media/order-fabric/form-decoration.png";

export default function OrderFabric() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNum: "",
	});

	return (
		<>
			<div className={styles.orderFabric}>
				<div className={styles.block}>
					<h2>заказать ткань оптом со склада или забронировать</h2>

					<div className={styles.content}>
						<form action="#" className={styles.form}>
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
								value={formData.phoneNum}
								onChange={(e) =>
									setFormData({
										...formData,
										phoneNum: e.target.value,
									})
								}
								placeholder="Эл. почта"
							/>

							<div className={styles.points__wrapper}>
								<div className={styles.formPoint}>
									Нужен прайс с ценами производства
								</div>

								<div className={styles.formPoint}>
									Нужен прайс с ценами о наличии
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
