"use client";

import styles from "./CatalogFabric.module.css";

import { RefObject, useEffect, useState } from "react";

import FilterCatalog from "./FilterCatalog/FilterCatalog";
import { catalog_fabricDescriptions, fabricList } from "@/actions";
import CatalogItem from "./CatalogItem/CatalogItem";
import FabricCard from "../FabricCard/FabricCard";
import Popup from "../UI/popup/Popup";
import OrderSample from "../OrderSample/OrderSample";

interface FilterOption {
	type: string;
	availability: string[];
	subtypes: string[];
}

interface Props {
	preselectedFabric: FilterOption;
	productsRef: RefObject<HTMLDivElement>;
}

export default function CatalogFabric({
	preselectedFabric,
	productsRef,
}: Props) {
	const [defaultCatalogList, setDefaultCatalogList] = useState([]);
	const [catalog, setCatalog] = useState([...defaultCatalogList]);
	const [showAll, setShowAll] = useState<boolean>(true);
	const filterOptionsList = [
		{
			name: "ВСЕ полотна",
			value: "all",
		},
		{
			name: "Ткань ФУТЕР",
			value: "футер",
		},
		{
			name: "Ткань ФЛИС",
			value: "флис",
		},
		{
			name: "Ткань для термобелья",
			value: "Ткань для термобелья",
		},
	];
	const fabricSubtypes = [
		{
			type: "футер",
			subtypes: ["2-х нитка", "3-х нитка"],
		},
		{
			type: "флис",
			subtypes: ["односторонний", "двухсторонний", "Трикотаж на флисе"],
		},
	];

	const [currentSubtypes, setCurrentSubtypes] = useState([]);
	const availabilityOptions = ["В наличии", "Под заказ"];
	const [filterOption, setFilterOption] =
		useState<FilterOption>(preselectedFabric);

	const fabricDescriptions = catalog_fabricDescriptions();
	const [currentFabricDescription, setCurrentFabricDescription] = useState({
        title: ``,
		type: ``,
		subtype: ``,
		description: ``,
	});

	const [currentProduct, setCurrentProduct] = useState<any>(null);
	const [formOrder, setFormOrder] = useState<boolean>(false);
	const [productPopup, setProductPopup] = useState<boolean>(false);

	// Functions
	async function getProducts() {
		const response: any = await fabricList();
		setDefaultCatalogList(response);
	}

	function filterCatalog() {
		let result = defaultCatalogList;

		if (filterOption.type !== "all") {
			result = result.filter(
				(item: any) =>
					item.type.toLowerCase() == filterOption.type.toLowerCase()
			);
		}

		if (filterOption.availability.length > 0) {
			result = result.filter((item: any) =>
				filterOption.availability.includes(item.availability)
			);
		}

		if (filterOption.subtypes.length > 0) {
			result = result.filter((item: any) =>
				filterOption.subtypes.includes(item.subtype.toLowerCase())
			);
		}

		setCatalog(result);
	}

	function sortSubtypes() {
		const result: any = [];

		const val = fabricSubtypes.filter(
			(item) => item.type.toLowerCase() == filterOption.type.toLowerCase()
		);
		val.forEach((i) =>
			i.subtypes.forEach((subtype) => result.push(subtype))
		);

		setCurrentSubtypes(result);
	}

	function getFabricDescription() {
		const listAll = [...fabricDescriptions];
		if (filterOption.subtypes.length == 1) {
			let result: any = listAll.find(
				(item) =>
					item.subtype?.toLowerCase() ==
					filterOption.subtypes[0]?.toLowerCase()
			);

			setCurrentFabricDescription(result);
		} else {
			let result: any = listAll.find(
				(item) =>
					item.type?.toLowerCase() == filterOption.type.toLowerCase()
			);
			setCurrentFabricDescription(result);
		}
	}

	useEffect(() => {
		getProducts();
	}, []);

	useEffect(() => {
		if (
			filterOption.type == "all" &&
			filterOption.availability.length == 0
		) {
			setCatalog(defaultCatalogList);
		} else {
			filterCatalog();
			getFabricDescription();
		}

		sortSubtypes();
	}, [filterOption, defaultCatalogList]);

	useEffect(() => {
		setFilterOption(preselectedFabric);
	}, [preselectedFabric]);

	return (
		<>
			{currentProduct ? (
				<>
					<Popup show={productPopup} setShow={setProductPopup}>
						<FabricCard fabric_id={currentProduct?.id} />
					</Popup>

					<Popup show={formOrder} setShow={setFormOrder}>
						<h4>ЗАКАЗАТЬ ОБРАЗЕЦ ТКАНИ</h4>

						<OrderSample
							fabricName={`
                    ${currentProduct.type} ${currentProduct.subtype} ${currentProduct.density}, ${currentProduct.colors[0]}
                `}
						/>
					</Popup>
				</>
			) : (
				<></>
			)}

			<div className={styles.catalogFabric} ref={productsRef}>
				<FilterCatalog
					filterValue={filterOption}
					filterOptions={filterOptionsList}
					setFilter={setFilterOption}
					availabilityOptions={availabilityOptions}
					subtypes={currentSubtypes}
				/>

				{catalog.length ? (
					<div className={styles.list__wrapper}>
						<div className={styles.catalogList}>
							{catalog
								.slice(0, showAll ? catalog.length : 10) // Show only N items by default
								.map((item: any) => (
									<CatalogItem
										fabricItem={item}
										key={item.id}
										showPopup={setProductPopup}
										showForm={setFormOrder}
										setCurrentProduct={setCurrentProduct}
									/>
								))}
						</div>
					</div>
				) : (
					<h1 className={styles.title__noProducts}>
						Товары не найдены
					</h1>
				)}

				{filterOption.type != "all" ? (
					<div className={styles.fabricDescription__container}>
						<h2 className={styles.fabricDescription__title}>
							{currentFabricDescription.title}
						</h2>

						<div className={styles.fabricDescription__text}>
							{currentFabricDescription.description}
						</div>
					</div>
				) : (
					<div className={styles.fabricDescription__container}>
						<h2 className={styles.fabricDescription__title}>
							Ткани для пошива оптом на заказ
						</h2>

						<div className={styles.fabricDescription__text}>
							В современном текстильном производстве выбор
							подходящих тканей для пошива является важным этапом.
							Поставка тканей оптом на заказ предоставляет
							возможность значительно сократить затраты и
							упростить процесс создания качественной продукции.
							Расширенный ассортимент тканей позволяет выбрать
							наиболее подходящие материалы в зависимости от
							стилей и предпочтений клиентов. Приобрести ткани для
							постельного белья оптом можно у нас. Мы предлагаем
							уникальные и специализированные материалы. Оптовая
							закупка тканей дает возможность сэкономить средства
							и усилить конкурентные преимущества на рынке. <br /><br />

							Кроме того, мы предлагаем возможность доставки
							тканей по России, что значительно упрощает процесс
							закупки. Система логистики позволяет доставить
							материалы в кратчайшие сроки, обеспечивая при этом
							хранение и транспортировку тканей в надлежащих
							условиях. Это особенно важно, так как неправильное
							обращение с тканями может привести к ухудшению их
							качества. Выбирая нашего оптового поставщика тканей,
							вы получаете закупку тканей для пошива оптом на
							заказ, которая открывает перед вами множество
							возможностей. Правильный выбор материалов и удобные
							условия доставки станут залогом успешного бизнеса в
							текстильной отрасли!
						</div>
					</div>
				)}
			</div>
		</>
	);
}
