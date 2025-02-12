'use client'

import styles from "./CatalogItem.module.css";

import Image from "next/image";
import icon__eye from "@/assets/media/fabricCards/eye-icon.png";
import Link from "next/link";
import Popup from "@/components/UI/popup/Popup";
import { useState } from "react";
import FabricCard from "@/components/FabricCard/FabricCard";
import OrderSample from "@/components/OrderSample/OrderSample";
import buyIcon from '@/assets/media/catalog/buy-icon.png'
import noImage from '@/assets/media/no-image.jpg'

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
}

export default function CatalogItem({ fabricItem }: Props) {
    const [showFabricPopup, setShowFabricPopup] = useState<boolean>(false)
    const [showOrderSample, setShowOrderSample] = useState<boolean>(false)

	return (
		<>
            <Popup show={showFabricPopup} setShow={setShowFabricPopup}>
                <FabricCard fabric_id={fabricItem.id} />
            </Popup>

            <Popup show={showOrderSample} setShow={setShowOrderSample}>
                <OrderSample fabricName={`
                    ${fabricItem.type} ${fabricItem.subtype} ${fabricItem.density}, ${fabricItem.colors[0]}
                `} />
            </Popup>

			<div className={styles.card}>
				<div
					className={styles.picture__container}
					onClick={(e) => e.stopPropagation()}
				>
					<div className={styles.pictureContainer__inner}>
						<Link href={`/fabric-page/${fabricItem.id}`}>
							<Image
								src={fabricItem.images ?
                                    fabricItem.images[0].src
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
								onClick={(e) => {
									setShowFabricPopup(!showFabricPopup)
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
					<Link href={`/fabric-page/${fabricItem.id}`} className={styles.title__wrapper}>
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
								{fabricItem.composition?.map(item => (
                                        <span key={item}>{item}<br /></span>
                                ))}
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
						/кг (5 п/м)
					</div>

					<button className={styles.orderSample__btn} onClick={e => setShowOrderSample(!showOrderSample)}>
						Заказать образец ткани
					</button>

                    <Link href={`/fabric-page/${fabricItem.id}`} className={styles.btn__buy}>
                        <Image src={buyIcon} alt="" />
                        Купить
                    </Link>
				</div>
			</div>
		</>
	);
}
