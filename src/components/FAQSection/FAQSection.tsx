"use client";

import styles from "./FAQSection.module.css";

import Image from "next/image";
import SiteBtn from "../UI/button/SiteBtn";
import FormPolicyAgreement from "../UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteInput from "../UI/input/SiteInput";

import icon__wa from "@/assets/media/social-media/whatsapp.png";
import icon__tg from "@/assets/media/social-media/telegram.png";
import { RefObject, useState } from "react";
import SpoilerItem from "./SpoilerItem/SpoilerItem";

interface Props{
    targetRef: RefObject<HTMLDivElement>;
}

export default function FAQSection({targetRef}: Props) {
	const spoilersData = [
		{
			id: 1,
			title: `От чего зависит цена на ткани?`,
			text: `Цена ткань флис, футер и другие зависит от качества
и от объема закупки. Под качеством ткани подразумевается характеристики по плотности и составу ткани. Наши цены
на ткани низкие и конкурентные. Что является основным преимуществом при выборе нас, как поставщика ткани.`,
		},
		{
			id: 2,
			title: `Если заказывать поставку из Китая то сколько ждать?`,
			text: `Фабрика в Китае по производству ткни флиса и футера, 
и других, выполняет заказ 3 недели, это очень быстро, 
при сохранении качества высоких стандартов по всем характеристикам ткани. У нас самая быстрая ткани 
по оптовым и низким ценам на флис и футер. Можете сравнить доставку из Китая ткани по другим предложениям компаний и нашу. Доставка ткани из Китая в среднем 10 дней.`,
		},
		{
			id: 3,
			title: `Есть ли доставка в соседние регионы?`,
			text: `Доставка ткани в регионы флис и Футер по низким оптовым ценам осуществляется с нашего оптового склада ткани. Сначала ткань флис и футер по Вашей оплаченной заявке поступает на основной склад, и после транспортными компаниями производим доставку. В таком случае доставка составит чуть больше 10 дней после отгрузки ее из Китая.`,
		},
		{
			id: 4,
			title: `Какая минимальная партия заказа из Китая?`,
			text: `Индивидуальная доставка ткани из Китая и условия: 
на каждую ткань флис или футер отдельно, на цвет ткани минимум 500кг, индивидуальный окрас ткани под требуемый цвет или оттенок 1000кг. Доставка ткани из Китая осуществляется при использовании контейнеров 
по согласованной транспортной логистике.`,
		},
		{
			id: 5,
			title: `Оплата происходит наличными или через р/с?`,
			text: `При покупке ткани или заказе на текстильное полотно флис или футер оплата происходит наличными или на р/с ИП. 
Мы работаем без НДС. При оптовом заказе текстильного полотна футера или флиса, предварительно все вопросы обсуждаются с нашими менеджерами.`,
		},
		{
			id: 6,
			title: `У Вас флис и футер или есть еще такни?`,
			text: `Всегда в наличии на оптовом складе есть ткань, как флис 
так и футер, разной плотности и цветов. Следует учитывать, что оборот продаж интенсивный, и быстро меняется. 
Тем не менее есть ряд позиций по тканям, которые мы всегда пополняем самостоятельно для складского остатка. В наличии ткань флис, на заказ ткань Футер, Кулирная гладь, Тедди, Лапша.`,
		},
		{
			id: 7,
			title: `Можно ли заказать образец ткани?`,
			text: `Да, есть услуга заказа образца ткани. Образец ткани футер или флис, а также другой ткани из текстильного полотна можно брать из того, что есть в наличии на нашем оптовом складе тканей. Вы можете либо согласовать с менеджером отправку образцов ткани, либо приехать на склад по продаже ткани и выбрать образцы ткани самостоятельно.`,
		},
		{
			id: 8,
			title: `Можно ли заказывать точный
или индивидуальный цвет?`,
			text: `Вы можете заказать идивидуальный цвет, оттенок, однотональных тканей, при оптовом заказе. Также заказать любой принт на ткань. Все это входит в предоставляемые услуги. Мы продаем ткань и привозим ее от производителя 
в Китае за 10 дней, контейнерной перевозкой 
по согласованной транспортной логистике.`,
		},
	];

	const [activeSpoiler, setActiveSpoiler] = useState<null | string>(null);

	return (
		<>
			<div className={styles.faqSection} ref={targetRef}>
				<div className={styles.container}>
					<div className={styles.faq__container}>
						<h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ ПРИ ПОКУПКЕ ТКАНИ</h2>

						<div className={styles.spoilers__wrapper}>
							{spoilersData.map((item) => (
								<SpoilerItem
									spoiler={item}
									activeSpoiler={activeSpoiler}
									setActiveSpoiler={setActiveSpoiler}
                                    key={item.id}
								/>
							))}
						</div>
					</div>

					<div className={styles.form__wrapper}>
						<h2>не нашли ответ на вопрос? задай свой!</h2>

						<form action="#" className={styles.form}>
							<SiteInput var2 placeholder="Имя" />
							<SiteInput var2 placeholder="Эл. почта" />
							<textarea
								className={styles.messageInput}
								placeholder="Опишите свой заказ"
							/>
							<SiteBtn>ОСТАВИТЬ ЗАЯВКУ</SiteBtn>
							<FormPolicyAgreement />
						</form>

						<div className={styles.additional}>
							<p className={styles.subtitle}>
								Или задайте вопрос в чат мессенджера
							</p>

							<div className={styles.btns__wrapper}>
								<a href="#" className={styles.socialBtn}>
									WhatsApp-chat
									<Image
										src={icon__wa}
										alt=""
										className={styles.social__icon}
									/>
								</a>

								<a href="#" className={styles.socialBtn}>
									Telegram-kanal
									<Image
										src={icon__tg}
										alt=""
										className={styles.social__icon}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
