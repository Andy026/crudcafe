import React from "react";
import { Form, Button } from "react-bootstrap";

const EditarProducto = () => {
  return (
    <>
      <h1>Editar Producto</h1>
      <Form>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Código único de producto:</Form.Label>
          <Form.Control type="text" placeholder="AA-BB-00" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control type="text" placeholder="Café Vaquita" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control type="text" placeholder="Café con Leche" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Cantidad:</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la cantidad:" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Url:</Form.Label>
          <Form.Control type="text" placeholder="Imagen URL:" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </>
  );
};

export default EditarProducto;
