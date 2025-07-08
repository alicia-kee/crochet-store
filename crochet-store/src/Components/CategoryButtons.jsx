import animalsCategory from '../assets/animals-category.png'
import famousCharactersCategory from '../assets/famous-characters-category.png'

function CategoryButtons(){
    return(
        <div className="category-buttons-container">
            <a href="#"> <img src={animalsCategory} className="category-button"></img> </a>
            <a href="#"> <img src={famousCharactersCategory} className="category-button"></img> </a>
            {/* replace href links later */}
        </div>
    );
}

export default CategoryButtons