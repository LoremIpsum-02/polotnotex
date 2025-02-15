'use client'

import styles from './page.module.css'

import SiteHeader from '@/components/SiteHeader/SiteHeader'
import SiteFooter from '@/components/SiteFooter/SiteFooter'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ThankYou() {
    const [text, setText] = useState<string | null>()
    const router = useRouter()

    function getText(){
        const result = localStorage.getItem('thankReason')

        if(result == 'form') return 'Спасибо за обращение в компанию ПОЛОТНО-ТЕКС, в течении ближайшего времени Мы с Вами свяжемся!'
        if(result == 'order') return 'Спасибо что заказали ткань на нашем сайте. Наш менеджер свяжется с Вами в ближайшее время, по обсуждению доставки!'
        else{
            router.replace('/')
        }
    }
    
    useEffect(() => {
        setText(getText())
    }, [])
  return (
    <>
        <SiteHeader/>
        <div className={styles.thankYou__page}>
            {text ? (
                <>
                    <h2>
                        СПАСИБО
                    </h2>
                    <div className={styles.text}>
                        {text}
                    </div>
                </>
            ) : (
                <>
                    <h1>
                        Загрузка...
                    </h1>
                </>
            )}
        </div>
        <SiteFooter />
    </>
  )
}
