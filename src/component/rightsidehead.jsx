import styles from "./rightsidehead.module.css"
export function Righsidehead(){
    return(
        <div className={styles.rightsidehead}>
            <div>
            <p className={styles.welcome}>Welcome to Little Learners Academy</p>
            <h6>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h6>
            <p className={styles.second}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div className={styles.buttom}>
                <div>
                <span>+7000</span>
                <p>Students Passed Out</p>
                </div>
                <div>
                <span>+37</span>
                <p>Awards & Recognitions</p>
                </div>
                <div>
                <span>+15</span>
                <p>Experience Educators</p>
                </div>
                
                
            </div>
        </div>
    )
}