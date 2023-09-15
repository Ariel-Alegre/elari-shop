import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllProducts from './pages/AllProducts'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path = '/' element={<AllProducts/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
