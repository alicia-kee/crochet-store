import Header from '../Components/Header.jsx' 
import BestSellers from '../Components/BestSellers.jsx'
import SignUp from '../Components/SignUp.jsx'
import Footer from '../Components/Footer.jsx'

function Home(){
    return(
        <div className="home-page">
            <Header/>
            <BestSellers/>
            <SignUp/>
            <Footer/>
        </div>
        //enclose all components in a fragment, an empty set of angled brackets
    );
}

export default Home