"use client";

import styles from "./CatalogItem.module.css";

import Image from "next/image";
import icon__eye from "@/assets/media/fabricCards/eye-icon.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import buyIcon from "@/assets/media/catalog/buy-icon.png";
import noImage from "@/assets/media/no-image.jpg";
import icon__tooltip from "@/assets/media/fabricCards/tooltip-icon.png";

interface FabricItem {
	id: number | string;
	type?: string;
	subtype?: string;
	density?: string;
	colors: string[];
	composition?: string[];
	width?: number[];
	price?: string;
	availability?: string;
	images?: any;
}

interface Props {
	fabricItem: FabricItem;
    showPopup: (arg: boolean) => void,
    showForm: (arg: boolean) => void,
    setCurrentProduct: (arg: FabricItem) => void,
}

export default function CatalogItem({ fabricItem, showPopup, showForm, setCurrentProduct }: Props) {
	const [currentPreview, setCurrentPreview] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		if (!isHovering || !fabricItem.images || fabricItem.images.length <= 1)
			return;

		const interval = setInterval(() => {
			setCurrentPreview((prev) => (prev + 1) % fabricItem.images!.length);
		}, 1000); // Change image every second

		return () => clearInterval(interval);
	}, [isHovering, fabricItem.images]);

	return (
		<>
			<div
				className={styles.card}
				onMouseEnter={() => setIsHovering(true)}
				onMouseLeave={() => {
					setIsHovering(false);
					setCurrentPreview(0); // Reset to first image when hover ends
				}}
			>
				<div
					className={styles.picture__container}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={styles.pictureContainer__inner}>
						<Link href={`/fabric-page/${fabricItem.id}`}>
							<Image
								src={
									fabricItem.images
										? fabricItem.images[currentPreview].src
										: noImage
								}
								alt=""
								className={styles.card__image}
								width={1000}
								height={1000}
							/>
						</Link>
						<div className={styles.badges__wrapper}>
							<div
								className={
									fabricItem.availability?.toLowerCase() ==
									"в наличии"
										? [
												styles.availability__badge,
												styles.badge__available,
										  ].join(" ")
										: [
												styles.availability__badge,
												styles.badge__underOrder,
										  ].join(" ")
								}
							>
								{fabricItem.availability}
							</div>

							<button
								className={styles.popup__btn}
								onClick={() => {
                                    setCurrentProduct(fabricItem)
									showPopup(true);
								}}
							>
								<Image
									src={icon__eye}
									alt=""
									className={styles.popup__icon}
								/>
							</button>
						</div>
					</div>
				</div>

				<div className={styles.card__info}>
					<Link
						href={`/fabric-page/${fabricItem.id}`}
						className={styles.title__wrapper}
					>
						{fabricItem.type} {fabricItem.subtype} <br />
						{fabricItem.density}
					</Link>

					<div className={styles.parameters__wrapper}>
						<div className={styles.parameter}>
							<p className={styles.parameter__name}>Цвет</p>

							{fabricItem.colors[0]}
						</div>

						<div className={styles.parameter}>
							<p className={styles.parameter__name}>Состав</p>

							<div className={styles.composition__wrapper}>
								{fabricItem.composition
									? fabricItem.composition[0]
									: " - "}
							</div>
						</div>

						<div className={styles.parameter}>
							<p className={styles.parameter__name}>Ширина</p>

							{fabricItem.width?.join(" - ")}
						</div>
					</div>

					<div className={styles.price__wrapper}>
						От{" "}
						<span className={styles.price}>{fabricItem.price}</span>
						/кг (5 п/м){" "}
						<div className={styles.tooltip__wrapper}>
							<Image
								src={icon__tooltip}
								alt=""
								className={styles.tooltipIcon}
							/>
							<div className={styles.tooltip__text}>
								Предоставленная на сайте информация носит
								ознакомительный характер и не является публичной
								офертой. Наличие и актуальную цену уточняйте у
								менеджеров отдела продаж.
							</div>
						</div>
					</div>

					<button
						className={styles.orderSample__btn}
						onClick={() => {
                            setCurrentProduct(fabricItem)
                            showForm(true)
                        }}
					>
						Заказать образец ткани
					</button>

					<Link
						href={`/fabric-page/${fabricItem.id}`}
						className={styles.btn__buy}
					>
						<Image src={buyIcon} alt="" />
						Купить
					</Link>
				</div>
			</div>
		</>
	);
}
