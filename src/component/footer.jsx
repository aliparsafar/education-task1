import { Upfooter } from "./upfooter";
import styles from "./footer.module.css"
import { Downfooter } from "./downfooter";
export function Footer(){
    return(
        <div className={styles.footer}>
            <Upfooter />
            <Downfooter />
        </div>
    )
}