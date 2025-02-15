import Image from 'next/image'
import styles from './Popup.module.css'

import closeIcon from '@/assets/media/close-icon.png'

interface Props{
    show: boolean,
    setShow: (arg: boolean) => void,
    children: React.ReactNode,
}

export default function Popup({show, setShow, children}: Props) {
    function closePopup(){
        setShow(false)
    }
  return (
    <>
        <div className={`${styles.popup} ${show ? styles.visible : ''}`} onClick={() => closePopup()}>
            <div className={styles.popup__content} onClick={e => e.stopPropagation()}>
                <button onClick={() => closePopup()} className={styles.closeBtn}>
                    <Image src={closeIcon} alt='' className={styles.closeIcon} />
                </button>

                {children}
            </div>
        </div>
    </>
  )
}
