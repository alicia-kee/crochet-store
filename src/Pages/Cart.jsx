import { useCart } from "../Components/CartContext.jsx";
import Footer from '../Components/Footer.jsx'
import { useState } from "react"; 
import {Link} from "react-router-dom";

function Cart(){

    const { cartItems, removeFromCart, clearCart} = useCart(); //get list of items (carItems) & function removeFromCart() from CartContext.jsx

    //empty cart (print message):
    if (cartItems.length === 0) {
        return(
            <div className="empty-cart-page">
                <div className="empty-cart-body">
                    <div className="empty-cart-msg">Your cart is empty...</div>
                    <Link to="/Products" className="back-button"> ← Back to All Products</Link>
                </div>
                <Footer/>
            </div>
        );

    }

    // track values of the inputs
    const [fullName, setFullName] = useState(""); //Creates a state variable called fullName w/ value "" & gives a setter function called setFullName
    const [email, setEmail] = useState("");
    const [showModal, setShowModal] = useState(false); //default don't show order confirmation popup


    //function for when order button is clicked
    const handleOrder = () => {
        // Show popup (confirmation of order)
        setShowModal(true);
    };

    //function for when close confirmation of order popup
    const handleCloseModal = () => {
        setShowModal(false); //close popup

        // Clear the inputs and cart(resets)
        setFullName("");
        setEmail("");
        clearCart();
    }

    //reduce is a array method, takes each element (item) and combines to 1 result
    const totalCost = cartItems.reduce((sum, item) =>{
        const quantity = item.quantity || 1; //default 1 if no set quantity
        const numericString = item.price.replace(/[^0-9.]/g, ""); // remove anything that's not a digit
        const price = parseFloat(numericString); //parse
        return sum + price * quantity; //this product's price is its price*quantity, and add it to running sum of total cost
    }, 0);
    //initialize sum=0 before looping starts

    return(
    <div className="cart-page">
        <Link to="/Products" className="back-button"> ← Back to All Products</Link>
        <div className="cart-header">
            <div className="cart-title">My Cart</div>
            <hr className="cart-decorative-line"></hr>
        </div>

        <div className="cart-page-body">
            {/* Loops through every product in the cart (map) and show product's image, name, and price */}
            <div className="cart-items-list">
                {cartItems.map((item, i) => (
                <div key={i}>
                    <div className="cart-item">
                        <img className="cart-item-pic" src={item.image} alt={item.productName}/>
                        <div className="cart-item-info-container">
                            <div className="cart-item-info">{item.productName}</div>
                            <div className="cart-item-info">Price: {item.price} CAD</div>
                            <div className="cart-item-info">Quantity: {item.quantity || 1}</div>
                            <button className="cart-remove-btn" onClick={() => removeFromCart(i)}>Remove</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="cart-order-container">
                <div className="order-summary-container">
                    <div className="order-summary-title">Order Summary</div>
                    <hr className="order-summary-line"></hr>
                    <div className="cart-total-cost">Total: ${totalCost.toFixed(2)} CAD</div>
                </div>

                {/* Controlled Inputs */}
                <div className="order-input-boxes-section">
                    <div className="order-name-container">
                        <div className="order-input-text">Full Name:</div>
                        <input 
                            type="text" 
                            className="order-input-box" 
                            name="fullname" 
                            placeholder="Enter your Name"
                            value={fullName} /** value depends on state */
                            onChange={(e) => setFullName(e.target.value)} /** update state (e is event object React passes into your handler, e.target is the HTML element that triggered the event, e.target.value is current value of element.)*/
                        />
                    </div>
                    <div className="order-email-container">
                        <div className="order-input-text">Email Address:</div>
                        <input 
                            type="text" 
                            className="order-input-box" 
                            name="email" 
                            placeholder="Enter your Email"
                            value={email} /** value depends on state */
                            onChange={(e) => setEmail(e.target.value)} /** update state */
                        />
                    </div>
                </div>
                <button className="order-button" onClick={handleOrder} disabled={!fullName || !email}>Order Now</button>
                <div className="order-payment-message">You will be contacted via email about payment for your order! Thanks for shopping! ✿</div>
            </div>
        </div>

        {/* order confirmation popup */}
        {showModal && (
          <div className="modal-container">
            <div className="modal-box">
              <h2 className="modal-title">Thanks for your order {fullName}!</h2>
              <p>You will be contacted through email about payment and order pickup!</p>
              <button onClick={handleCloseModal} className="modal-close-btn">
                Close
              </button>
            </div>
          </div>
        )}  

        <Footer/>
    </div>
  );
}

export default Cart