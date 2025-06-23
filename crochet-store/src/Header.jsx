//Header component
// React allows you to break a UI (User Interface) down into independent reusable chunks = components
function Header(){
    return(
        <header>
            <h1>Craftie Lemen</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li> 
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    ); //within return can write HTML
    //list items links don't go anywhere right now
}

export default Header //export component to use elsewhere