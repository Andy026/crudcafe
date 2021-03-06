import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import Error404 from './components/pages/Error404';
import Inicio from './components/pages/Inicio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ListaProducto from './components/productos/ListaProducto';
import EditarProducto from './components/productos/EditarProducto';
import AgregarProducto from './components/productos/AgregarProducto';
import {useState, useEffect} from 'react';

function App() {
 const URL = process.env.REACT_APP_API_URL;
 //console.log(URL)
 const [productos, setProductos] = useState([]);

 useEffect(() => {
  consultaAPI();
 },[]);

 const consultaAPI = async () => {
  try{
    const respuesta = await fetch(URL);
    const datos = await respuesta.json();
    //console.log(datos);
    setProductos(datos);
  }catch(error){
    console.log(error);
  }
 }

  return (
    <Router>
      <Navigation></Navigation>
      <Routes>
        <Route exact path='/' element={<Inicio></Inicio>}></Route>
        <Route exact path='/productos' element={<ListaProducto consultaAPI={consultaAPI} productos={productos}></ListaProducto>}></Route>
        <Route exact path='/productos/nuevo' element={<AgregarProducto consultaAPI={consultaAPI}></AgregarProducto>}></Route>
        <Route exact path='/productos/editar/:id' element={<EditarProducto consultaAPI={consultaAPI}></EditarProducto>}></Route>
        <Route exact path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
