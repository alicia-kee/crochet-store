import headerPic from '../assets/header-picture.png';

function Header(){
    return(
        <header>
            <img className="header-pic" src={headerPic} alt="Header picture showing the store's brand"></img>
            <div className="header-message-container">
                <p className="header-message"> Bringing you handmade crochet comforts, lovingly crafted right here in Winnipeg.</p>
            </div>
            
        </header>
    ); 

}

export default Header 