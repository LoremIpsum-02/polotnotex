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
						Если вы ищете, где купить ткани по оптовым ценам, вам
						стоит обратить внимание на наш оптовый интернет-магазин
						тканей. На сайте мы предоставляем материалы от оптовых
						производителей тканей, которые идеально подойдут для
						пошива одежды, постельного белья, а также для мебели.
						Оптовый поставщик ткани обеспечивает высокое качество и
						разнообразие, что делает выбор наиболее удобным. Для
						тех, кто заинтересован в тканях с оптового рынка,
						сотрудничество с оптовыми производителями и поставщиками
						тканей – это залог качественного окончания любого
						проекта. Оптовый склад тканей предоставляет возможность
						закупить необходимые товары в нужных объемах.
					</div>
				</div>
			</div>
		</>
	);
}
