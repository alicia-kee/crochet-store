import pfp from './assets/pfp.png';

function NavigationBar(){
    return(
        <div class="navigation-bar">
            <img class="profile-pic" src={pfp} alt="Profile Picture"></img>
            <nav class="navigation-bar-links">
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