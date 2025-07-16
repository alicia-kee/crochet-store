import pfp from '../assets/pfp.png';
import {Link} from "react-router-dom"

function NavigationBar(){
    return(
        <div className="navigation-bar">
            <img className="profile-pic" src={pfp} alt="Profile Picture"></img>

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