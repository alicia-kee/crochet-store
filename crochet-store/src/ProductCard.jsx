import blackBeePic from './assets/blackBee.jpeg'

function ProductCard(){
    return(
        <div className="card">
            <img className="productPic" src={blackBeePic} alt="crochet bumblebee"></img>
            <h2>Bumblebee</h2>
            <p>$10.00</p>

            <hr></hr>
        </div>
    );
}

export default ProductCard