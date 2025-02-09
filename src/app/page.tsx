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

export default function Home() {
	
	return (
		<div className={styles.page}>
            <SiteHeader />
			<TitleBlock/>
            <FabricSelector/>
            <CatalogFabric/>
            <OrderFabric/>
            <AdvantagesSection/>
            <PartnershipBlock/>
            <HelpBlock/>
            <FeaturesSection/>
            <FAQSection/>
            <OurCompanyBlock/>
            <SupportBlock/>
            <FabricDescription/>
		</div>
	);
}
