import React from "react";
import { Form, Button } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <div className="container">
      <h1 className="text-center display-2 my-3">Agregar Producto</h1>
      <Form className="border border-dark border-2 rounded py-3 px-3 my-5">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Precio:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Categoria:</Form.Label>
            <Form.Select className="border border-dark">
              <option>Seleccione una opción</option>
              <option>Bebida Caliente</option>
              <option>Bebida Fria</option>
              <option>Sandwich</option>
              <option>Dulce</option>
              <option>Salado</option>
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
