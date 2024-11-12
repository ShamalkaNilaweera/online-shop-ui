import './App.css';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import AddColor from './details/AddColor';
import UpdateProduct from './products/UpdateProduct';
import ViewProduct from './products/ViewProduct';
import UploadProdImg from './products/UploadProdImg';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/addProduct" element={<AddProduct/>} />
        <Route exact path="/addColor" element={<AddColor/>}/>
        <Route exact path="/updateProduct/:id" element={<UpdateProduct/>}/>
        <Route exact path="/viewProduct/:id" element={<ViewProduct/>}/>
        <Route exact path="/uploadProdImg/:id" element={<UploadProdImg/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
