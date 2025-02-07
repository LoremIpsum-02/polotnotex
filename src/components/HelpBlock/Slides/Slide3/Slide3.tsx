import styles from "./Slide3.module.css";

import Image from "next/image";
import ImageSlider from "../../ImagesSlider/ImageSlider";
import addressIcon from "@/assets/media/help-block/slides/address-icon.png";
import tgIcon from "@/assets/media/social-media/telegram.png";

import pic1 from "@/assets/media/help-block/slides/slide1/pic1.png";
import pic2 from "@/assets/media/help-block/slides/slide1/pic2.png";
import pic3 from "@/assets/media/help-block/slides/slide1/pic3.png";

export default function Slide2() {
	return (
		<>
			<div className={styles.slide__container}>
				<div className={styles.slider__wrapper}>
					<ImageSlider images={[pic1, pic2, pic3]} />
				</div>

				<div className={styles.inner}>
					<h2 className={styles.title}>
						ткань из китая флис, футер, оптом
					</h2>

					<div className={styles.text}>
						<b>
							Помощь во всех технических вопросах по работе с
							тканями: флис, футер, кулирная гладь, Тедди, Лапша
						</b>
						<br />
						<br />
						Любое швейное производство, особенно по пошиву одежды
						всегда работает в двух направлениях:
						<ol className={styles.ol}>
							<li>
								Поддержка производственного объема,
								пользующегося постоянным спросом. В таком
								случае, именно мы создаем стабильность в наличии
								ткани, требуемого качества и цвета.
							</li>
							<li>
								Разрабатывают новые модели, следят за
								тенденциями, не отстают от рыночного спроса. В
								таком случае, мы самые первые предоставляет
								редкие и модные оттенки цветов, а также
								нанесение принта на ткани при производстве
								ткани.
							</li>
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

						<a href="#" className={styles.tg__btn}>
							Telegram-kanal
							<Image
								src={tgIcon}
								alt=""
								className={styles.btnIcon}
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
