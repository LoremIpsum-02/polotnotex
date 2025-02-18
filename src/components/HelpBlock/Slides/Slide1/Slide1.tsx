import styles from "./Slide1.module.css";

import Image from "next/image";
import ImageSlider from "../../ImagesSlider/ImageSlider";
import addressIcon from "@/assets/media/help-block/slides/address-icon.png";
import tgIcon from "@/assets/media/social-media/telegram.png";

import pic1 from "@/assets/media/help-block/slides/slide1/pic1.png";
import pic2 from "@/assets/media/help-block/slides/slide1/pic2.png";
import pic3 from "@/assets/media/help-block/slides/slide1/pic3.png";
import LinkComponent from "@/components/UI/link/LinkComponent";

export default function Slide1() {
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
						<b>Футер, флис, кулирная гладь, тедди, лапша</b>
						<br />
						<br />
						Ткань из Китая можно заказать из предложенного
						ассортимента, или по индивидуальному запросу на цвет
						ткани, состав или ткань с нанесением принта.
						<br />
						<br />
						При этом срок производства ткани не меняется и
						составляет до <b>7 дней</b>. Последующая доставка ткани
						у нас самая быстрая <b>10 дней.</b>
						<br />
						<br />
						<b>Варианты покупки ткани оптом</b>
						<ol className={styles.ol}>
							<li>
								С нашего склада от имеющегося объёма
								ассортимента.
							</li>
							<li>
								Из Китая 500 кг. на цвет, отдельно флис или
								футер.
							</li>
							<li>
								Из Китая на требуемый цвет или оттенок 1000 кг.
								на цвет.
							</li>{" "}
						</ol>
					</div>

					<div className={styles.contacts}>
						<div className={styles.address__wrapper}>
							<Image
								src={addressIcon}
								alt=""
								className={styles.addressIcon}
							/>
							<p className={styles.address__text}>
								Адрес: г. Шуя, ул. Оптовых продаж 35
							</p>
						</div>

                        <LinkComponent href="https://t.me/tekstilnoyepolotno">
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
