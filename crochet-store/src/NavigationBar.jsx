import pfp from './assets/pfp.png';

function NavigationBar(){
    return(
        <div className="navigation-bar">
            <img className="profile-pic" src={pfp} alt="Profile Picture"></img>
            <nav className="navigation-bar-links">
                <ul>
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">Home</a></li> 
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">Products</a></li>
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">Delivery</a></li>
                    <li className="navigation-bar-li"><a href="#" className="navigation-bar-text">About</a></li>
                </ul>
            </nav>
        </div>    

    );
}

export default NavigationBar