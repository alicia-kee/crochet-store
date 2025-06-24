import pfp from './assets/pfp.png';

function NavigationBar(){
    return(
        <div className="navigation-bar">
            <img className="profile-pic" src={pfp} alt="Profile Picture"></img>
            <nav className="navigation-bar-links">
                <ul>
                    <li><a href="#">Home</a></li> 
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>    

    );
}

export default NavigationBar