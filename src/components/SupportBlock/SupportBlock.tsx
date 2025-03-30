"use client";

import styles from "./SupportBlock.module.css";

import { RefObject, useState } from "react";
import FormPolicyAgreement from "@/components/UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteBtn from "@/components/UI/button/SiteBtn";
import SiteInput from "@/components/UI/input/SiteInput";
import btnIcon from "@/assets/media/btn-arrow.png";
import btn__current from "@/assets/media/arrow-current.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
	currentSlide: number;
	setCurrentSlide: (num: number) => void;
	targetRef: RefObject<HTMLDivElement>;
}

export default function SupportBlock({
	currentSlide,
	setCurrentSlide,
	targetRef,
}: Props) {
	const textSlides = [
		{
			title: "ПОДДЕРЖКА",
			description: `
                Заказ ткани оптом — это важный этап для любого бизнеса, связанного с пошивом текстильных изделий. В нашем интернет-магазине вы найдете широкий ассортимент тканей, которые можно заказать для любых нужд. Мы поможем вам выбрать идеальную ткань на заказ. 
                Если вам необходима быстрая доставка, мы предлагаем услугу заказать доставку ткани прямо со склада. Это выгодное решение, позволяющее сократить время ожидания.

                При необходимости вы также можете купить ткань на заказ, что позволяет получить уникальные варианты. Свяжитесь с нами, и мы поможем вам с заказом ткани оптом, чтобы вы могли сосредоточиться на воплощении своих идей в жизнь.
            `,
		},
		{
			title: "ВОЗМОЖНОСТИ",
			description: `
                Мы предлагаем возможность купить ткань для пошива и мебельные ткани оптом. У нас вы найдете трикотажную ткань, которая подойдет для разнообразных изделий, а также однотонные ткани, которые создадут идеальную основу для вашего бизнеса. Мы занимаемся оптовыми поставками, и на нашем складе всегда имеются востребованные материалы для шитья одежды и мебели.

                Не упустите шанс купить ткани оптом от производителя с доставкой! Мы гарантируем высокое качество и оперативность обработки заказов. Работаем только с проверенными поставщиками из Турции, Китая и Узбекистана, чтобы обеспечить вам отличные условия для покупки тканей оптом. 
            `,
		},
		{
			title: "БЫСТРЫЕ РЕШЕНИЯ",
			description: `
                Интернет магазин «Текстильное Полотно» предлагает оптовую продажу тканей, охватывающую широкий спектр продукции — от тканей для одежды до тканей для мебели. Наша команда гарантирует высокое качество и разнообразие текстильных материалов. Наш сайт по продаже тканей имеет удобный интерфейс для поиска и заказа необходимых тканей оптом.
                
                Продажа тканей оптом от производителя актуальна для тех, кто ищет выгодные условия сотрудничества. Обращаясь к нам, вы получаете возможность приобрести ткани оптом со склада по оптовой цене, что значительно снижает ваши затраты. Кроме того, мы организуем быструю оптовую доставку тканей, что позволяет нашим клиентам максимально быстро получать заказы
            `,
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
					email: "", // WooCommerce requires an email
				},
				line_items: [], // Add products if needed
			}),
		});

		const data = await response.json();

		setFormData({
			tel: "",
		});

		localStorage.setItem("thankReason", "form");
		router.push("/thank-you");
	}

	return (
		<>
			<div className={styles.supportBlock} ref={targetRef}>
				<div className={styles.tabBtns__container}>
					{textSlides.map((item, index) => (
						<button
							key={index}
							className={`${styles.tab__btn} ${
								index == currentSlide ? styles.tab__current : ""
							}`}
							onClick={() => setCurrentSlide(index)}
						>
							<Image
								src={
									index == currentSlide
										? btn__current
										: btnIcon
								}
								alt=""
								className={styles.btnIcon}
							/>
							{item.title}
						</button>
					))}
				</div>

				<div className={styles.containerWrapper}>
					<div className={styles.text__container}>
						<h2>{textSlides[currentSlide].title}</h2>

						<div className={styles.text__wrapper}>
							{textSlides[currentSlide].description}
						</div>
					</div>

					<div className={styles.fabricDelivery__container}>
						<h2>Доставка ткани от производителЯ на склад</h2>

						<div className={styles.fabricDelivery__text}>
							<p>
								Покупайте качественную ткань оптом от
								производителя по оптовой цене. Обеспечим вас
								широким выбором тканей высокого качества, а
								собственный склад позволит оперативно доставить
								заказы.
							</p>
							<br />
							Мы гарантируем быструю доставку ткани по оптовой
							цене. Индивидуальный подход к каждому клиенту.
							Сотрудничая с нами, вы получите качественную ткань в
							срок, при бронировании, или на нашем складе
							контейнерных поставок ткани.
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
    									type="tel"
    									value={formData.tel}
    									onChange={(e) =>
    										setFormData({
    											...formData,
    											tel: e.target.value,
    										})
    									}
    								/>
    								<SiteBtn type='submit'>ОСТАВИТЬ ЗАЯВКУ</SiteBtn>
								</div>
                                <FormPolicyAgreement />
							</form>

						</div>
					</div>
				</div>

				<div className={styles.block__bg}></div>
			</div>
		</>
	);
}
