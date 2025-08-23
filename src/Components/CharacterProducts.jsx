import ProductCard from './ProductCard.jsx'
import poohBearPic from '../assets/pooh-bear.jpeg'
import spidermanPic from '../assets/spiderman.jpeg'
import snoopyPic from '../assets/big-snoopy.jpeg'
import miffyPouchPic from '../assets/miffy-pouch.jpeg'
import kuromiPic from '../assets/kuromi.jpeg'
import helloKittyPic from '../assets/hello-kitty.jpeg'
import garfieldPic from '../assets/garfield.jpeg'
import milesPic from '../assets/miles-morales.jpeg'
import peterPic from '../assets/peter-parker.jpeg'
import supermanPic from '../assets/superman.jpeg'
import smallKirbyPic from '../assets/small-kirby.jpg'
import kirbyBunnyPic from '../assets/kirby-bunny-hat.jpeg'
import hamboPic from '../assets/hambo-background.jpg'
import cinnamorollPic from '../assets/cinnamoroll.jpeg'
import pikachuPic from '../assets/small-pikachu.jpeg'
import cinnaPouchPic from '../assets/cinna-pouch.jpeg'


function CharacterProducts(){
    return(
        <div className="character-products-container">
            <div className="product-category-title">✿ Famous Characters ✿</div>

            <div className="character-product-cards">
                <ProductCard image={poohBearPic} productName="Winnie the Pooh" price="$15.00"/>
                <ProductCard image={spidermanPic} productName="Hanging Spider-Man" price="$12.00"/>
                <ProductCard image={snoopyPic} productName="Large Snoopy" price="$30.00"/>
                <ProductCard image={miffyPouchPic} productName="Miffy Pouch" price="$25.00"/>
                <ProductCard image={kuromiPic} productName="Kuromi (Sanrio) Keychain" price="$18.00"/>
                <ProductCard image={helloKittyPic} productName="Hello Kitty (Sanrio) Keychain" price="$12.00"/>
                <ProductCard image={garfieldPic} productName="Garfield" price="$15.00"/>
                <ProductCard image={peterPic} productName="Spider-Man (Peter Parker)" price="$18.00"/>
                <ProductCard image={milesPic} productName="Spider-Man (Miles Morales)" price="$16.00"/>
                <ProductCard image={supermanPic} productName="Mini Hanging Superman" price="$18.00"/>
                <ProductCard image={smallKirbyPic} productName="Mini Kirby" price="$10.00"/>
                <ProductCard image={kirbyBunnyPic} productName="Mini Kirby with Bunny Hat" price="$14.00"/>
                <ProductCard image={hamboPic} productName="Large Hambo (from Adventure Time)" price="$50.00"/>
                <ProductCard image={cinnamorollPic} productName="Large Cinnamoroll (Sanrio)" price="$30.00"/>
                <ProductCard image={cinnamorollPic} productName="Small Cinnamoroll (Sanrio)" price="$20.00"/>
                <ProductCard image={pikachuPic} productName="Small Pikachu (Pokémon)" price="$15.00"/>
                <ProductCard image={cinnaPouchPic} productName="Cinnamoroll (Sanrio) Pouch" price="$12.00"/>
            </div>
        </div>
    );
}

export default CharacterProducts