import ProductCard from './ProductCard.jsx'
import poohBearPic from '../assets/pooh-bear.jpeg'
import spidermanPic from '../assets/spiderman.jpeg'
import snoopyPic from '../assets/big-snoopy.jpeg'
import miffyPouchPic from '../assets/miffy-pouch.jpeg'
import kuromiPic from '../assets/kuromi.jpeg'

function CharacterProducts(){
    return(
        <div className="character-products-container">
            <div className="product-category-title">Famous Characters</div>

            <div className="character-product-cards">
                <ProductCard image={poohBearPic} productName="Winnie the Pooh" price="$15.00"/>
                <ProductCard image={spidermanPic} productName="Hanging Spider-Man" price="$12.00"/>
                <ProductCard image={snoopyPic} productName="Large Snoopy" price="$30.00"/>
                <ProductCard image={miffyPouchPic} productName="Miffy Pouch" price="$25.00"/>
                <ProductCard image={kuromiPic} productName="Kuromi Keychain" price="$17.00"/>
            </div>
        </div>
    );
}

export default CharacterProducts