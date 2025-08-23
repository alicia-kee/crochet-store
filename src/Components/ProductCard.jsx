// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function ProductCard(props){
    const {image, productName, price} = props; //get info
    const navigate = useNavigate(); //used to change URL

    //function runs when card is clicked (navigates to order page and passes state object)
    const handleClick = () =>{
        navigate('/Order', {state:{image, productName, price}});
    };


    return(
        <div className="card" onClick={handleClick}>
            <img className="product-pic" src={props.image}></img>
            <div className="product-text-container">
                <p className="product-name">{props.productName}</p>
                <p className="product-price">{props.price}</p>
            </div>
        </div>
        
    );
}

export default ProductCard