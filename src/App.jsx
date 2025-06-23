import Header from './Header.jsx' //now can use in App component
import Footer from './Footer.jsx'
import ProductCard from './ProductCard.jsx'

function App() {
    return(
        <>
            <Header/>
            <ProductCard/>
            <Footer/>
        </>
        //enclose all components in a fragment, an empty set of angled brackets
    );
}

export default App
