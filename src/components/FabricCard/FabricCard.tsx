"use client";

import styles from "./FabricCard.module.css";

import { useState } from "react";
import Image from "next/image";
import { fabricList } from "@/actions";
import arrowIcon from "@/assets/media/fabric-page/color-selector-arrow.png";
import widthIcon from "@/assets/media/fabric-page/width-selector-arrow.png";
import buyIcon from "@/assets/media/fabric-page/buy-btn-arrow.png";
import icon__eye from "@/assets/media/fabricCards/eye-icon.png";

// Opportunities images imports
import icon__delivery from "@/assets/media/fabric-page/opportunities/delivery-icon.png";
import icon__payment from "@/assets/media/fabric-page/opportunities/payment-icon.png";
import icon__opportunities from "@/assets/media/fabric-page/opportunities/opportunities-icon.png";
import Popup from "../UI/popup/Popup";
import OrderSample from "../OrderSample/OrderSample";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import PaymentInfo from "../PaymentInfo/PaymentInfo";
import OpportunitiesInfo from "../OpportunitiesInfo/OpportunitiesInfo";

interface FabricCardProps {
	fabric_id: any;
}

export default function FabricCard({ fabric_id }: FabricCardProps) {
	const fabricData: any = fabricList().find((item) => item.id == fabric_id);
	const [currentImage, setCurrentImage] = useState<number>(0);
	const colorsList = [
		"Первый цвет",
		"Второй цвет",
		"Третий цвет",
		"Четвертый цвет",
		"Пятый цвет",
		"Шестой цвет",
	];
	const [currentColor, setCurrentColor] = useState<string>(colorsList[0]);
	const [buyAmount, setBuyAmount] = useState<number>(1);
	const [currentWidth, setCurrentWidth] = useState(null);

    const [deliveryInfo, setDeliveryInfo] = useState<boolean>(false)
    const [paymentInfo, setPaymentInfo] = useState<boolean>(false)
    const [opportunitiesInfo, setOpportunitiesInfo] = useState<boolean>(false)

	const opportunitiesList = [
		{
			title: "Доставка",
			icon: icon__delivery,
            setPopup: setDeliveryInfo,
		},
		{
			title: "Оплата",
			icon: icon__payment,
            setPopup: setPaymentInfo,
		},
		{
			title: "Возможности",
			icon: icon__opportunities,
            setPopup: setOpportunitiesInfo,
		},
	];

    const [showOrderSample, setShowOrderSampler] = useState<boolean>(false)

	return (
		<>
            <Popup show={showOrderSample} setShow={setShowOrderSampler}>
                <OrderSample fabricName={`${fabricData.type} ${fabricData.subtype} ${fabricData.density}, ${fabricData.color}`} />
            </Popup>

            <Popup show={deliveryInfo} setShow={setDeliveryInfo}>
                <DeliveryInfo />
            </Popup>
            <Popup show={paymentInfo} setShow={setPaymentInfo}>
                <PaymentInfo />
            </Popup>
            <Popup show={opportunitiesInfo} setShow={setOpportunitiesInfo}>
                <OpportunitiesInfo />
            </Popup>

			<div className={styles.fabricCard}>
				<div className={styles.inner}>
					<div className={styles.images__container}>
						<div className={styles.currentImage__wrapper}>
							<Image
								src={fabricData?.images[currentImage]}
								alt=""
								className={styles.currentImage}
							/>

							<div className={styles.badges__wrapper}>
								<div
									className={
										fabricData.availability.toLowerCase() ==
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
									{fabricData.availability}
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

						<div className={styles.images__pagination}>
							{fabricData.images.map(
								(item: any, index: number) => (
									<button
										className={styles.image__btn}
										key={index}
										onClick={() => setCurrentImage(index)}
									>
										<Image
											src={item}
											alt=""
											className={styles.pagination__image}
										/>
									</button>
								)
							)}
						</div>
					</div>

					<div className={styles.fabricInfo__container}>
						<h2 className={styles.fabric__title}>
							Ткань {fabricData.type.toLowerCase()}{" "}
							{fabricData.subtype} {fabricData.color}
						</h2>

						<div className={styles.fabricInfo__wrapper}>
							<div className={styles.wrapper__inner}>
								<div className={styles.availability__title}>
									{fabricData.availability}
								</div>

								<div className={styles.colorSelector__wrapper}>
									<button
										className={styles.colorSelector__btn}
									>
										Выбор цвета
										<Image
											src={arrowIcon}
											alt=""
											className={
												styles.colorSelector__icon
											}
										/>
									</button>

									<div className={styles.colors__menu}>
										{colorsList.map((color) => (
											<button
												className={
													styles.colorsMenu__item
												}
												key={color}
												onClick={() =>
													setCurrentColor(color)
												}
											>
												{color}
												<div
													className={`${
														styles.menu__mark
													} ${
														color == currentColor
															? styles.selected
															: ""
													}`}
												></div>
											</button>
										))}
									</div>
								</div>
							</div>

							<div className={styles.details__container}>
								<div className={styles.detail__wrapper}>
									<div className={styles.detail__key}>
										Плотность
									</div>

									<div className={styles.detail__value}>
										{fabricData.density}
									</div>
								</div>

								<div className={styles.detail__wrapper}>
									<div className={styles.detail__key}>
										Цвет
									</div>

									<div className={styles.detail__value}>
										{fabricData.color}
									</div>
								</div>

								<div className={styles.detail__wrapper}>
									<div className={styles.detail__key}>
										Состав
									</div>

									<div className={styles.detail__value}>
										{fabricData.composition.map(
											(item: any) => (
												<div key={item.material}>
													{item.percents}%{" "}
													{item.material}
												</div>
											)
										)}
									</div>
								</div>

								<div className={styles.detail__wrapper}>
									<div className={styles.detail__key}>
										Ширина
									</div>

									<div
										className={`${styles.detail__value} ${styles.widthMenu__wrapper}`}
									>
										{currentWidth
											? currentWidth
											: fabricData.width.join(" - ")}
										<button
											className={
												styles.widthMenuWrapper__btn
											}
										>
											Выбрать
											<Image
												src={widthIcon}
												alt=""
												className={styles.widthIcon}
											/>
										</button>
										<div className={styles.widthMenu}>
											{fabricData.width.map(
												(item: any) => (
													<button
														className={
															styles.width__btn
														}
														key={item}
														onClick={() =>
															setCurrentWidth(
																item
															)
														}
													>
														<input
															type="radio"
															name="fabricWidth"
															checked={
																currentWidth ==
																item
															}
															onChange={() =>
																setCurrentWidth(
																	item
																)
															}
															className={
																styles.width__checkbox
															}
														/>
														{item}
													</button>
												)
											)}
										</div>
									</div>
								</div>

								<div className={styles.detail__wrapper}>
									<div className={styles.detail__key}>
										Страна производитель
									</div>

									<div className={styles.detail__value}>
										{fabricData.countryOrigin}
									</div>
								</div>

								<div className={styles.detail__wrapper}>
									<div className={styles.detail__key}>
										Цена от &nbsp;{" "}
										<span>
											{fabricData.price}/кг (5 п/м)
										</span>
									</div>

									<div className={styles.detail__value}>
										<div className={styles.buy__wrapper}>
											<button
												className={
													styles.buyAmount__btn
												}
												onClick={() =>
													setBuyAmount(buyAmount + 1)
												}
											>
												+
											</button>
											{buyAmount} рул.
											<button
												className={
													styles.buyAmount__btn
												}
												onClick={() =>
													setBuyAmount(buyAmount - 1)
												}
												disabled={buyAmount <= 1}
											>
												-
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.btns__wrapper}>
								<button className={styles.order__btn} onClick={e => setShowOrderSampler(!showOrderSample)}>
									Заказать образец
								</button>

								<button className={styles.buy__btn}>
									КУПИТЬ
									<Image
										src={buyIcon}
										alt=""
										className={styles.buyIcon}
									/>
								</button>
							</div>

							<div className={styles.opportunities__container}>
								{opportunitiesList.map((item) => (
									<button
										className={styles.opportunity__item}
										key={item.title}
                                        onClick={() => item.setPopup(true)}
									>
										<Image
											src={item.icon}
											alt={item.title}
											className={styles.opportunity__icon}
										/>
										{item.title}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.description__wrapper}>
					<p className={styles.description__badge}>Описание:</p>

					<div className={styles.description}>
						{fabricData.description
							? fabricData.description
							: "Нет описания"}
					</div>
				</div>
			</div>
		</>
	);
}
