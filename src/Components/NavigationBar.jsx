import pfp from '../assets/pfp.png';
import {Link} from "react-router-dom";
import cart from '../assets/cart-icon.svg';
import { useCart } from "../Components/CartContext.jsx"; 

function NavigationBar(){

    const { cartItems } = useCart();  //get cart items

    //calculate total quantity in cart
    const itemCount = cartItems.reduce((sum, item) =>{
        const q = parseFloat(item.quantity || 1); //parse
        return sum + q;
    }, 0);

    return(
        <div className="navigation-bar">
            <img className="profile-pic" src={pfp} alt="Profile Picture"></img>

            <div className="navigation-bar-links">
                <Link to="/" className="navigation-bar-text">Home</Link>
                <Link to="/Products" className="navigation-bar-text">Products</Link>
                <Link to="/FAQ" className="navigation-bar-text">FAQ</Link>
                <Link to="/About" className="navigation-bar-text">About</Link>
                <Link to="/Cart" className="navigation-bar-text">
                    <img className="cart-icon" src={cart} alt="Shopping Cart"></img>
                    {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
                </Link>
            </div>


        </div>    

    );
}

export default NavigationBar