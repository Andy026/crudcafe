import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const AgregarProducto = () => {

  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState(0);
  const [categoria, setCategoria] = useState('');

  return (
    <div className="container">
      <h1 className="text-center display-2 my-3">Agregar Producto</h1>
      <Form className="border border-dark border-2 rounded py-3 px-3 my-5">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="" onChange={event => setNombreProducto(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Precio:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="" onChange={event => setPrecioProducto(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Categoria:</Form.Label>
            <Form.Select className="border border-dark" onChange={event => setCategoria(event.target)}>
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
    </div>
  );
};

export default AgregarProducto;
