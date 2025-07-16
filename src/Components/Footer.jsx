import insta from '../assets/instagram-brands.svg';
import mail from '../assets/envelope-solid.svg'

function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="contact-container">
                    <p className="footer-title">Contact:</p>
                    <div className="instagram-container">
                        <img className="contact-icon" src={insta} alt="Instagram Logo"></img>
                        <a href="#" className="footer-contact-link">craftie.lemen</a>
                    </div>
                    <div className="email-container">
                        <img className="contact-icon" src={mail} alt="Email Logo"></img>
                        <a href="#" className="footer-contact-link">craftie.lemen@gmail.com</a>
                    </div>
                </div>
                <div className="links-container">
                    <p className="footer-title">Links:</p>
                    {/* <ul>
                        <li><a href="#" className="footer-link">Home</a></li>
                        <li><a href="#" className="footer-link">Products</a></li>
                        <li><a href="#" className="footer-link">Delivery Information</a></li>
                        <li><a href="#" className="footer-link">About</a></li>
                    </ul> */}
                    <a href="#" className="footer-link">Home</a>
                    <a href="#" className="footer-link">Products</a>
                    <a href="#" className="footer-link">Delivery Information</a>
                    <a href="#" className="footer-link">About</a>
                </div>
            </div>
            <div className="copyright-container">
                <p className="copyright-text">&copy; {new Date().getFullYear()} Alicia Kee</p>
            </div>
            
        </footer>
    );
}
//&copy; is the copyright symbol
export default Footer