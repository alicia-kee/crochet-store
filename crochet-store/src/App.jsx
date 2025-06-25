import NavigationBar from './NavigationBar.jsx'
import Header from './Header.jsx' 
import BestSellers from './BestSellers.jsx'
import Footer from './Footer.jsx'

function App() {
    return(
        <div className="home-page">
            <NavigationBar/>
            <Header/>
            <BestSellers/>
            <Footer/>
        </div>
        //enclose all components in a fragment, an empty set of angled brackets
    );
}

export default App