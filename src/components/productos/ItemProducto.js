import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';

const ItemProducto = (props) => {
  const URL = process.env.REACT_APP_API_URL + "/" + props.producto._id;

  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar el producto?",
      text: "No podrás recuperar un producto una vez eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //borrar el producto
        try {
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          //console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Producto eliminado",
              "El producto fue eliminado correctamente",
              "success"
            );
            props.consultaAPI();
          }
          //mostrar un cartel de error
        } catch (error) {
          console.log(error);
        }
        //cartel informativo para el usuario
      }
    });
  };

  return (
    <ListGroup.Item className=" border border-dark rounded d-flex justify-content-between py-3">
      <p>
        {props.producto.nombreProducto}
        <span className="fw-bolder">
          - Precio: $ {props.producto.precioProducto}
        </span>
      </p>
      <div>
        <Link className="btn btn-outline-dark me-2"t to={`/productos/editar/${props.producto._id}`}>Editar</Link>
        <Button
          className="mx-2"
          variant="danger"
          onClick={() => eliminarProducto()}
        >
          Borrar
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemProducto;
