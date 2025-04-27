// components/SiteHeader/SiteHeader.tsx

"use client";

import styles from "./SiteHeader.module.css";

// Essentials
import React, { RefObject, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Assets
import Logo from "@/assets/media/logo/logo_header.png";
import phoneIcon from "@/assets/media/header/phone_icon.png";
import icon_wa from "@/assets/media/header/socials/whatsapp.png";
import icon_tg from "@/assets/media/header/socials/tg.png";
import icon_mail from "@/assets/media/header/socials/mail.png";

// Components
import Popup from "@/components/UI/popup/Popup";
import OrderSample from "@/components/OrderSample/OrderSample";
import LinkComponent from "@/components/UI/link/LinkComponent";
import Link from "next/link";
import { usePhoneNumber } from "@/hooks/usePhoneNumber";
import { useSocialLink } from "@/hooks/useSocialLink";

interface MenuInfoItem {
	name: string;
	handleClick: () => void;
}

interface Props {
	selectFabric?: (arg: {
		type: string;
		subtypes: string[];
		availability: any;
	}) => void;
	productsRef?: RefObject<HTMLDivElement>;
	menu__info?: MenuInfoItem[];
}

export default function SiteHeader({
	selectFabric,
	productsRef,
	menu__info,
}: Props) {
	const menu__fabricCatalog = [
		{
			type: "Флис",
			subtypes: ["односторонний"],
			availability: [],
		},
		{
			type: "Флис",
			subtypes: ["двухсторонний"],
			availability: [],
		},
		{
			type: "Флис",
			subtypes: ["Трикотаж на флисе"],
			availability: [],
		},
		{
			type: "Футер",
			subtypes: ["2-х нитка"],
			availability: [],
		},
		{
			type: "Футер",
			subtypes: ["3-х нитка"],
			availability: [],
		},
		{
			type: "Ткань для термобелья",
			subtypes: [],
			availability: [],
		},
	];

	const [popup, setPopup] = useState<boolean>(false);

	const router = useRouter();

	function returnBack() {
		localStorage.removeItem("thankReason");
		router.replace("/");
	}

	const primaryPhone = usePhoneNumber("primary");
	const link_wa = useSocialLink("whatsapp");
	const link_tg = useSocialLink("telegram");

	return (
		<>
			<Popup show={popup} setShow={setPopup}>
				<OrderSample />
			</Popup>

			{/* Header */}
			<header className={styles.header}>
				{/* Mobile text container */}
				<div className={styles.mob__textContainer}>
					<p className={styles.text}>
						Открыто с 8.00 до 19.00 (Пн-Пт)
					</p>

					{/* Phone number link */}
					<LinkComponent
						href={`tel:${primaryPhone?.number}`}
						type="tel"
					>
						<p className={styles.text}>{primaryPhone?.display}</p>
					</LinkComponent>

					<p className={styles.text}>Ткань оптом для пошива одежды</p>
				</div>

				<div className={styles.header__inner}>
					<div className={styles.header__innerWrapper}>
						<div className={styles.header__contentWrapper}>
							{/* Nav */}
							<nav className={styles.nav}>
								{/* Phone number link */}
								{primaryPhone ? (
									<LinkComponent
										href={`tel:${primaryPhone?.number}`}
										type="tel"
									>
										<Image
											src={phoneIcon}
											alt="call"
											className={[
												styles.call_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</LinkComponent>
								) : (
									<></>
								)}

								{/* Menu */}
								{menu__info && menu__fabricCatalog ? (
									<div className={styles.menuBtns__wrapper}>
										<div
											className={`
											${styles.catalogBtn__wrapper}
											${styles.btnWrapper}
                                            ${productsRef ? "" : styles.hide}
										`}
										>
											<button
												className={[
													styles.menu_btn,
													styles.catalog__btn,
												].join(" ")}
												onClick={(e) =>
													e.preventDefault()
												}
											>
												Каталог ткани
											</button>

											<div
												className={`
												${styles.headerMenu}
												${styles.fabricCatalog__menu}
											`}
											>
												{selectFabric
													? menu__fabricCatalog.map(
															(item, index) => (
																<button
																	className={
																		styles.menuItem
																	}
																	key={index}
																	onClick={() => {
																		selectFabric(
																			item
																		);
																		productsRef?.current.scrollIntoView(
																			{
																				behavior:
																					"smooth",
																			}
																		);
																	}}
																>
																	{item.type}{" "}
																	{
																		item.subtypes
																	}
																</button>
															)
													  )
													: null}
											</div>
										</div>

										<div
											className={`
											${styles.infoBtn__wrapper}
											${styles.btnWrapper}
                                            ${menu__info ? "" : styles.hide}
                                        `}
										>
											<button
												className={[
													styles.menu_btn,
													styles.info__btn,
												].join(" ")}
												onClick={(e) =>
													e.preventDefault()
												}
											>
												Информация
											</button>

											<div
												className={[
													styles.headerMenu,
													styles.info__menu,
												].join(" ")}
											>
												{menu__info
													? menu__info.map(
															(item: any) => (
																<button
																	className={
																		styles.menuItem
																	}
																	key={
																		item.name
																	}
																	onClick={() =>
																		item.handleClick()
																	}
																>
																	{item.name}
																</button>
															)
													  )
													: null}
											</div>
										</div>
									</div>
								) : (
									<button
										onClick={() => returnBack()}
										className={styles.returnBack__btn}
									>
										Вернуться на главную
									</button>
								)}

								{/* Phone number */}
								<LinkComponent
									href={`tel:${primaryPhone?.number}`}
									type="tel"
									white
								>
									{primaryPhone?.display}
								</LinkComponent>
							</nav>

							{/* Logo */}
							<div className={styles.logo_wrapper}>
								<Link href="/">
									<Image
										src={Logo}
										alt="Polotnotex"
										className={styles.logo}
									/>
								</Link>
							</div>

							<div className={styles.text__wrapper}>
								<p className={styles.text}>
									Открыто с 8.00 до 19.00 (Пн-Пт)
									<br />
									Ткань оптом для пошива одежды
								</p>

								<div className={styles.socials_wrapper}>
									{/* Whatsapp link */}
									<LinkComponent href={link_wa?.url}>
										<Image
											src={icon_wa}
											alt="What's app"
											className={[
												styles.social_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</LinkComponent>

									{/* Telegram link */}
									<LinkComponent href={link_tg?.url}>
										<Image
											src={icon_tg}
											alt="Telegram"
											className={[
												styles.social_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</LinkComponent>

									{/* Popup button */}
									<button
										className={styles.social_link}
										onClick={() => setPopup(true)}
									>
										<Image
											src={icon_mail}
											alt=""
											className={[
												styles.social_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</button>
								</div>
							</div>
						</div>

						{/* Mobile icons container */}
						<div className={styles.mob__iconsContainer}>
							{/* Telegram link */}
							<LinkComponent href={link_tg?.url}>
								<Image
									src={icon_tg}
									alt="Telegram"
									className={[
										styles.social_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</LinkComponent>

							{/* Whatsapp link */}
							<LinkComponent href={link_wa?.url}>
								<Image
									src={icon_wa}
									alt="What's app"
									className={[
										styles.social_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</LinkComponent>

							{/* Popup button */}
							<button
								className={styles.social_link}
								onClick={() => setPopup(true)}
							>
								<Image
									src={icon_mail}
									alt=""
									className={[
										styles.social_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</button>

							{/* Phone number link */}
							<LinkComponent
								href={`tel:${primaryPhone?.number}`}
								type="tel"
								className={styles.call_btn}
							>
								<Image
									src={phoneIcon}
									alt="call"
									className={[
										styles.call_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</LinkComponent>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
