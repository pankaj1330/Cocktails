import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Error from './pages/Error'
import Cocktail from './pages/Cocktail'
import About from './pages/About'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cocktail/:id' element={<Cocktail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
