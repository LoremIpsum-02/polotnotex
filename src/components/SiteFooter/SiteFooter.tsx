"use client"

import styles from "./SiteFooter.module.css";

import Image from "next/image";
import picture from "@/assets/media/footer/picture.png";
import logo from "@/assets/media/logo/logo_header.png";
import decoration from "@/assets/media/decoration.png";
import { RefObject, useEffect, useState } from "react";
import Link from "next/link";
import { fetchPhoneNumbers, PhoneNumber } from "@/lib/contacts-api";
import LinkComponent from "@/components/UI/link/LinkComponent";

interface Props {
	targetRef?: RefObject<HTMLDivElement>;
}

export default function SiteFooter({ targetRef }: Props) {
	const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[] | null>(null)

	async function getPhoneNumbers() {
		const response = await fetchPhoneNumbers()
		setPhoneNumbers(response)
	}

	useEffect(() => {
		getPhoneNumbers()
	}, [])

	return (
		<>
			<footer className={styles.footer} ref={targetRef}>
				<Image src={decoration} alt="" className={styles.decoration} />
				<div className={styles.container}>
					<div className={styles.contacts}>
						<h2>контакты</h2>

						<div className={styles.contacts__wrapper}>
							<div className={styles.contact__point}>
								153005, «Текстиль-Профи» г. Иваново, ул. Сосновая, д.1
							</div>

							<div className={styles.contact__point}>
								Email:{" "}
								<a href="mailto:zakaz@polotnotex.ru">
									zakaz@polotnotex.ru
								</a>
							</div>

							<div
								className={`${styles.contact__point} ${styles.phoneNumbers__container}`}
							>
								Тел:{" "}
								<div className={styles.phoneNumbers__wrapper}>
									{phoneNumbers?.map((number: PhoneNumber) => (
										<span key={number.key}>
											<LinkComponent href={`tel:${number.number}`}>
												{number.display},
											</LinkComponent>
											<br />
										</span>
									))}
								</div>
							</div>

							<div className={styles.contact__point}>
								ИНН 370605201403
							</div>

							<div className={styles.contact__point}>
								<Link href={"/privacy"}>Политика конфиденциальности</Link>
							</div>
						</div>
					</div>

					<Image src={picture} alt="" className={styles.picture} />
				</div>

				<div className={styles.bottom}>
					<Link href={"/"}>
						<Image
							src={logo}
							alt="Polotnotex"
							className={styles.logo}
						/>
					</Link>
				</div>
			</footer>
		</>
	);
}
