import Link from "next/link";
import styles from "./FormPolicyAgreement.module.css";

export default function FormPolicyAgreement(props: any) {
	return (
		<>
			<div className={styles.text__wrapper}>
				<input
					type="checkbox"
					name="agree"
					className={styles.checkbox}
                    required
                    {...props}
				/>
				<label className={styles.text}>
					Нажимая на кнопку “Отправить заявку”, вы соглашаетесь с{" "}
					<Link href="/privacy" className={styles.policy__link}>
						политикой конфиденциальности
					</Link>
				</label>
			</div>
		</>
	);
}
