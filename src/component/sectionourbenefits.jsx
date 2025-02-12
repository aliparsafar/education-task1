import styles from "./sectionbenefit.module.css"
export function Sectionourbenefits(){
    return(
        <section className={styles.sectionbenefit}>
            <div className={styles.content}>
                <p className={styles.children}>Children Deserve Bright Future</p>
                <h6>Our Benefits</h6>
                <p className={styles.text}>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
            </div>
             <div className={styles.card}>
                <div className={styles.upcard}>
                    <div className={styles.cardbox}>
                        <img src="src/assets/icon container.svg" alt="" />
                        <h6>Holistic Learning Approach</h6>
                        <p>Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.</p>
                    </div>
                    <div className={styles.cardbox}>
                        <img src="src/assets/icon container (1).svg" alt="" />
                        <h6>Experienced Educators</h6>
                        <p>Our passionate and qualified teachers create a supportive and stimulating learning environment.</p>
                    </div>
                    <div className={styles.cardbox}>
                        <img src="src/assets/icon container (2).svg" alt="" />
                        <h6>Nurturing Environment</h6>
                        <p>We prioritize safety and provide a warm and caring atmosphere for every child.</p>
                    </div>
                </div>
                <div className={styles.downcard}>
                <div className={styles.cardbox}>
                        <img src="src/assets/icon container (3).svg" alt="" />
                        <h6>Play-Based Learning</h6>
                        <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                    </div>
                    <div className={styles.cardbox}>
                        <img src="src/assets/icon container (4).svg" alt="" />
                        <h6>Individualized Attention</h6>
                        <p>Our small class sizes enable personalized attention, catering to each child's unique needs.</p>
                    </div>
                    <div className={styles.cardbox}>
                        <img src="src/assets/icon container (5).svg" alt="" />
                        <h6>Parent Involvement</h6>
                        <p>We foster a strong parent-school partnership to ensure seamless communication and collaboration.</p>
                    </div>
                </div> 
            </div> 
        </section>
       
    )
}