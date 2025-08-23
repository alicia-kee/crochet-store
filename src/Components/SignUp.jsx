//Sign-up for mailing list
import { useState } from "react";

function SignUp(){
    const [signup, setSignUp] = useState(""); //create state
    const [subscribed, setSubscribed] = useState(false);

    const handleSignUp = () =>{
        if (signup.trim() === ""){ //if hit subscribe but no input, nothing happens
            setSubscribed(false);
            return;
        } 

        setSubscribed(true); //show thank you message
        setSignUp("") //reset input box
    }

    return(
        <div className="sign-up-container">
            <div className="sign-up-title">Join our mailing list for exclusive discounts, updates on new drops and more!</div>
            <div className="sign-up-input-container">
                <input 
                    type="text" 
                    className="sign-up-input-box" 
                    name="signup" 
                    placeholder="Enter Email Address"
                    value={signup} 
                    onChange={(e) => setSignUp(e.target.value)} /**update state */
                />
                <div className="sign-up-button-container">
                    <button className="sign-up-btn" onClick={handleSignUp}>Subscribe!</button>
                </div>
            </div>

            {/* show message if subscribed */}
            {subscribed && (
                <div className="sign-up-message">
                    Thanks for subscribing!
                </div>
            )}
        </div>
    );
}

export default SignUp