'use client'

import styles from "./SiteHeader.module.css";

import React, { RefObject } from "react";
import Image from "next/image";
import Logo from "@/assets/media/logo/logo_header.png";
import phoneIcon from "@/assets/media/header/phone_icon.png";
import icon_wa from "@/assets/media/header/socials/whatsapp.png";
import icon_tg from "@/assets/media/header/socials/tg.png";
import icon_mail from "@/assets/media/header/socials/mail.png";

interface Props {
	selectFabric: (arg: any) => void;
    productsRef: RefObject<HTMLDivElement>,
    menu__info: any,
}

export default function SiteHeader({ selectFabric, productsRef, menu__info }: Props) {
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

	return (
		<>
			<header className={styles.header}>
				<div className={styles.mob__textContainer}>
					<p className={styles.text}>
						Открыто с 8.00 до 19.00 (Пн-Пт)
					</p>

					<a
						href="tel:+7 989 765-65-45"
						type="tel"
						className={styles.phoneNumber}
					>
						+7 989 765-65-45
					</a>

					<p className={styles.text}>Ткань оптом для пошива одежды</p>
				</div>
				<div className={styles.header__inner}>
					<div className={styles.header__innerWrapper}>
						<div className={styles.header__contentWrapper}>
							<nav className={styles.nav}>
								<a
									href="tel:+7 989 765-65-45"
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
								</a>
								<div className={styles.menuBtns__wrapper}>
									<div className={[styles.catalogBtn__wrapper, styles.btnWrapper].join(' ')}>
										<button
											className={[
												styles.menu_btn,
												styles.catalog__btn,
											].join(" ")}
                                            onClick={e => e.preventDefault()}
										>
											Каталог ткани
										</button>

										<div
											className={[
												styles.headerMenu,
												styles.fabricCatalog__menu,
											].join(" ")}
										>
											{menu__fabricCatalog.map((item, index) => (
												<button
													className={styles.menuItem}
													key={index}
                                                    onClick={() => {
                                                        selectFabric(item)
                                                        productsRef.current?.scrollIntoView({ behavior: "smooth" });
                                                    }}
												>
													{item.type}{' '}{item.subtypes}
												</button>
											))}
										</div>
									</div>

									<div className={[styles.infoBtn__wrapper, styles.btnWrapper].join(' ')}>
										<button
											className={[
												styles.menu_btn,
												styles.info__btn,
											].join(" ")}
                                            onClick={e => e.preventDefault()}
										>
											Информация
										</button>

										<div
											className={[
												styles.headerMenu,
												styles.info__menu,
											].join(" ")}
										>
											{menu__info.map((item: any) => (
												<button
													className={styles.menuItem}
													key={item.name}
                                                    onClick={() => item.handleClick()}
												>
													{item.name}
												</button>
											))}
										</div>
									</div>
								</div>

								<a
									href="tel:+7 989 765-65-45"
									type="tel"
									className={styles.phoneNumber}
								>
									+7 989 765-65-45
								</a>
							</nav>

							<div className={styles.logo_wrapper}>
								<Image
									src={Logo}
									alt="Polotnotex"
									className={styles.logo}
								/>
							</div>

							<div className={styles.text__wrapper}>
								<p className={styles.text}>
									Открыто с 8.00 до 19.00 (Пн-Пт)
									<br />
									Ткань оптом для пошива одежды
								</p>

								<div className={styles.socials_wrapper}>
									<a href="#" className={styles.social_link}>
										<Image
											src={icon_wa}
											alt="What's app"
											className={[
												styles.social_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</a>

									<a href="#" className={styles.social_link}>
										<Image
											src={icon_tg}
											alt="Telegram"
											className={[
												styles.social_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</a>

									<a href="#" className={styles.social_link}>
										<Image
											src={icon_mail}
											alt="Email"
											className={[
												styles.social_icon,
												styles.header__icon,
											].join(" ")}
										/>
									</a>
								</div>
							</div>
						</div>

						<div className={styles.mob__iconsContainer}>
							<a href="#" className={styles.social_link}>
								<Image
									src={icon_tg}
									alt="Telegram"
									className={[
										styles.social_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</a>

							<a href="#" className={styles.social_link}>
								<Image
									src={icon_wa}
									alt="What's app"
									className={[
										styles.social_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</a>

							<a href="#" className={styles.social_link}>
								<Image
									src={icon_mail}
									alt="Email"
									className={[
										styles.social_icon,
										styles.header__icon,
									].join(" ")}
								/>
							</a>

							<a
								href="tel:+7 989 765-65-45"
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
							</a>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
