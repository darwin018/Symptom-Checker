import styles from '../css/About.module.css'

const About = ()=>{
    return(
        <>
            <h1 className={styles.cover}>About us</h1>
            <div className={styles.content}>
                
                <br />
                <h2>Trustworthy</h2>
                <h3>All Patient’s content is checked by health professionals so you can trust its accuracy, 
                    authority, and it being up to date. 
                    Everything on Patient meets the highest standards of clinical accuracy and ethical integrity.
                </h3>
                <br />
                <h2>Standing out from the rest</h2>
                <h3>With so much health information available from so many different sources it is difficult to 
                    know what to trust. We understand how important it is to be able to trust what you read and
                    view, so everything we produce is checked and reviewed by health professionals. 
                    Patient’s health information is trusted and used by healthcare professionals around the world 
                    as well as their patients.
                </h3>
            </div>
        </>
    )
}
export default About