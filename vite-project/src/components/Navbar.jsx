import '../css/Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Disease'>Disease</Link></li>
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