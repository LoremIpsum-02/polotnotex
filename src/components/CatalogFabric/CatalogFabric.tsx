"use client";

import styles from "./CatalogFabric.module.css";

import { useEffect, useState } from "react";
import FilterCatalog from "./FilterCatalog/FilterCatalog";
import { catalog_fabricDescriptions, fabricList } from "@/actions";
import CatalogItem from "./CatalogItem/CatalogItem";
import Image from "next/image";
import arrow__showAll from "@/assets/media/catalog/show-all-block/arrow-down.png";

interface FilterOption {
	type: string;
	availability: string[];
	subtypes: string[];
}

export default function CatalogFabric() {
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
	const [filterOption, setFilterOption] = useState<FilterOption>({
		type: "all",
		availability: [],
		subtypes: [],
	});

	const fabricDescriptions = catalog_fabricDescriptions();
	const [currentFabricDescription, setCurrentFabricDescription] = useState({
		type: ``,
		subtype: ``,
		description: ``,
	});

    async function getProducts() {
        const response = await fabricList()
        setDefaultCatalogList(response)
    }

	function filterCatalog() {
		let result = defaultCatalogList;

		if (filterOption.type !== "all") {
			result = result.filter(
				(item:any) =>
					item.type.toLowerCase() == filterOption.type.toLowerCase()
			);
		}

		if (filterOption.availability.length > 0) {
			result = result.filter((item:any) =>
				filterOption.availability.includes(item.availability)
			);
		}

		if (filterOption.subtypes.length > 0) {
			result = result.filter((item:any) =>
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
		} 
        else {
            let result: any = listAll.find(
				(item) =>
					item.type?.toLowerCase() ==
					filterOption.type.toLowerCase()
			);
			setCurrentFabricDescription(result);
        }
	}

    useEffect(() => {
        getProducts()
    }, [])
    
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

	return (
		<>
			<div className={styles.catalogFabric}>
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
								.map((item:any) => (
									<CatalogItem
										fabricItem={item}
										key={item.id}
									/>
								))}
						</div>

						{/* <button className={styles.showAll__container}>
                            <div className={styles.showAll__text}>
                                <p>
                                    Смотреть все ткани:{" "}
                                </p>
                                {filterOption.type == 'all' ? 'Все ткани' : filterOption.type}
                            </div>

                            <hr className={styles.showAll__line} />

                            <Image src={}
                        </button> */}
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
					<></>
				)}
			</div>
		</>
	);
}
