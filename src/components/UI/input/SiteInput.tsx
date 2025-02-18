import styles from "./SiteInput.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	var2?: boolean;
}

export default function SiteInput({ var2, ...props }: InputProps) {
	return (
		<input
			{...props}
			className={var2 ? styles.input_var2 : styles.input}
			required
		/>
	);
}
