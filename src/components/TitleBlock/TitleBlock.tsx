"use client";

import styles from "./TitleBlock.module.css";

import Image from "next/image";
import icon_tg from "@/assets/media/titleBlock/tg.png";
import SiteInput from "../UI/input/SiteInput";
import addressIcon from "@/assets/media/titleBlock/icon.png";
import SiteBtn from "../UI/button/SiteBtn";
import { useState } from "react";
import FormPolicyAgreement from "../UI/FormPolicyAgreement/FormPolicyAgreement";
import { useRouter } from "next/navigation";

export default function TitleBlock() {
	const advantages = [
		"СОБСТВЕННЫЕ КОНТЕЙНЕРНЫЕ ПОСТАВКИ ТКАНИ",
		"ТКАНЬ ПО КАЧЕСТВУ И ЦВЕТУ ВСЕГДА ОДИНАКОВАЯ",
		"ПАРТИИ ТКАНИ МОЖНО ПОВТОРЯТЬ И БРОНИРОВАТЬ",
	];

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});

    const router = useRouter()

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

		setFormData({
			name: "",
			email: "",
			phoneNumber: "",
		});

        localStorage.setItem('thankReason', 'form')
        router.push('/thank-you')
	}

	return (
		<div className={styles.titleBlock}>
			<div className={styles.title_inner}>
				<div className={styles.title__wrapper}>
					<h1 className={styles.title}>
						Ткань Начиличе Цены Оптовые
					</h1>
					<h2 className={styles.subtile}>“ТЕКСТИЛЬНОЕ ПОЛОТНО”</h2>
				</div>

				<ul className={styles.advantages}>
					{advantages.map((item: string) => (
						<li key={item} className={styles.point}>
							{item}
						</li>
					))}
				</ul>

				<div className={styles.description}>
					Купить ткань по контейнерным поставкам у предприятия{" "}
					<span>“Текстильное полотно”</span> можно со склада или по
					бронированию
				</div>

				<div className={styles.contacts}>
					<div className={styles.address}>
						<Image
							src={addressIcon}
							alt=""
							className={styles.addressIcon}
						/>
						<p className={styles.address_text}>
							Адрес: г. Шуя, ул. Оптовых продаж 35
						</p>
					</div>

					<a href="https://t.me/tekstilnoyepolotno" className={styles.linkBtn}>
						Telegram-kanal
						<Image
							src={icon_tg}
							alt="Telegram-kanal"
							className={styles.btn_icon}
						/>
					</a>
				</div>
			</div>

			{/* Form section */}
			<div className={styles.form__container}>
				<div className={styles.form_wrapper}>
					<h2 className={styles.form_title}>
						Отправить заявку поставщикУ
					</h2>

					<form action="#" className={styles.form} onSubmit={e => {
                        e.preventDefault()
                        sendForm()
                    }}>
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
						/>
						<SiteInput
							placeholder="Тел"
							type="tel"
							value={formData.phoneNumber}
							onChange={(e) =>
								setFormData({
									...formData,
									phoneNumber: e.target.value,
								})
							}
						/>

						<FormPolicyAgreement />

						<SiteBtn
							onClick={(e) => {
								e.preventDefault();
								sendForm();
							}}
						>
							ОСТАВИТЬ ЗАЯВКУ
						</SiteBtn>
					</form>
				</div>

				<div className={styles.info__wrapper}>
					<div className={styles.description}>
						Купить ткань по контейнерным поставкам у предприятия{" "}
						<span>“Текстильное полотно”</span> можно со склада или
						по бронированию
					</div>

					<div className={styles.contacts}>
						<div className={styles.address}>
							<Image
								src={addressIcon}
								alt=""
								className={styles.addressIcon}
							/>
							<p className={styles.address_text}>
								Адрес: г. Шуя, ул. Оптовых продаж 35
							</p>
						</div>

						<a href="#" className={styles.linkBtn}>
							Telegram-kanal
							<Image
								src={icon_tg}
								alt="Telegram-kanal"
								className={styles.btn_icon}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
