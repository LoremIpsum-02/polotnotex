import styles from "./SiteBtn.module.css";

import Image from "next/image";
import arrow_icon from '@/assets/media/btn/arrow.svg'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default function SiteBtn({ children, ...props }: Props) {
	return <button className={styles.btn} {...props}>{children} <Image src={arrow_icon} alt="" /></button>;
}
