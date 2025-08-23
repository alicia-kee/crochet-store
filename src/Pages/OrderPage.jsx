// import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer.jsx'
import { useCart } from "../Components/CartContext.jsx";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import {Link} from "react-router-dom";

function OrderPage(){

    const location = useLocation(); //info about the current route/location
    const { image, productName, price } = location.state || {}; //get info passed in as state

    const { addToCart } = useCart();  // get addToCart function

    if(!productName){ //no product exists
        return(
            <div className="no-product-page">
                <div className="no-product-body">
                    <div className="no-product-msg">Sorry, we could not find the product you are looking for :(</div>
                    <Link to="/Products" className="back-button"> ← Back to All Products</Link>
                </div>
                <Footer/>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart({ productName, price, image, quantity}); // push product into cart
        setQuantity("1");
    };

    // track quantity input
    const [quantity, setQuantity] = useState("1");


    return(
        <div className="order-page">

            <Link to="/Products" className="back-button"> ← Back to All Products</Link>

            <div className="order-body">
                <img src={image} className="order-pic"></img>
                <div className="order-text-container">
                    <div className="order-product-name">{productName}</div>
                    <div className="order-price">{price} CAD</div>
                    <hr className="order-decorative-line"></hr>

                    {/* Controlled Select */}
                    <div className="order-quantity-container">
                        <div className="order-input-text">Quantity:</div>
                        <select 
                            className="order-quantity-box" 
                            name="Quantity"
                            value={quantity} /**value depends on state, when state changes, React re-renders and change is updated */
                            onChange={(e) => setQuantity(e.target.value)} /**When user picks a number, onChange runs and calls setQuantity(), updating and storing it in a React state */
                        >   
                            {/* The 1-10 quantity options */}
                            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>

                    <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default OrderPage