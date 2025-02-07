import styles from "./CatalogItem.module.css";

import Image from "next/image";
import icon__eye from "@/assets/media/fabricCards/eye-icon.png";
import clsx from "clsx";

interface CompositionItem {
	material: string;
	percents: number;
}

interface FabricItem {
	id: number;
	type: string;
	subtype: string;
	weight: string;
	color: string;
	composition: CompositionItem[];
	width: number[];
	price: string;
	availability: string;
}

interface Props {
	fabricItem: FabricItem;
}

export default function CatalogItem({ fabricItem }: Props) {
	return (
		<>
			<div className={styles.card}>
				<div className={styles.picture__container}>
					<div className={styles.pictureContainer__inner}>
						<div
							className={
									fabricItem.availability.toLowerCase() ==
								"в наличии"
									? [styles.availability__badge, styles.badge__available].join(' ')
									: [styles.availability__badge, styles.badge__underOrder].join(' ')
							}
						>
							{fabricItem.availability}
						</div>

						<button className={styles.popup__btn}>
							<Image
								src={icon__eye}
								alt=""
								className={styles.popup__icon}
							/>
						</button>
					</div>
				</div>

				<div className={styles.card__info}>
					<div className={styles.title__wrapper}>
						{fabricItem.type} {fabricItem.subtype} <br />
						{fabricItem.weight}
					</div>

                    <div className={styles.parameters__wrapper}>
                        <div className={styles.parameter}>
                            <p className={styles.parameter__name}>
                                Цвет
                            </p>

                            {fabricItem.color}
                        </div>

                        <div className={styles.parameter}>
                            <p className={styles.parameter__name}>
                                Состав
                            </p>

                            <div className={styles.composition__wrapper}>
                                {fabricItem.composition.map((item) => (
                                    `${item.percents}% ${item.material}`
                                ))}
                            </div>
                        </div>

                        <div className={styles.parameter}>
                            <p className={styles.parameter__name}>
                                Состав
                            </p>

                            {fabricItem.width.join(' - ')}
                        </div>
                    </div>

                    <div className={styles.price__wrapper}>
                        От <span className={styles.price}>{fabricItem.price}</span>/кг (5 п/м)
                    </div>

                    <a href="#" className={styles.orderSample__btn}>
                        Заказать образец ткани
                    </a>
				</div>
			</div>
		</>
	);
}
