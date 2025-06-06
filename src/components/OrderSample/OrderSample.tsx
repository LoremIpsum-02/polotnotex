import styles from "./OrderSample.module.css";

import { useState } from "react";
import SiteInput from "@/components/UI/input/SiteInput";
import FormPolicyAgreement from "@/components/UI/FormPolicyAgreement/FormPolicyAgreement";
import SiteBtn from "@/components/UI/button/SiteBtn";
import { useRouter } from "next/navigation";

interface Props {
	fabricName?: string;
    fabricId?: string | number,
}

export default function OrderSample({ fabricName, fabricId }: Props) {
	const [formData, setFormData] = useState({
        fabricId: fabricId || '-',
		phoneNumber: ``,
		name: ``,
		comment: ``,
	});

    const router = useRouter()

	async function sendForm(e: React.FormEvent) {
		e.preventDefault();

		const response = await fetch("/api/proxy", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				billing: {
					first_name: formData.name,
					phone: formData.phoneNumber,
					email: "test@example.com", // WooCommerce requires an email
				},
				meta_data: [
					{
						key: "comment",
						value: formData.comment,
					},
				],
				line_items: [], // Add products if needed
			}),
		});

		const data = await response.json();

        localStorage.setItem('thankReason', 'order')
        router.push('/thank-you')
	}
	return (
		<>
			<div className={styles.orderSample}>
				<div className={styles.titles__wrapper}>
					<h2 className={styles.fabricName}>{fabricName}</h2>
				</div>

				<form
					action="#"
					className={styles.form}
					onSubmit={(e) => sendForm(e)}
				>
					<div className={styles.inputs__wrapper}>
						<SiteInput
							var2
							value={formData.phoneNumber}
							onChange={(e) =>
								setFormData({
									...formData,
									phoneNumber: e.target.value,
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
