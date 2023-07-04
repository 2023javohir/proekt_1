import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main/main';
// import Categories from './component/category/categoriesAll';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { FilterByCategory, FilterById } from './component/Index';
import PageNotFound from './pageNotFound';
import Login from './component/auth/Login';




function App() {
  return (
      <BrowserRouter>
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Main />} />
    <Route path='/category/:name' element={<FilterByCategory />} />
    <Route path='/filterId/:id' element={<FilterById />} />
    <Route path='/login' element={<Login />} />

    
    <Route path='*' element={<PageNotFound />} />



   


  </Routes>
  </BrowserRouter>
   
  );
}

export default App;
