import styles from './Popup.module.css'

interface Props{
    show: boolean,
    setShow: (arg: boolean) => void,
    children: React.ReactNode,
}

export default function Popup({show, setShow, children}: Props) {
  return (
    <>
        <div className={`${styles.popup} ${show ? styles.visible : ''}`} onClick={e => setShow(false)}>
            <div className={styles.popup__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    </>
  )
}
