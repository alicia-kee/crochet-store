import NavigationBar from '../Components/NavigationBar.jsx'
import Footer from '../Components/Footer.jsx'
import Animals from '../Components/AnimalProducts.jsx'
import FamousCharacters from '../Components/CharacterProducts.jsx'
import Other from '../Components/OtherProducts.jsx'

function Products(){
    return(
        <div className="products-page">
            <div className="products-page-message">View our full range of crochet creations — crafted with care, charm, and a whole lot of yarn.</div>
            <Animals/>
            <FamousCharacters/>
            <Other/>
            <Footer/>
        </div>
    );
}

export default Products