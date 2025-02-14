import styles from "./downfooter.module.css"
export function Downfooter(){
    return(
        <div className={styles.downfooter}>
            <div className={styles.link}>
            <a href=""><p>Terms of Service</p></a>
            <a href="" className={styles.privacy}><p>Privacy Policy</p></a>
            <a href="" className={styles.cookie}><p>Cookie Policy</p></a>
            </div>
            <div className={styles.button}>
                <img src="src/assets/button.svg" alt="" className={styles.image1}/>
                <img src="src/assets/button (1).svg" alt="" />
                <img src="src/assets/button (2).svg" alt="" className={styles.image2}/>
            </div>
        </div>
    )
}