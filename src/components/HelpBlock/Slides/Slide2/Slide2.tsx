import styles from "./Slide2.module.css";

import ImageSlider from "../../ImagesSlider/ImageSlider";

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
						ткань оптом поставки и склад
					</h2>

					<div className={styles.text}>
						<b>Футер, флис, кулирная гладь, тедди, лапша</b>
						<br />
						<br />
						Мы продаем ткань только оптом, благодаря этому
						предлагаем самые выгодные низкие цены. Приобретать ткань
						оптом по низким ценам выгодно, и мы работаем с:
						<ol className={styles.ol}>
							<li>
								Производственными швейными предприятиями,
								обеспечивая стабильное наличие ткани для подшива
								одежды, а также наши клиенты получают все
								новинки быстрее рынка наличия. В случае, когда
								швейное производство расширяет линейку изделий,
								мы поставляем ткань индивидуально по требованию.
								(вне нашего ассортимента).
							</li>
							<li>
								Интернет магазины и различные продавцы ткани.
								Приобретая у нас, имеют не только свое большое
								плечо для наценок, но и всегда могут выдерживать
								демпинг конкурентов.
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}
