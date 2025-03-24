"use client";

import styles from "./page.module.css";

import TitleBlock from "@/components/TitleBlock/TitleBlock";
import FabricSelector from "@/components/FabricSelector/FabricSelector";
import AdvantagesSection from "@/components/AdvantagesSection/AdvantagesSection";
import CatalogFabric from "@/components/CatalogFabric/CatalogFabric";
import OrderFabric from "@/components/OrderFabric/OrderFabric";
import PartnershipBlock from "@/components/PartnershipBlock/PartnershipBlock";
import HelpBlock from "@/components/HelpBlock/HelpBlock";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import OurCompanyBlock from "@/components/OurCompanyBlock/OurCompanyBlock";
import FabricDescription from "@/components/FabricDescription/FabricDescription";
import SupportBlock from "@/components/SupportBlock/SupportBlock";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { useRef, useState } from "react";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import { usePathname } from "next/navigation";

export default function Home() {
	const pathname = usePathname();

	const [preselectedFilter, setPreselectedFilter] = useState({
		type: "all",
		subtypes: [],
		availability: [],
	});
	const [helpBlockSlider, setHelpBlockSlider] = useState<number>(3);
	const [supportSlide, setSupportSlide] = useState<number>(0);

	const productsRef = useRef<any>(null);

	const helpSectionRef = useRef<any>(null);
	const orderFabricRef = useRef<any>(null);
	const supportRef = useRef<any>(null);
	const faqRef = useRef<any>(null);
	const contactsRef = useRef<any>(null);

	const headerInfoMenu = [
		{
			name: "С чего начать",
			elementRef: helpSectionRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
				});
				setHelpBlockSlider(0);
			},
		},
		{
			name: "Оптовый отдел",
			elementRef: orderFabricRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			},
		},
		{
			name: "Бронь и закупка",
			elementRef: orderFabricRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			},
		},
		{
			name: "Поддержка",
			elementRef: supportRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
				});
			},
		},
		{
			name: "Возможности",
			elementRef: supportRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
				});
				setSupportSlide(1);
			},
		},
		{
			name: "Вопросы FAQ",
			elementRef: faqRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
				});
			},
		},
		{
			name: "Контакты",
			elementRef: contactsRef,
			handleClick: function () {
				this.elementRef.current?.scrollIntoView({
					behavior: "smooth",
				});
			},
		},
	];

	return (
		<>

			<div className={styles.page}>
				<SiteHeader
					selectFabric={setPreselectedFilter}
					productsRef={productsRef}
					menu__info={headerInfoMenu}
				/>
				<TitleBlock />
				<FabricSelector
					selectFabric={setPreselectedFilter}
					productsRef={productsRef}
				/>
				<CatalogFabric
					preselectedFabric={preselectedFilter}
					productsRef={productsRef}
				/>
				<OrderFabric targetRef={orderFabricRef} />
				<AdvantagesSection />
				<PartnershipBlock />
				<HelpBlock
					targetRef={helpSectionRef}
					currentSlide={helpBlockSlider}
					setCurrentSlide={setHelpBlockSlider}
				/>
				<FeaturesSection />
				<FAQSection targetRef={faqRef} />
				<OurCompanyBlock />
				<SupportBlock
					targetRef={supportRef}
					currentSlide={supportSlide}
					setCurrentSlide={setSupportSlide}
				/>
				<FabricDescription />
				<SiteFooter targetRef={contactsRef} />
			</div>
		</>
	);
}
