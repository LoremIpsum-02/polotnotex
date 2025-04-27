"use client";

import styles from "./FilterCatalog.module.css";

import Image from "next/image";
import icon_wa from "@/assets/media/header/socials/whatsapp.png";
import icon_tg from "@/assets/media/header/socials/tg.png";
import icon_mail from "@/assets/media/header/socials/mail.png";
import title__arrowIcon from "@/assets/media/fabricCards/title-arrow.png";
import { useEffect, useState } from "react";
import Popup from "@/components/UI/popup/Popup";
import OrderSample from "@/components/OrderSample/OrderSample";
import LinkComponent from "@/components/UI/link/LinkComponent";
import { usePhoneNumber } from "@/hooks/usePhoneNumber";
import { useSocialLink } from "@/hooks/useSocialLink";

interface FilterOption {
	name: string;
	value: string;
}

interface Props {
	filterValue: {
		type: string;
		availability: string[];
		subtypes: string[];
	};
	filterOptions: FilterOption[];
	setFilter: (arg: any) => void;
	availabilityOptions: string[];
	subtypes: string[];
}
export default function FilterCatalog({
	filterValue,
	filterOptions,
	setFilter,
	availabilityOptions,
	subtypes,
}: Props) {
    const [popup, setPopup] = useState<boolean>(false)

	// Contacts
	const primaryPhone = usePhoneNumber("primary")
	const link_tg = useSocialLink("telegram")
	const link_wa = useSocialLink("whatsapp")


	return (
		<>
        <Popup show={popup} setShow={setPopup}>
            <OrderSample />
        </Popup>
			<div className={styles.filter__container}>
				<div className={styles.filter__inner}>
					<div className={styles.filter__title}>
						ФИЛЬТР ПОДБОРА ТКАНИ
						<Image
							src={title__arrowIcon}
							alt=""
							className={styles.titleIcon}
						/>
					</div>

					<div className={styles.filterOptions__wrapper}>
						<div className={styles.fabricTypes__wrapper}>
							{filterOptions.map((option: FilterOption) => (
								<div
									className={styles.filterOption}
									key={option.name}
								>
									<input
										type="radio"
										name="filterOption"
										id={option.value}
										checked={option.value.toLowerCase() == filterValue.type.toLowerCase()}
										className={styles.filter__checkbox}
										onChange={() => {
											setFilter({
												...filterValue,
												type: option.value,
											});
										}}
									/>
									<label htmlFor={option.value}>
										{option.name}
									</label>
								</div>
							))}
						</div>

						<div className={styles.availabilityOptions__wrapper}>
							{availabilityOptions.map((option: string) => (
								<div
									className={styles.filterOption}
									key={option}
								>
									<input
										type="checkbox"
										name="availability"
										id={option}
										className={styles.filter__checkbox}
										onChange={(e) => {
											if (e.target.checked) {
												setFilter(
													(filterValue: any) => ({
														...filterValue,
														availability: [
															...filterValue.availability,
															option,
														],
													})
												);
											} else {
												setFilter(
													(filterValue: any) => ({
														...filterValue,
														availability:
															filterValue.availability.filter(
																(
																	item: string
																) =>
																	item !=
																	option
															),
													})
												);
											}
										}}
									/>
									<label htmlFor={option}>{option}</label>
								</div>
							))}
						</div>
					</div>

					{/* Contacts */}
					<div className={styles.contacts__wrapper}>
						{/* Phone number */}
						<LinkComponent
							href={`tel:${primaryPhone?.number}`}
							type="tel"
							className={styles.phoneNumber}
                            white
						>
							{primaryPhone?.display}
						</LinkComponent>

						{/* Link what's app */}
						<LinkComponent href={link_wa?.url} className={styles.social_link}>
							<Image
								src={icon_wa}
								alt="What's app"
								className={styles.social_icon}
							/>
						</LinkComponent>

						{/* Link telegram */}
						<LinkComponent href={link_tg?.url} className={styles.social_link}>
							<Image
								src={icon_tg}
								alt="Telegram"
								className={styles.social_icon}
							/>
						</LinkComponent>

						{/* Popup button */}
						<button onClick={() => setPopup(true)} className={styles.social_link}>
							<Image
								src={icon_mail}
								alt=""
								className={styles.social_icon}
							/>
						</button>
					</div>
				</div>

				<div className={styles.subtypesFilter__container}>
					{subtypes.map((subtype) => (
						<button
							className={`${styles.subtype__item} ${
								filterValue.subtypes.includes(subtype)
									? styles.subtype__selected
									: ""
							}`}
							key={subtype}
							onClick={() => {
								if (!filterValue.subtypes.includes(subtype)) {
									setFilter((filterValue: any) => ({
										...filterValue,
										subtypes: [
											...filterValue.subtypes,
											subtype,
										],
									}));
								} else {
									setFilter((filterValue: any) => ({
										...filterValue,
										subtypes: filterValue.subtypes.filter(
											(item: string) => item != subtype
										),
									}));
								}
							}}
						>
							{subtype}
						</button>
					))}
				</div>
			</div>
		</>
	);
}
