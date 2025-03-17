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
                    <img src="/healthyfood.webp" alt="" /><br /><br />
                    <h2>Diet</h2><br />
                    <h3>A balanced diet fuels your body with essential nutrients, promoting overall health and well-being. 
                        Include fresh fruits, 
                        vegetables, whole grains, and lean proteins while limiting processed foods and excess sugar.
                         Staying hydrated and practicing portion control can enhance digestion,
                         boost energy, and support a healthy lifestyle. Eat smart, live well!
                    </h3>
                </div>
                <div className={styles.sleep}>
                    <img src="/sleep.jpg" alt="" /><br /><br />
                    <h2>Sleep</h2><br />
                    <h3>Sleep is essential for physical and mental well-being. Aim for 7-9 hours of restful sleep 
                        each night to improve focus, mood, 
                        and overall health. Maintain a consistent sleep schedule,
                         avoid screens before bed, and create a relaxing bedtime routine.
                         Quality sleep boosts immunity, enhances memory, and keeps you energized
                    </h3>
                </div>
            </div>
            <div className={styles.news}>
                <h1>📰 Latest News</h1><br />
                <h2>Flu season alert ⚕️</h2>
                <h3>Stay updated on flu outbreaks, symptoms, and prevention tips to keep yourself and your family safe.</h3>
                <br />
                <h2>New AI Technology Improves Early Disease Detection</h2>
                <h3>Discover how AI-driven symptom checkers are transforming healthcare by providing faster and more accurate preliminary diagnoses.</h3>
                <br />
                <h2>New Study Links Poor Sleep to Increased Heart Disease Risk</h2>
                <h3>Recent research suggests that getting less than six hours of sleep per night can significantly increase the risk of heart disease. Doctors recommend improving sleep hygiene to support heart health.</h3>
                <br />
                <h2>Rise in Seasonal Flu Cases: What You Need to Know</h2>
                <h3>Flu cases are on the rise in many regions. Learn how to protect yourself with vaccines, hygiene practices, and immunity-boosting habits.</h3>
                <br />
                <h2>Breakthrough in Cancer Treatment: New AI-Assisted Therapy Shows Promise</h2>
                <h3>Scientists have developed an AI-powered drug therapy that improves treatment for certain types of cancer. Experts say this could be a game-changer for early-stage cancer patients.</h3>
                <br />
                <h2>Experts Warn of Increasing Cases of Antibiotic Resistance</h2>
                <h3>The overuse of antibiotics is leading to drug-resistant bacteria, making infections harder to treat. Find out what you can do to prevent antibiotic misuse.</h3>



            </div>
            <div className={styles.tips}>
                <h1>🌿 Healthy Lifestyle Tips</h1><br />
                <h2>Eat Balanced Diet</h2>
                <h3>Include a variety of fruits, vegetables, whole grains, and lean proteins to maintain optimal health.</h3><br />
                <h2>Stay Hydrated</h2>
                <h3>Drink plenty of water throughout the day to keep your body energized and functioning properly.</h3><br />
                <h2>Exercise Regularly</h2>
                <h3>Aim for at least 30 minutes of physical activity daily to improve heart health and overall fitness.</h3><br />
                <h2> Get Enough Sleep</h2>
                <h3>Ensure 7-9 hours of quality sleep to support mental and physical recovery.</h3><br />
                <h2>Manage Stress</h2>
                <h3>Practice mindfulness, meditation, or deep breathing exercises to reduce stress and anxiety.</h3> <br />
                <h2>Get Sunlight & Fresh Air</h2>
                <h3>Spending time outdoors helps boost vitamin D levels and enhances mood.</h3>
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