import styles from "./Slide1.module.css";

import Image from "next/image";
import ImageSlider from "../../ImagesSlider/ImageSlider";
import addressIcon from "@/assets/media/help-block/slides/address-icon.png";
import tgIcon from "@/assets/media/social-media/telegram.png";

import pic1 from "@/assets/media/help-block/slides/slide1/pic1.png";
import pic2 from "@/assets/media/help-block/slides/slide1/pic2.png";
import pic3 from "@/assets/media/help-block/slides/slide1/pic3.png";
import LinkComponent from "@/components/UI/link/LinkComponent";
import { useSocialLink } from "@/hooks/useSocialLink";

export default function Slide1() {
	const link_tg = useSocialLink("telegram")

	return (
		<>
			<div className={styles.slide__container}>
				<div className={styles.slider__wrapper}>
					<ImageSlider images={[pic1, pic2, pic3]} />
				</div>

				<div className={styles.inner}>
					<h2 className={styles.title}>
						ткань от производителя из китая
					</h2>

					<div className={styles.text}>
						Мы являемся прямым поставщиком тканей оптом и предлагаем
						ознакомиться на нашем сайте с ассортиментом материалов
						для различных секторов, включая поставщиков тканей для
						одежды, постельного белья и мебели. Наша компания
						работает непосредственно с производителями Китая, Турции
						и Узбекистана, что гарантирует высокое качество
						продукции и доступные цены. Мы предлагаем прямые
						закупки, что делает взаимодействие с нашей компанией
						легким и удобным. Наша команда всегда готова предложить
						индивидуальные решения и ответить на любые ваши вопросы,
						чтобы обеспечить наилучший результат для вашего бизнеса.
					</div>

					<div className={styles.contacts}>
						<div className={styles.address__wrapper}>
							<Image
								src={addressIcon}
								alt=""
								className={styles.addressIcon}
							/>
							<p className={styles.address__text}>
								Адрес: г. Иваново «Текстиль Профи»
							</p>
						</div>

						<LinkComponent href={link_tg?.url}>
							<button className={styles.tg__btn}>
								Telegram-kanal
								<Image
									src={tgIcon}
									alt=""
									className={styles.btnIcon}
								/>
							</button>
						</LinkComponent>
					</div>
				</div>
			</div>
		</>
	);
}
