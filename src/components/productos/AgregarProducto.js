import React from "react";
import { Form, Button } from "react-bootstrap";

const AgregarProducto = () => {
  return (
    <div className="container">
      <h1 className="text-center display-2 my-3">Agregar Producto</h1>
      <Form className="border border-dark border-2 rounded py-3 px-3 my-5">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Código único de producto:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="AA-BB-00" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="Café Vaquita" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Descripción:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="Café con Leche" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Cantidad:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="Ingrese la cantidad:" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Url:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder="Imagen URL:" />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default AgregarProducto;
