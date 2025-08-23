import ProductCard from './ProductCard.jsx'
import twoLilyPic from '../assets/lily-of-valley(2).jpg'
import fourLilyPic from '../assets/lily-of-valley(4).jpeg'
import rosesMagentaPic from '../assets/rose-pot1.jpeg'
import rosesPinkPic from '../assets/rose-pot-pink.jpeg'
import rosesPurplePic from '../assets/rose-pot-purple.jpeg'
import pumpkinHatPic from '../assets/pumpkin-hat.jpeg'
import muffinHatPic from '../assets/muffin-hat.jpeg'
import barbequePic from '../assets/BBQ-keychain.jpeg'
import lilyKeychainPic from '../assets/lily-keychain.jpeg'
import flowerPouchPic from '../assets/flower-pouch.jpeg'

function OtherProducts(){
    return(
        <div className="other-products-container">
            <div className="product-category-title">✿ Other Products ✿</div>

            <div className="other-product-cards">
                <ProductCard image={twoLilyPic} productName="Lilly of the Valley (2 Flowers)" price="$7.00"/>
                <ProductCard image={fourLilyPic} productName="Lilly of the Valley (4 Flowers)" price="$12.00"/>
                <ProductCard image={rosesPinkPic} productName="Pot of Roses (Pink)" price="$22.00"/>
                <ProductCard image={rosesMagentaPic} productName="Pot of Roses (Magenta)" price="$22.00"/>
                <ProductCard image={rosesPurplePic} productName="Pot of Roses (Purple)" price="$22.00"/>
                <ProductCard image={pumpkinHatPic} productName="Pumpkin Cat Hat" price="$12.00"/>
                <ProductCard image={muffinHatPic} productName="Muffin Cat Hat" price="$16.00"/>
                <ProductCard image={barbequePic} productName="Barbecue Keychain" price="$13.00"/>
                <ProductCard image={lilyKeychainPic} productName="Lilly of the Valley Keychain" price="$5.00"/>
                <ProductCard image={flowerPouchPic} productName="Tulips Pouch" price="$12.00"/>
            </div>
        </div>
    );
}

export default OtherProducts