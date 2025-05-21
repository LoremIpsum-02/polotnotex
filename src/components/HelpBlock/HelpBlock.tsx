"use client";

import styles from "./HelpBlock.module.css";

import { RefObject, useState } from "react";
import Image from "next/image";
import decor from "@/assets/media/decoration.png";

// Slides imports
import Slide1 from "./Slides/Slide1/Slide1";
import Slide2 from "./Slides/Slide2/Slide2";
import Slide3 from "./Slides/Slide3/Slide3";
import Slide4 from "./Slides/Slide4/Slide4";

interface Props {
	currentSlide: number;
	targetRef: RefObject<HTMLDivElement>;
    setCurrentSlide: (num: number) => void
}

export default function HelpBlock({ currentSlide, targetRef, setCurrentSlide }: Props) {
	const slidersList = [
		{
			sliderBtn: "Прямой поставщик тканей оптом",
			component: <Slide1 />,
		},
		{
			sliderBtn: "Купить ткани по оптовым ценам",
			component: <Slide2 />,
		},
		{
			sliderBtn: "Закупка ткани оптом для пошива",
			component: <Slide3 />,
		},
		{
			sliderBtn: "ПОСТАВКИ И ПОМОЩЬ",
			component: <Slide4 />,
		},
	];

	return (
		<>
			<div className={styles.helpBlock} ref={targetRef}>
				<div className={styles.container}>
					<div className={styles.controls__wrapper}>
						{slidersList.map((item, index) => (
							<button
								className={`${styles.controlBtn} ${
									index == currentSlide
										? styles.btn__current
										: ""
								}`}
								key={item.sliderBtn}
								onClick={() => setCurrentSlide(index)}
							>
								{item.sliderBtn}
							</button>
						))}
					</div>

					<div className={styles.content}>
						{slidersList[currentSlide].component}

						<Image
							src={decor}
							alt=""
							className={styles.decoration}
						/>
					</div>
				</div>

				<div className={styles.bg}></div>
			</div>
		</>
	);
}
