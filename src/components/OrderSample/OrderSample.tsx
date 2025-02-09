import styles from "./OrderSample.module.css";

import { useState } from "react";
import SiteInput from "../UI/input/SiteInput";
import FormPolicyAgreement from "../UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteBtn from "../UI/button/SiteBtn";

interface Props {
	fabricName: string;
}

export default function OrderSample({ fabricName }: Props) {
	const [formData, setFormData] = useState({
		tel: ``,
		name: ``,
		comment: ``,
	});
	return (
		<>
			<div className={styles.orderSample}>
				<div className={styles.titles__wrapper}>
					<h2 className={styles.title}>ЗАКАЗАТЬ ОБРАЗЕЦ ТКАНИ</h2>

					<h2 className={styles.fabricName}>{fabricName}</h2>
				</div>

				<form action="#" className={styles.form}>
					<div className={styles.inputs__wrapper}>
						<SiteInput
							var2
							value={formData.tel}
							onChange={(e) =>
								setFormData({
									...formData,
									tel: e.target.value,
								})
							}
							placeholder="Телефон"
						/>

						<SiteInput
							var2
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
							placeholder="Имя"
						/>
					</div>

					<textarea
						className={styles.input__comment}
						value={formData.comment}
						onChange={(e) =>
							setFormData({
								...formData,
								comment: e.target.value,
							})
						}
						placeholder="Комментарий"
					></textarea>
					<FormPolicyAgreement />

					<div className={styles.btn__wrapper}>
						<SiteBtn>Заказать</SiteBtn>
					</div>
				</form>

				<h2 className={styles.description}>
					Оставьте Ваши контакты, и наш специалист свяжется с Вами в
					ближайшее время
				</h2>
			</div>
		</>
	);
}
