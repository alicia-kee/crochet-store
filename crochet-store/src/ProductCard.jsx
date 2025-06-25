import blackBeePic from './assets/blackBee.jpeg'

function ProductCard(props){
    return(
        <div className="card">
            {/* <img className="productPic" src={blackBeePic} alt="crochet bumblebee"></img>
            <h2>Bumblebee</h2>
            <p>$10.00</p> */}

            <img className="product-pic" src={props.image}></img>
            <p className="product-name">{props.productName}</p>
            <p className="product-price">{props.price}</p>
        </div>
    );
}

export default ProductCard