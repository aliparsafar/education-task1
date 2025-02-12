import { Leftsidehead } from "./leftsidehead";
import { Righsidehead } from "./rightsidehead";
import styles from "./head.module.css"

export function Header(){
    return(
        <header className={styles.head}>
            <Leftsidehead />
            <Righsidehead />
            
        </header>
    )
}