import styles from '../css/Navbar.module.css'
import {Link} from 'react-router-dom'
import '/logo.png'
const Navbar = ()=>{
    return(
        <>
            <header>
                <nav>
                <img src="/logo.png" alt=""  className={styles.logo}/>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Disease'>Health Advice</Link></li>
                        <li><Link to='/Drugs'>Drugs & Supplements</Link></li>
                        <li><Link to='/Doctor'>Find a Doctor</Link></li>
                        <li><Link to='/News'>News</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Navbar