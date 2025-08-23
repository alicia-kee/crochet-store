import Footer from '../Components/Footer.jsx'

function FAQ(){
    return(
    <div className="faq-page">
        <div className="faq-body">
            <div className="faq-title">FAQ</div>
            <hr className="faq-decorative-line"></hr>
            <div className="question-box">
                <div className="question-title">Receiving Your Order</div>
                <div className="question-answer">You will be contacted through email following your purchase where we will arrange for a pick up or drop off of your product at an agreed time & location.</div>
                <div className="question-answer">Please note: This is a Winnipeg-based small business, orders can only be fulfilled within Winnipeg at this time.</div>
            </div>

            <div className="question-box">
                <div className="question-title">Return Policy</div>
                <div className="question-answer">I do not accept returns, exchanges, and refunds at this moment.</div>
            </div>

            <div className="question-box">
                <div className="question-title">Product Care</div>
                <div className="question-answer">For best care, please hand-wash gently and avoid prolonged sunlight exposure to prevent discoloration!</div>
            </div>

            <div className="question-box">
                <div className="question-title">Pricing</div>
                <div className="question-answer">Every item is handmade with care. Product prices take into account the time and skill involved, the size and complexity of the design, and the cost of materials.</div>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default FAQ