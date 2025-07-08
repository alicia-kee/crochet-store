// import NavigationBar from './NavigationBar.jsx'
// import Header from './Header.jsx' 
// import BestSellers from './BestSellers.jsx'
// import CategoryButtons from './CategoryButtons.jsx'
// import Footer from './Footer.jsx'

import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import Delivery from './Pages/Delivery.jsx'
import About from './Pages/About.jsx'

function App() {
    // return(
    //     <div className="home-page">
    //         <NavigationBar/>
    //         <Header/>
    //         <BestSellers/>
    //         <CategoryButtons/>
    //         <Footer/>
    //     </div>
    //     //enclose all components in a fragment, an empty set of angled brackets
    // );

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Products" element={<Products/>}/>
                <Route path="/Delivery" element={<Delivery/>}/>
                <Route path="/About" element={<About/>}/>
            </Routes>
        </Router>
    );

}

export default App