"use client";

import styles from "./Slide4.module.css";

import SiteBtn from "@/components/UI/button/SiteBtn";
import FormPolicyAgreement from "@/components/UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteInput from "@/components/UI/input/SiteInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Slide4() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		tel: "",
	});

	async function sendForm() {
		const response = await fetch("/api/proxy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				billing: {
					first_name: formData.name,
					phone: formData.tel,
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

		setFormData({
			name: "",
			email: "",
			tel: "",
		});

		localStorage.setItem("thankReason", "form");
		router.replace("/thank-you");
	}

	return (
		<>
			<div className={styles.slide4__container}>
				<p className={styles.subtitle}>
					Воспользуйтесь меню этого сайтбара, и получите
					детализированное описание параметров сотрудничества ткани
					оптом
				</p>

				<div className={styles.warningTitle__wrapper}>
					<h2>Внимание</h2>

					<p className={styles.subtitle}>
						Все предложения, связанные с быстротой поставки ткани,
						доступны после первого закупа, с отметкой вашего
						персонального менеджера
					</p>
				</div>

				<div className={styles.form__wrapper}>
					<h2>Чтобы кУпить ТКАНЬ ПО ОПТОВОЙ ЦЕНЕ ИЗУЧИТЕ</h2>

					<p className={styles.subtitle}>
						НАШИ ПРЕДЛОЖЕНИЯ И ВОСПОЛЬЗУЙТЕСЬ УСЛУГОЙ КОСУЛЬТАНТА ПО
						ПОДБОРУ ТКАНИ
					</p>

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
    							placeholder="Имя"
    							type="text"
    							value={formData.name}
    							onChange={(e) =>
    								setFormData({
    									...formData,
    									name: e.target.value,
    								})
    							}
    							required
    						/>
    						<SiteInput
    							placeholder="Эл. почта"
    							type="email"
    							value={formData.email}
    							onChange={(e) =>
    								setFormData({
    									...formData,
    									email: e.target.value,
    								})
    							}
    							required
    						/>
    						<SiteInput
    							placeholder="Тел"
    							type="tel"
    							value={formData.tel}
    							onChange={(e) =>
    								setFormData({
    									...formData,
    									tel: e.target.value,
    								})
    							}
    							required
    						/>
    						<SiteBtn type="submit">Смотреть все</SiteBtn>
						</div>

						<FormPolicyAgreement />
					</form>
				</div>

				<p className={styles.subtitle}>
					Наша компания предлагает высококачественную поставку тканей
					оптом для пошива. Мы обеспечиваем прямые поставки тканей на
					склад, что гарантирует оптимальные цены и быструю обработку
					заказов. Прямые поставки тканей оптом от производителя
					позволят вам сократить затраты и расширить ассортимент.
				</p>
			</div>
		</>
	);
}
