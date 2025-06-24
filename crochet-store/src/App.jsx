import NavigationBar from './NavigationBar.jsx'
import Header from './Header.jsx' 
import Footer from './Footer.jsx'
import ProductCard from './ProductCard.jsx'

function App() {
    return(
        <div className="home-page">
            <NavigationBar/>
            <Header/>
            <ProductCard/>
            <Footer/>
        </div>
        //enclose all components in a fragment, an empty set of angled brackets
    );
}

export default App