import Footer from '../Components/Footer.jsx'
import pfp from '../assets/pfp.png';

function About(){
    return(
        <div className="about-page">
            <div className="about-body">
                <div className="about-title-and-pic">
                    About Craftie Lemen
                    <img className="about-pic" src={pfp} alt="Cartoon Artist Picture"></img>
                </div>

                <div className="about-text">
                    Hi everyone!
                    <br></br>
                    I’m a university student based in Winnipeg with a love for all things cozy and creative. I started crocheting four years ago as a relaxing hobby between classes, and I’ve been hooked ever since! Every piece in the shop is handmade with care, yarn, and a lot of love. Whether you’re shopping for yourself or someone special, I hope you find something you love!
                </div>
            </div>

            <Footer/>
        </div>
    );
}


export default About