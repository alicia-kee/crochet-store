import {Link} from "react-router-dom"
import NavigationBar from '../Components/NavigationBar.jsx'
import Header from '../Components/Header.jsx' 
import BestSellers from '../Components/BestSellers.jsx'
import CategoryButtons from '../Components/CategoryButtons.jsx'
import Footer from '../Components/Footer.jsx'

function Home(){
    return(
        <div className="home-page">

            {/* delete this later, just testing page link here */}
            {/* <Link to="/Products">Products</Link>
            <Link to="/Delivery">Delivery</Link>
            <Link to="/About">About</Link> */}

            <Header/>
            <BestSellers/>
            <CategoryButtons/>
            <Footer/>
        </div>
        //enclose all components in a fragment, an empty set of angled brackets
    );
}

export default Home