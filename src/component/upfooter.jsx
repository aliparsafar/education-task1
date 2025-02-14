import styles from "./upfooter.module.css"
export function Upfooter(){
    return(
        <footer>
        <div className={styles.leftup}>
            <div>
            <div className={styles.webelieve}>
                <img src="src/assets/logo.svg" alt="" />
                <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
            </div>
            <div className={styles.addres}>
                
            <div className={styles.content}>
                <img src="src/assets/icon (1).svg" alt="" />
                <p>hello@littlelearners.com</p>
                </div>

                <div className={styles.content}> 
                    <img src="src/assets/icon (2).svg" alt="" />
                    <p>+91 91813 23 2309</p>
                    </div>
                
                <div className={styles.content}>
                    <img src="src/assets/icon (3).svg" alt="" />
                    <p>Somewhere in the World</p>
                    </div>
            </div>
            </div>
            <div className={styles.rightup}>
            <div className={styles.linkfirst}>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Our Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className={styles.linksecond}>
                <ul>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Our Vission</li>
                    <li>Awards and Recognitions</li>
                    <li>History</li>
                    <li>Teachers</li>
                </ul>
            </div>
            <div className={styles.linkthird}>
                <ul>
                    <li>Academics</li>
                    <li>Special Features</li>
                    <li>Gallery</li>
                </ul>
            </div>
            <div className={styles.linkfour}>
                <ul>
                    <li>Contact Us</li>
                    <li>Information</li>
                    <li>Map & Direction</li>
                </ul>
            </div>
        </div>
        </div>
        
        </footer>
    )
}