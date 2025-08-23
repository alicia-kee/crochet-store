import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import FAQ from './Pages/FAQ.jsx'
import About from './Pages/About.jsx'
import { Layout } from './Components/Layout.jsx'
import OrderPage from './Pages/OrderPage.jsx'
import Cart from './Pages/Cart.jsx'
import { CartProvider } from './Components/CartContext.jsx'  

function App() {
    //all routes are child of Layout route
    return(
        <CartProvider>
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Products" element={<Products/>}/>
                        <Route path="/FAQ" element={<FAQ/>}/>
                        <Route path="/About" element={<About/>}/>
                        <Route path="/Order" element={<OrderPage/>} />
                        <Route path="/Cart" element={<Cart/>} />
                    </Route>
                </Routes>
            </Router>
        </CartProvider>

    );
}

export default App