"use client";

import styles from "./FabricCard.module.css";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fabricList, fetchVariations } from "@/actions";
import arrowIcon from "@/assets/media/fabric-page/color-selector-arrow.png";
import widthIcon from "@/assets/media/fabric-page/width-selector-arrow.png";
import buyIcon from "@/assets/media/fabric-page/buy-btn-arrow.png";
import icon__eye from "@/assets/media/fabricCards/eye-icon.png";
import noImage from "@/assets/media/no-image.jpg";

// Opportunities images imports
import icon__delivery from "@/assets/media/fabric-page/opportunities/delivery-icon.png";
import icon__payment from "@/assets/media/fabric-page/opportunities/payment-icon.png";
import icon__opportunities from "@/assets/media/fabric-page/opportunities/opportunities-icon.png";

import Popup from "@/components/UI/popup/Popup";
import OrderSample from "@/components/OrderSample/OrderSample";
import DeliveryInfo from "@/components/DeliveryInfo/DeliveryInfo";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import OpportunitiesInfo from "@/components/OpportunitiesInfo/OpportunitiesInfo";
import { sendOrder } from "@/utils/sendOrder";

interface FabricCardProps {
	fabric_id: number | string;
}

export default function FabricCard({ fabric_id }: FabricCardProps) {
	const [fabricData, setFabricData] = useState<any>({});
	const [fabricVariations, setFabricVariations] = useState<any>([]);
    const [currentVariation, setCurrentVariation] = useState<any>()
	const [currentImage, setCurrentImage] = useState<number>(0);
	const [buyAmount, setBuyAmount] = useState<number>(1);
	const [currentWidth, setCurrentWidth] = useState<number | string>();

	const [deliveryInfo, setDeliveryInfo] = useState<boolean>(false);
	const [paymentInfo, setPaymentInfo] = useState<boolean>(false);
	const [opportunitiesInfo, setOpportunitiesInfo] = useState<boolean>(false);

    const [buyShow, setBuyShow] = useState<boolean>(false)

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

	const [showOrderSample, setShowOrderSampler] = useState<boolean>(false);

	const [isLoading, setIsLoading] = useState<boolean>(true);

	async function getFabricData(fabric_id: number | string) {
		try {
			const fullList = await fabricList();
			const result = await fullList.find((item: any) => item.id == fabric_id);

			if (!result) {
				throw new Error("Fabric not found");
			}

			setFabricData(result);

			const variations = await fetchVariations(fabric_id);
			setFabricVariations(variations);
            setCurrentVariation(variations[0])
		} catch (error: any) {
			console.error("Error fetching fabric data: ", error);
		} finally {
			setIsLoading(false);
		}
	}

    function changeColor(color: any){
        const selectedVariation = fabricVariations?.find(
            (variation: any) => variation.color.toLowerCase() == color.toLowerCase()
        );
        if (selectedVariation) {
            setCurrentImage(0); // Reset image index
            setCurrentVariation(selectedVariation)
        }
    }

	useEffect(() => {
		getFabricData(fabric_id);
	}, [fabric_id]);

    useEffect(() => {
        changeColor(currentVariation?.color)
    }, [currentVariation])
    
	return (
		<>
			{isLoading && !fabricData && !fabricVariations ? (
				<h3>Загрузка...</h3>
			) : (
				<>
					<Popup show={showOrderSample} setShow={setShowOrderSampler}>
                    <h4>ЗАКАЗАТЬ ОБРАЗЕЦ ТКАНИ</h4>

						<OrderSample
							fabricName={`${fabricData?.type} ${fabricData?.subtype} ${fabricData?.density}, ${currentVariation?.color}`}
                            fabricId={fabric_id}
						/>
					</Popup>

					<Popup show={deliveryInfo} setShow={setDeliveryInfo}>
						<DeliveryInfo />
					</Popup>
					<Popup show={paymentInfo} setShow={setPaymentInfo}>
						<PaymentInfo />
					</Popup>
					<Popup
						show={opportunitiesInfo}
						setShow={setOpportunitiesInfo}
					>
						<OpportunitiesInfo />
					</Popup>

                    <Popup show={buyShow} setShow={setBuyShow}>
                        <h4>
                            Купить ткань
                        </h4>

                        <OrderSample
							fabricName={`${fabricData?.type} ${fabricData?.subtype} ${fabricData?.density}, ${currentVariation?.color}`}
						/>
                    </Popup>

					<div className={styles.fabricCard}>
						<div className={styles.inner}>
							<div className={styles.images__container}>
								<div className={styles.currentImage__wrapper}>
									<Image
										src={
											currentVariation?.images[currentImage] || noImage
										}
										alt=""
										className={styles.currentImage}
										width={1000}
										height={1000}
									/>

									<div className={styles.badges__wrapper}>
										<div
											className={
												fabricData?.availability?.toLowerCase() ==
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

								{currentVariation?.images ? (
									currentVariation?.images.length >= 2 ? (
										<div
											className={
												styles.images__pagination
											}
										>
											{currentVariation?.images.map(
												(item: any, index: number) => (
													<button
														className={
															styles.image__btn
														}
														key={index}
														onClick={() =>
															setCurrentImage(
																index
															)
														}
													>
														<Image
															src={item || noImage}
															alt=""
															className={
																styles.pagination__image
															}
															width={1000}
															height={1000}
														/>
													</button>
												)
											)}
										</div>
									) : null
								) : null}
							</div>

							<div className={styles.fabricInfo__container}>
								<h2 className={styles.fabric__title}>
									Ткань {fabricData.type?.toLowerCase()}{" "}
									{fabricData.subtype} {fabricData.color}
								</h2>

								<div className={styles.fabricInfo__wrapper}>
									<div className={styles.wrapper__inner}>
										<div
											className={
												styles.availability__title
											}
										>
											{fabricData.availability}
										</div>

										<div
											className={
												styles.colorSelector__wrapper
											}
										>
											<button
												className={
													styles.colorSelector__btn
												}
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

											<div
												className={styles.colors__menu}
											>
												{fabricVariations.map(
													(item: any) => (
														<button
															className={
																styles.colorsMenu__item
															}
															key={item.id}
															onClick={() =>
																setCurrentVariation(fabricVariations.find((variation: any) => variation.color.toLowerCase() == item.color.toLowerCase()))
															}
														>
															{item.color}
															<div
																className={`${
																	styles.menu__mark
																} ${
																	item ==
																	currentVariation
																		? styles.selected
																		: ""
																}`}
															></div>
														</button>
													)
												)}
											</div>
										</div>
									</div>

									<div className={styles.details__container}>
										<div className={styles.detail__wrapper}>
											<div className={styles.detail__key}>
												Плотность
											</div>

											<div
												className={styles.detail__value}
											>
												{fabricData.density
													? fabricData.density
													: " - "}
											</div>
										</div>

										<div className={styles.detail__wrapper}>
											<div className={styles.detail__key}>
												Цвет
											</div>

											<div
												className={styles.detail__value}
											>
												{currentVariation?.color
													? currentVariation?.color
													: " - "}
											</div>
										</div>

										<div className={styles.detail__wrapper}>
											<div className={styles.detail__key}>
												Состав
											</div>

											<div
												className={styles.detail__value}
											>
												{fabricData.composition
													? fabricData.composition.map(
															(item: any) => (
																<div key={item}>
																	{item}
																</div>
															)
													  )
													: " - "}
											</div>
										</div>

										<div className={styles.detail__wrapper}>
											<div className={styles.detail__key}>
												Ширина
											</div>

											<div
												className={`${styles.detail__value} ${styles.widthMenu__wrapper}`}
											>
												{fabricData.width ? (
													<>
														{currentWidth
															? currentWidth
															: fabricData.width?.join(
																	" - "
															  )}
														<button
															className={
																styles.widthMenuWrapper__btn
															}
														>
															Выбрать
															<Image
																src={widthIcon}
																alt=""
																className={
																	styles.widthIcon
																}
															/>
														</button>
													</>
												) : (
													" - "
												)}
												<div
													className={styles.widthMenu}
												>
													{fabricData.width?.map(
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

											<div
												className={styles.detail__value}
											>
												{fabricData.countryOrigin
													? fabricData.countryOrigin
													: " - "}
											</div>
										</div>

										<div className={styles.detail__wrapper}>
											<div className={styles.detail__key}>
												Цена от &nbsp;{" "}
												<span>
													{fabricData.price}/кг (5
													п/м)
												</span>
											</div>

											<div
												className={styles.detail__value}
											>
												<div
													className={
														styles.buy__wrapper
													}
												>
													<button
														className={
															styles.buyAmount__btn
														}
														onClick={() =>
															setBuyAmount(
																buyAmount + 1
															)
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
															setBuyAmount(
																buyAmount - 1
															)
														}
														disabled={
															buyAmount <= 1
														}
													>
														-
													</button>
												</div>
											</div>
										</div>
									</div>

									<div className={styles.btns__wrapper}>
										<button
											className={styles.order__btn}
											onClick={() =>
												setShowOrderSampler(
													!showOrderSample
												)
											}
										>
											Заказать образец
										</button>

										<button className={styles.buy__btn} onClick={() => setBuyShow(true)}>
											КУПИТЬ
											<Image
												src={buyIcon}
												alt=""
												className={styles.buyIcon}
											/>
										</button>
									</div>

									<div
										className={
											styles.opportunities__container
										}
									>
										{opportunitiesList.map((item) => (
											<button
												className={
													styles.opportunity__item
												}
												key={item.title}
												onClick={() =>
													item.setPopup(true)
												}
											>
												<Image
													src={item.icon}
													alt={item.title}
													className={
														styles.opportunity__icon
													}
												/>
												{item.title}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className={styles.description__wrapper}>
							<p className={styles.description__badge}>
								Описание:
							</p>

							{fabricData.description ? (
								<div
									className={styles.description}
									dangerouslySetInnerHTML={{
										__html: fabricData.description,
									}}
								/>
							) : (
								<div className={styles.description}>
									Нет описания
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
}
