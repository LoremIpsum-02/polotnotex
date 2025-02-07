import styles from "./SiteFooter.module.css";

import Image from "next/image";
import picture from '@/assets/media/footer/picture.png'
import logo from '@/assets/media/logo/logo_header.png'
import decoration from '@/assets/media/decoration.png'

export default function SiteFooter() {
	return (
		<>
			<footer className={styles.footer}>
                <Image src={decoration} alt="" className={styles.decoration} />
				<div className={styles.container}>
					<div className={styles.contacts}>
						<h2>контакты</h2>

						<div className={styles.contacts__wrapper}>
							<div className={styles.contact__point}>
								153098 г. склад Текстиль град, Жеделева 21,
								склад 80
							</div>

							<div className={styles.contact__point}>
								Email: <a href="#">zakaz@polotnotex.ru</a>
							</div>

							<div className={styles.contact__point}>
								Тел: <a href="tel:8 901 690-09-07">8 901 690-09-07</a>
							</div>

							<div className={styles.contact__point}>
								КПП 5567890964
							</div>
						</div>
					</div>

                    <Image src={picture} alt="" className={styles.picture} />
				</div>

                <div className={styles.bottom}>
                    <Image src={logo} alt="Polotnotex" className={styles.logo} />
                </div>
			</footer>
		</>
	);
}
