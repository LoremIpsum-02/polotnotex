import styles from "./Slide3.module.css";

import Image from "next/image";
import ImageSlider from "../../ImagesSlider/ImageSlider";
import addressIcon from "@/assets/media/help-block/slides/address-icon.png";
import tgIcon from "@/assets/media/social-media/telegram.png";

import pic1 from "@/assets/media/help-block/slides/slide1/pic1.png";
import pic2 from "@/assets/media/help-block/slides/slide1/pic2.png";
import pic3 from "@/assets/media/help-block/slides/slide1/pic3.png";
import LinkComponent from "@/components/UI/link/LinkComponent";
import { useSocialLink } from "@/hooks/useSocialLink";

export default function Slide2() {
	const link_tg = useSocialLink("telegram")

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
						Закупка тканей оптом от производителя является
						оптимальным решением для многих компаний, занимающихся
						пошивом одежды. При организации закупки ткани для пошива
						важно уделить внимание качеству материалов, а также
						условиям поставки. Оптовая закупка ткани позволяет
						значительно снизить расходы на производственные
						процессы. Кроме того, закуп тканей по оптовым ценам
						предоставляет возможность получения выгодных условий
						сотрудничества. Такой подход способствует оптимизации
						бюджета вашего бизнеса и позволяет получать качественную
						продукцию по разумным ценам. Не упустите шанс
						воспользоваться выгодными предложениями на закупку ткани
						для пошива, что станет залогом успешного и прибыльного
						бизнеса.
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
