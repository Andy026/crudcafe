import React from "react";
import {Button, ListGroup } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <ListGroup.Item className=" border border-dark rounded d-flex justify-content-between py-3">
    <p>
      Lorem ipsum dolor sit.
      <span className="fw-bolder">- Precio: 50</span>
    </p>
    <div>
      <Button className="mx-2" variant="dark ">Editar</Button>
      <Button className="mx-2" variant="danger">Borrar</Button>
    </div>
  </ListGroup.Item>
  );
};

export default ItemProducto;
