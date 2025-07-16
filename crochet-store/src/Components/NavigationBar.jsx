import pfp from '../assets/pfp.png';
import {Link} from "react-router-dom"

function NavigationBar(){
    return(
        <div className="navigation-bar">
            <img className="profile-pic" src={pfp} alt="Profile Picture"></img>
            {/* <nav className="navigation-bar-links">
                <ul>
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">Home</a></li> 
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">Products</a></li>
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">Delivery</a></li>
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">About</a></li>
                </ul>
            </nav> */}

            <div className="navigation-bar-links">
                <Link to="/" className="navigation-bar-text">Home</Link>
                <Link to="/Products" className="navigation-bar-text">Products</Link>
                <Link to="/Delivery" className="navigation-bar-text">Delivery</Link>
                <Link to="/About" className="navigation-bar-text">About</Link>
            </div>


        </div>    

    );
}

export default NavigationBar