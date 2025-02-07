import styles from "./FormPolicyAgreement.module.css";

export default function FormPolicyAgreement() {
	return (
		<>
			<div className={styles.text__wrapper}>
				<input
					type="checkbox"
					name="agree"
					id="policyAgreement"
					className={styles.checkbox}
				/>
				<p className={styles.text}>
					Нажимая на кнопку “Отправить заявку”, вы соглашаетесь с{" "}
					<a href="#" className={styles.policy__link}>
						политикой конфиденциальности
					</a>
				</p>
			</div>
		</>
	);
}
