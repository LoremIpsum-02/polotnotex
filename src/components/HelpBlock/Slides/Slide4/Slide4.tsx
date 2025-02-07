import styles from "./Slide4.module.css";

import SiteBtn from "@/components/UI/button/SiteBtn";
import FormPolicyAgreement from "@/components/UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteInput from "@/components/UI/input/SiteInput";

export default function Slide4() {
	return (
		<>
			<div className={styles.slide4__container}>
				<p className={styles.subtitle}>
					Воспользуйтесь меню этого сайтбара, и получите
					детализированное описание параметров сотрудничества ткани
					оптом
				</p>

				<div className={styles.warningTitle__wrapper}>
					<h2>внимание</h2>

					<p className={styles.subtitle}>
						Все предложения, связанные с быстротой поставки ткани,
						доступны после первого закупа, с отметкой вашего
						персонального менеджера
					</p>
				</div>

				<div className={styles.form__wrapper}>
					<h2>Чтобы кУпить ТКАНЬ ПО ОПТОВОЙ ЦЕНЕ ИЗУЧИТЕ</h2>

					<p className={styles.subtitle}>
						НАШИ ПРЕДЛОЖЕНИЯ И ВОСПОЛЬЗУЙТЕСЬ УСЛУГОЙ КОСУЛЬТАНТА ПО
						ПОДБОРУ ТКАНИ
					</p>

					<form action="#" className={styles.form}>
						<SiteInput placeholder="Имя" />
						<SiteInput placeholder="Эл. почта" />
						<SiteInput placeholder="Тел" />
						<SiteBtn>Смотреть все</SiteBtn>
					</form>

					<FormPolicyAgreement />
				</div>

				<p className={styles.subtitle}>
					Данный блок полностью посвящен условиям сотрудничества.
					Главным факторам качественного сервиса по продажам ткани вы
					считаете - когда стороны закрепили ответственных лиц, и
					указали наиболее удобную форму для переписки.
				</p>
			</div>
		</>
	);
}
