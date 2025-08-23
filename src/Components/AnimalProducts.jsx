import ProductCard from './ProductCard.jsx'
import blackBeePic from '../assets/blackBee.jpeg'
import brownBeePic from '../assets/brown-bee.jpeg'
import blueDinoPic from '../assets/blue-dino.jpeg'
import yellowDinoPic from '../assets/yellow-dino.jpeg'
import purpleDinoPic from '../assets/purple-dino.jpeg'
import chickPic from '../assets/chick-egg.jpeg'
import turtle from '../assets/turtle.jpeg'
import elephant from '../assets/elephant.jpeg'
import pig from '../assets/piggy.jpeg'

function AnimalProducts(){
    return(
        <div className="animal-products-container">
            <div className="product-category-title">✿ Animals ✿</div>

            <div className="animal-product-cards">
                <ProductCard image={blackBeePic} productName="Bumblebee (Black)" price="$10.00"/>
                <ProductCard image={brownBeePic} productName="Bumblebee (Brown)" price="$10.00"/>
                <ProductCard image={blueDinoPic} productName="Baby Dinosaur (Blue)" price="$12.00"/>
                <ProductCard image={yellowDinoPic} productName="Baby Dinosaur (Yellow)" price="$12.00"/>
                <ProductCard image={purpleDinoPic} productName="Baby Dinosaur (Purple)" price="$12.00"/>
                <ProductCard image={chickPic} productName="Chick in an Eggshell" price="$12.00"/>
                <ProductCard image={turtle} productName="Sea Turtle" price="$12.00"/>
                <ProductCard image={elephant} productName="Elephant" price="$10.00"/>
                <ProductCard image={pig} productName="Piggy" price="$25.00"/>
            </div>
        </div>
    );
}

export default AnimalProducts