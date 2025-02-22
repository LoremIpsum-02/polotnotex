"use client";

import styles from "./CatalogFabric.module.css";

import { RefObject, useEffect, useState } from "react";
import FilterCatalog from "./FilterCatalog/FilterCatalog";
import { catalog_fabricDescriptions, fabricList } from "@/actions";
import CatalogItem from "./CatalogItem/CatalogItem";

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
		type: ``,
		subtype: ``,
		description: ``,
	});

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
							{currentFabricDescription.type}{" "}
							{currentFabricDescription?.subtype}
						</h2>

						<div className={styles.fabricDescription__text}>
							{currentFabricDescription.description}
						</div>
					</div>
				) : (
					<div className={styles.fabricDescription__container}>
						<h2 className={styles.fabricDescription__title}>
                        Флис
						</h2>

						<div className={styles.fabricDescription__text}>
                        Флисовая ткань по оптовым ценам от производителя. В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную и спортивную одежду, текстиль для дома и мебели. Производствам как крупного, так и мелкого звеньев будет полезно обратить внимание на это сырье. В статье пойдет речь о том,  что это за материал, какие у него плюсы и минусы, его разновидностях. Также здесь рассказывается об особенностях обработки материала и сфере его применения. <br /> <br />

                        Флисовая ткань по оптовым ценам от производителя. В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную и спортивную одежду, текстиль для дома и мебели. Производствам как крупного, так и мелкого звеньев будет полезно обратить внимание на это сырье. В статье пойдет речь о том,  что это за материал, какие у него плюсы и минусы, его разновидностях. Также здесь рассказывается об особенностях обработки материала и сфере его применения. <br /> <br />

                        Флисовая ткань по оптовым ценам от производителя. В текстильном деле широкое распространение получила флисовая ткань. Из этого материала шьют повседневную и спортивную одежду, текстиль для дома и мебели. Производствам как крупного, так и мелкого звеньев будет полезно обратить внимание на это сырье. В статье пойдет речь о том,  что это за материал, какие у него плюсы и минусы, его разновидностях. Также здесь рассказывается об особенностях обработки материала и сфере его применения.
						</div>
					</div>
				)}
			</div>
		</>
	);
}
