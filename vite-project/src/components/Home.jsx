import styles from "../css/Home.module.css"; 
import {Link} from 'react-router-dom'
import '/healthyfood.webp'
import '/sleep.jpg'
const Home = ()=>{
    return(
        <>
            <div className={styles.top}>
                <h1>Health Information you can trust</h1>
                <h3>Our informations are verified by certified doctors.</h3>
            </div>
            <div className={styles.content}>
                <div className={styles.hfood}>
                    <img src="/healthyfood.webp" alt="" />
                    <h2>Diet</h2>
                    <h3>A balanced diet fuels your body with essential nutrients, promoting overall health and well-being. 
                        Include fresh fruits, 
                        vegetables, whole grains, and lean proteins while limiting processed foods and excess sugar.
                         Staying hydrated and practicing portion control can enhance digestion,
                         boost energy, and support a healthy lifestyle. Eat smart, live well!
                    </h3>
                </div>
                <div className={styles.sleep}>
                    <img src="/sleep.jpg" alt="" />
                    <h2>Sleep</h2>
                    <h3>Sleep is essential for physical and mental well-being. Aim for 7-9 hours of restful sleep 
                        each night to improve focus, mood, 
                        and overall health. Maintain a consistent sleep schedule,
                         avoid screens before bed, and create a relaxing bedtime routine.
                         Quality sleep boosts immunity, enhances memory, and keeps you energized
                    </h3>
                </div>
            </div>
            <footer>
                <h2>Quick Links</h2>
                <div className={styles.foot}>
                <div className={styles.foot1}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Disease'>Health Advice</Link></li>
                    </ul>
                </div>
                <div className={styles.foot2}>
                    <ul>
                        <li><Link to='/Drugs'>Drugs & Supplements</Link></li>
                        <li><Link to='/Doctor'>Find a Doctor</Link></li>
                        <li><Link to='/News'>News</Link></li>
                    </ul>
                </div>
                </div>
                <center><p>© ABC Private Limited. All rights reserved.</p></center>
            </footer>
        </>
    )
}
export default Home 