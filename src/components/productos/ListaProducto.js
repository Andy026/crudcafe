import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import {Button, Container} from "react-bootstrap";

const ListaProducto = (props) => {
  return (
    <Container className="my-5">
      <h1 className="display-4 text-center mb-5">Lista de productos</h1>
      <hr />
      <article className="d-flex align-items-center mb-4 justify-content-end">
        <p className="my-0 me-4 fw-bold">Agregar nuevos productos: </p>
        <Button variant="outline-dark">
          Agregar
        </Button>
      </article>
      <ListGroup>
        {
          props.productos.map((producto) => <ItemProducto key={producto.id} producto={producto}></ItemProducto>)
        }
      </ListGroup>
    </Container>
  );
};

export default ListaProducto;
