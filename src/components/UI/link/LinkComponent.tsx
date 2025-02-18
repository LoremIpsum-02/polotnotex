import styles from './LinkComponent.module.css'

export default function LinkComponent({href, children, props, white} : any) {
  return (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.linkComponent} ${white ? styles.white : ''}`}
        {...props}
    >
        {children}
    </a>
  )
}
