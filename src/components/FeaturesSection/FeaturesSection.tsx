import styles from './FeaturesSection.module.css'

import Image from 'next/image'
import features__pic1 from '@/assets/media/features-section/pic1.png'
import features__pic2 from '@/assets/media/features-section/pic2.png'
import features__pic3 from '@/assets/media/features-section/pic3.png'
import features__pic4 from '@/assets/media/features-section/pic4.png'

export default function FeaturesSection() {
    const featuresList = [
        {
            title: 'КАТАЛОГ ТКАНЕЙ',
            image: features__pic1,
        },
        {
            title: 'ОПТОВЫЕ ЦЕНЫ',
            image: features__pic2,
        },
        {
            title: 'БРОНЬ И ЗАКАЗЫ',
            image: features__pic3,
        },
        {
            title: 'СКЛАД ТКАНИ',
            image: features__pic4,
        },
    ]

  return (
    <>
        <div className={styles.featuresSection}>
            <div className={styles.cards__wrapper}>
                {featuresList.map(feature => (
                    <div className={styles.feature__card} key={feature.title}>
                        <Image src={feature.image} alt='' className={styles.image} />

                        <div className={styles.title__wrapper}>
                            <div className={styles.title}>
                                {feature.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
