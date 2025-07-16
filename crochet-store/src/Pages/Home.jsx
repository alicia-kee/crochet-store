import Header from '../Components/Header.jsx' 
import BestSellers from '../Components/BestSellers.jsx'
import CategoryButtons from '../Components/CategoryButtons.jsx'
import Footer from '../Components/Footer.jsx'

function Home(){
    return(
        <div className="home-page">
            <Header/>
            <BestSellers/>
            <CategoryButtons/>
            <Footer/>
        </div>
        //enclose all components in a fragment, an empty set of angled brackets
    );
}

export default Home