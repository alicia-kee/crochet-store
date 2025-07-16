import ProductCard from './ProductCard.jsx'
import blackBeePic from '../assets/blackBee.jpeg'
import dinoPic from '../assets/blue-dino.jpeg'
import chickPic from '../assets/chick-egg.jpeg'

function AnimalProducts(){
    return(
        <div className="animal-products-container">
            <div className="product-category-title">Animals</div>

            <div className="animal-product-cards">
                <ProductCard image={blackBeePic} productName="Bumblebee" price="$10.00"/>
                <ProductCard image={dinoPic} productName="Baby Dinosaur" price="$12.00"/>
                <ProductCard image={chickPic} productName="Chick in an Eggshell" price="$12.00"/>
            </div>
        </div>
    );
}

export default AnimalProducts