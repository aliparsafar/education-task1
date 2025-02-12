import styles from "./sectionour.module.css"
export function Sectionourtestimonials(){
    return(
        <section className={styles.sectionour}>
            <div className={styles.content}>
                <p className={styles.happy}>Their Happy Words 🤗</p>
                <h6>Our Testimonials</h6>
                <p className={styles.test}>Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
            </div>
            <div className={styles.cardsecond}>
                <div className={styles.card}>
                    <img src="src/assets/profile container.svg" alt="" />
                    <h6>Jennifer B</h6>
                    <img src="src/assets/container.svg" alt="" className={styles.star}/>
                    <p>Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!</p>
                </div>
                <div className={styles.card}>
                    <img src="src/assets/profile container (1).svg" alt="" />
                    <h6>David K</h6>
                    <img src="src/assets/container.svg" alt="" className={styles.star}/>
                    <p>Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.</p>
                </div>
                <div className={styles.card}>
                    <img src="src/assets/profile container (2).svg" alt="" />
                    <h6>Emily L</h6>
                    <img src="src/assets/container.svg" alt="" className={styles.star}/>
                    <p>My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.</p>
                </div>
            </div>
        </section>
    )
}