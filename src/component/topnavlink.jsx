import { Linknav } from "./linknav";
import { Logotop } from "./logotop";
import styles from "./topnavlink.module.css"

 export function Topnavlink(){
    return(
        <nav className={styles.Topnavlink}>
        <Logotop />
        <Linknav />
       
        </nav>
    )
}