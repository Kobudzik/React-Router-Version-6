import { BrowserRouter, Link, Route, Routes , Navigate} from 'react-router-dom'
import { useState } from 'react/cjs/react.production.min'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [cartIsEmpty] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about/*">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products/:id/*" element={<ProductDetails/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/test" element={(
            <div>
              <h2>Test</h2>
            </div>
          )} />

          {/* <Route path="/redirect" element={<Redirect to="/about"/>} /> //router 5 */}
          <Route path="/redirect" element={<Navigate to="/about"/>} />

          {/* conditional redirect */}
          <Route 
            path="/checkout" 
            element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App