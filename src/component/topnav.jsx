import styles from "./topnav.module.css"
export function Topnav(){
    return(
        <nav className={styles.Topnav}>
            <p>Admission is Open, Grab your seat now</p>
            <img src="src/assets/icon.svg" alt="" />
        </nav>
    )
}