import insta from '../assets/instagram-brands.svg';
import mail from '../assets/envelope-solid.svg';

function Footer(){

    const instaClick = () => {
    window.open("https://www.instagram.com/craftie.lemen?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
    };

    const emailClick = () => {
    window.open("mailto:craftie.lemen@gmail.com", "_blank");
    };

    return(
        <footer>
            <div className="footer-container">
                <div className="contact-container">
                    <p className="footer-title">Let’s stay in touch — reach out anytime with questions!</p>
                    <div className="instagram-container">
                        <img className="contact-icon" src={insta} alt="Instagram Logo" onClick={instaClick}></img>
                        <a className="footer-contact-link" onClick={instaClick}>craftie.lemen</a>
                    </div>
                    <div className="email-container">
                        <img className="contact-icon" src={mail} alt="Email Logo" onClick={emailClick}></img>
                        <a href="#" className="footer-contact-link" onClick={emailClick}>craftie.lemen@gmail.com</a>
                    </div>
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