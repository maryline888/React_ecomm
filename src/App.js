import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'

import Shop from './components/Shop'

function App() {

  //const [products, setProducts] = useState([]);


  return (
    <BrowserRouter>
      <div className='container'>
        <Header />

        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>

        <Footer />
      </div >
    </BrowserRouter>
  );

}// fin app


export default App;
