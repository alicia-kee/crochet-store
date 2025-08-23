import ProductCard from './ProductCard.jsx'
import blackBeePic from '../assets/blackBee.jpeg'
import poohBearPic from '../assets/pooh-bear.jpeg'
import spidermanPic from '../assets/spiderman.jpeg'
import lily2Pic from '../assets/lily-of-valley(2).jpg'
import garfieldPic from '../assets/garfield.jpeg'
import snoopyPic from '../assets/big-snoopy.jpeg'
import kirbyBunnyPic from '../assets/kirby-bunny-hat.jpeg'

function BestSellers(){
    return(
        <div className="best-sellers-section">
            <p className="best-sellers-title">✿ Best Sellers ✿</p>
            <hr className="decorative-line"></hr>
            <div className="best-sellers-product-cards">
                <ProductCard image={poohBearPic} productName="Winnie the Pooh" price="$15.00"/>
                <ProductCard image={blackBeePic} productName="Bumblebee" price="$10.00"/>
                <ProductCard image={spidermanPic} productName="Hanging Spider-Man" price="$12.00"/>
                <ProductCard image={lily2Pic} productName="Lily of the Valley (2 Flowers)" price="$7.00"/>
                <ProductCard image={garfieldPic} productName="Garfield" price="$15.00"/>
                <ProductCard image={snoopyPic} productName="Large Snoopy" price="$30.00"/>
                <ProductCard image={kirbyBunnyPic} productName="Mini Kirby with Bunny Hat" price="$14.00"/>
            </div>

        </div>
    );
}

export default BestSellers