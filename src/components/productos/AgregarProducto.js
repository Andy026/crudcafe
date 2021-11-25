import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { campoRequerido, rangoNumero } from "../helpers/helpers";

const AgregarProducto = () => {

  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [error, setError] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    //validar los datos del formm
    if(campoRequerido(nombreProducto) &&
    rangoNumero(precioProducto) &&
    campoRequerido(categoria)){
      //reset del state de error
      setError(false);
      //crear un producto y enviar a la API
    }else{
      //mostrar al usuario un cartel de error si algo malió sal
      setError(true);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center display-2 my-3">Agregar Producto</h1>
      <Form className="border border-dark border-2 rounded py-3 px-3 my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control id="nombre" className="border border-dark" type="text" placeholder="" onChange={event => setNombreProducto(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio:</Form.Label>
          <Form.Control id="precio" className="border border-dark" type="text" placeholder="" onChange={event => setPrecioProducto(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria:</Form.Label>
            <Form.Select className="border border-dark" onChange={event => setCategoria(event.target.value)}>
              <option value=''>Seleccione una opción</option>
              <option value='bebida-caliente'>Bebida Caliente</option>
              <option value='bebida-fria'>Bebida Fria</option>
              <option value='sandwich'>Sandwich</option>
              <option value='dulce'>Dulce</option>
              <option value='salado'>Salado</option>
            </Form.Select>
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Guardar
        </Button>
      </Form>
      { error === true ?
      <Alert variant='danger'>
    Debe cargar todos los datos y el precio debe estar entre 1 y $4999
  </Alert>
  : null}
    </div>
  );
};

export default AgregarProducto;
