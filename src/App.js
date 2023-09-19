import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import DetailsShoes from './pages/DetailsShoes';
import Prueba from './pages/Prueba'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path = '/' element={<AllProducts/>}/>
    <Route exact path = '/product/:idShoes' element={<DetailsShoes/>}/>
    <Route exact path = '/prueba' element={<Prueba/>}/>

    


   </Routes>
   </BrowserRouter>
  );
}

export default App;
