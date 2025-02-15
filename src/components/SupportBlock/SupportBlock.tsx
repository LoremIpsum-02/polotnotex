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
                Флисовая ткань по оптовым ценам от производителя. 
                В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную и спортивную одежду, текстиль для дома и мебели. 
                
                Производствам как крупного, так и мелкого звеньев будет полезно обратить внимание на это сырье. В статье пойдет речь о том,  что это за материал, какие у него плюсы и минусы, его разновидностях. Также здесь рассказывается об особенностях обработки материала и сфере его применения. 
                
                Флисовая ткань по оптовым ценам от производителя. В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную и спортивную одежду, текстиль для дома и мебели.`,
		},
		{
			title: "ВОЗМОЖНОСТИ",
			description: `
                Флисовая ткань по оптовым ценам от производителя. 
                В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную 
                и спортивную одежду, текстиль для дома и мебели. 
                
                Производствам как крупного, так и мелкого звеньев будет полезно обратить внимание на это сырье. В статье пойдет речь о том,  что это за материал, какие у него плюсы и минусы, его разновидностях. Также здесь рассказывается об особенностях обработки материала и сфере его применения.
                
                Флисовая ткань по оптовым ценам от производителя. 
                В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную 
                и спортивную одежду, текстиль для дома и мебели. 
            `,
		},
		{
			title: "БЫСТРЫЕ РЕШЕНИЯ",
			description: `
                Флисовая ткань по оптовым ценам от производителя. 
                В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную 
                и спортивную одежду, текстиль для дома и мебели. 
               
                Производствам как крупного, так и мелкого звеньев будет полезно обратить внимание на это сырье. В статье пойдет речь о том,  что это за материал, какие у него плюсы и минусы, его разновидностях. Также здесь рассказывается об особенностях обработки материала и сфере его применения.
                
                Флисовая ткань по оптовым ценам от производителя. 
                В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную 
                и спортивную одежду, текстиль для дома и мебели. 
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
								<SiteBtn>ОСТАВИТЬ ЗАЯВКУ</SiteBtn>
							</form>

							<FormPolicyAgreement />
						</div>
					</div>
				</div>

				<div className={styles.block__bg}></div>
			</div>
		</>
	);
}
