"use client";

import styles from "./ImageSlider.module.css";

import { useState } from "react";
import Image from "next/image";

import icon__prev from "@/assets/media/help-block/slides/slider__prev.png";
import icon__next from "@/assets/media/help-block/slides/slider__next.png";

export default function ImageSlider({ images }: any) {
	const imagesList = images;

	const [currentSlide, setCurrentSlide] = useState<number>(0);
	function slide__prev() {
		if (currentSlide - 1 < 0) setCurrentSlide(imagesList.length - 1);
		else setCurrentSlide(currentSlide - 1);
	}
	function slide__next() {
		if (currentSlide + 1 >= imagesList.length) setCurrentSlide(0);
		else setCurrentSlide(currentSlide + 1);
	}

	return (
		<>
			<div className={styles.slider}>
				<div className={styles.image__wrapper}>
					<Image
						src={imagesList[currentSlide]}
						alt=""
						className={styles.sliderImage}
					/>
				</div>

				<div className={styles.slides__pagination}>
					{imagesList.map((_: any, index: number) => (
						<button
							key={index}
							className={`${styles.paginationItem} ${
								currentSlide == index
									? styles.pagination__current
									: ""
							}`}
							onClick={() => setCurrentSlide(index)}
						></button>
					))}
				</div>

				<div className={styles.controlBtns}>
					<button
						className={`${styles.controlBtn} ${styles.btn__prev}`}
						onClick={() => slide__prev()}
					>
						<Image
							src={icon__prev}
							alt=""
							className={styles.btnIcon}
						/>
					</button>

					<button
						className={`${styles.controlBtn} ${styles.btn__next}`}
						onClick={() => slide__next()}
					>
						<Image
							src={icon__next}
							alt=""
							className={styles.btnIcon}
						/>
					</button>
				</div>
			</div>
		</>
	);
}
