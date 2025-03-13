import styles from '../css/About.module.css'
import {Link} from 'react-router-dom'

const About = ()=>{
    return(
        <>
            <div className={styles.cover}>
                <h1>About us</h1>
            </div>
            
            <div className={styles.content}>
                
                <br />
                <h2>Trustworthy</h2><br />
                <h3>All Patient’s content is checked by health professionals so you can trust its accuracy, 
                    authority, and it being up to date. 
                    Everything on Patient meets the highest standards of clinical accuracy and ethical integrity.
                </h3>
                <br /><br />
                <h2>Standing out from the rest</h2><br />
                <h3>With so much health information available from so many different sources it is difficult to 
                    know what to trust. We understand how important it is to be able to trust what you read and
                    view, so everything we produce is checked and reviewed by health professionals. 
                    Patient’s health information is trusted and used by healthcare professionals around the world 
                    as well as their patients.
                </h3>
                <br /><br />
                <h2>How it works</h2><br />
                <h3>🔹Enter Your Symptoms – Describe what you’re feeling in a few simple steps.</h3>
                <h3>🔹Get Possible Insights – Receive possible conditions and recommended next steps.</h3>
                <h3>🔹Take Action – Learn whether to self-care, seek medical advice, or get emergency help.</h3>
                <br /><br />
                <h2>Why Choose Us?</h2><br />
                <h3>🔹 User-Friendly Interface – Easy-to-use platform for quick symptom checks.</h3>
                <h3>🔹 Privacy & Security – Your health data is protected and confidential.</h3>
                <h3>🔹 24/7 Availability – Get insights anytime, anywhere.</h3>
                <br /><br />
                
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
export default About