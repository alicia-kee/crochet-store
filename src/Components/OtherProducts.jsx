import ProductCard from './ProductCard.jsx'
import twoLilyPic from '../assets/lily-of-valley(2).jpg'
import fourLilyPic from '../assets/lily-of-valley(4).jpeg'
import rosesPic from '../assets/rose-pot1.jpeg'
import pumpkinHatPic from '../assets/pumpkin-hat.jpeg'
import muffinHatPic from '../assets/muffin-hat.jpeg'
import barbequePic from '../assets/BBQ-keychain.jpeg'

function OtherProducts(){
    return(
        <div className="other-products-container">
            <div className="product-category-title">Other Products</div>

            <div className="other-product-cards">
                <ProductCard image={twoLilyPic} productName="Lilly of the Valley (2 Flowers)" price="$7.00"/>
                <ProductCard image={fourLilyPic} productName="Lilly of the Valley (4 Flowers)" price="$12.00"/>
                <ProductCard image={rosesPic} productName="Pot of Roses" price="$22.00"/>
                <ProductCard image={pumpkinHatPic} productName="Pumpkin Cat Hat" price="$12.00"/>
                <ProductCard image={muffinHatPic} productName="Muffin Cat Hat" price="$15.00"/>
                <ProductCard image={barbequePic} productName="Barbecue Keychain" price="$13.00"/>
            </div>
        </div>
    );
}

export default OtherProducts