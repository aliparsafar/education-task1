import styles from "./sectionnavigate.module.css"
export function Sectionnavigate(){
    return(
        <section className={styles.sectionnavigate}>
        <div className={styles.content}>
            <p className={styles.explore}>Explore More</p>
            <h6>Navigate through our Pages</h6>
            <p className={styles.your}>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
        </div>
        <div className={styles.upcard}>
            <div className={styles.card}>
                <h6>About Us</h6>
                <img src="src/assets/container (1).svg" alt="" />
                <p>Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.</p>
                <button>Learn More <img src="src/assets/vector (stroke).svg" alt="" className={styles.icon} /></button>
               
            </div>
            <div className={styles.card}>
                <h6>Academics</h6>
                <img src="src/assets/container (1).svg" alt="" />
                <p>Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.</p>
                <button>Learn More <img src="src/assets/vector (stroke).svg" alt="" className={styles.icon} /></button>  
               
            </div>
        </div>
        <div className={styles.downcard}>
        <div className={styles.card}>
                <h6>Student Life</h6>
                <img src="src/assets/container (1).svg" alt="" />
                <p>Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces. </p>
                <button>Learn More <img src="src/assets/vector (stroke).svg" alt="" className={styles.icon} /></button>  
               
            </div>
            <div className={styles.card}>
                <h6>Admissions</h6>
                <img src="src/assets/container (1).svg" alt="" />
                <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
                <button>Learn More <img src="src/assets/vector (stroke).svg" alt="" className={styles.icon} /></button>  
               
            </div>
        </div>
        </section>
    )
}