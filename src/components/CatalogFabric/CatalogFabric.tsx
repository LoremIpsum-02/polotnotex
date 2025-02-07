"use client";

import styles from "./CatalogFabric.module.css";

import { useEffect, useState } from "react";
import FilterCatalog from "./FilterCatalog/FilterCatalog";
import { fabricList } from "@/actions";
import CatalogItem from "./CatalogItem/CatalogItem";

interface FilterOption{
    type: string,
    availability: string[]
}

export default function CatalogFabric() {
	const [defaultCatalogList, setDefaultCatalogList] = useState(fabricList());
	const [catalog, setCatalog] = useState(defaultCatalogList);

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

	const availabilityOptions = ["В наличии", "Под заказ"];

	const [filterOption, setFilterOption] = useState<FilterOption>({
		type: "all",
		availability: [],
	});

	function filterCatalog() {
		let result = defaultCatalogList;

		if (filterOption.type !== "all") {
            result = result.filter(
                (item) => item.type.toLowerCase() === filterOption.type.toLowerCase()
            );
        }

        if (filterOption.availability.length > 0) {
            result = result.filter(
                (item) => filterOption.availability.includes(item.availability)
            );
        }

		setCatalog(result);
	}

	useEffect(() => {
		if (filterOption.type == "all" && filterOption.availability.length == 0) {
			setCatalog(defaultCatalogList);
		} else filterCatalog();
	}, [filterOption]);

	return (
		<>
			<div className={styles.catalogFabric}>
				<FilterCatalog
					filterValue={filterOption}
					filterOptions={filterOptionsList}
					setFilter={setFilterOption}
					availabilityOptions={availabilityOptions}
				/>

				{catalog.length ? (
					<div className={styles.catalogList}>
						{catalog.map((item) => (
							<CatalogItem fabricItem={item} key={item.id} />
						))}
					</div>
				) : (
					<h1 className={styles.title__noProducts}>Товары не найдены</h1>
				)}
			</div>
		</>
	);
}
