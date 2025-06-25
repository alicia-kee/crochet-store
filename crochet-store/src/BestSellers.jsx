import ProductCard from './ProductCard.jsx'
import blackBeePic from './assets/blackBee.jpeg'
import poohBearPic from './assets/pooh-bear.jpeg'
import spidermanPic from './assets/spiderman.jpeg'

function BestSellers(){
    return(
        <div className="best-sellers-section">
            <p className="best-sellers-title">Best Sellers</p>
            <hr className="decorative-line"></hr>
            <div className="best-sellers-product-cards">
                <ProductCard image={poohBearPic} productName="Winnie the Pooh" price="$15.00"/>
                <ProductCard image={blackBeePic} productName="Bumblebee" price="$10.00"/>
                <ProductCard image={spidermanPic} productName="Hanging Spider-Man" price="$12.00"/>
            </div>

        </div>
    );
}

export default BestSellers