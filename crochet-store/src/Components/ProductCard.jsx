
function ProductCard(props){
    return(
        <div className="card">
            <img className="product-pic" src={props.image}></img>
            <div className="product-text-container">
                <p className="product-name">{props.productName}</p>
                <p className="product-price">{props.price}</p>
            </div>

        </div>
    );
}

export default ProductCard