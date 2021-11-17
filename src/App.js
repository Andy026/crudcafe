import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
//import AgregarProducto from './components/productos/AgregarProducto';
//import Error404 from './components/pages/Error404';
import Inicio from './components/pages/Inicio';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Inicio></Inicio>
      <Footer></Footer>
    </>
  );
}

export default App;
