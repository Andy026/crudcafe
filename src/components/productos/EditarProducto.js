import React, { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {campoRequerido, rangoNumero} from "../helpers/helpers"
import Swal from "sweetalert2";

const EditarProducto = (props) => {
  const { id } = useParams();
  //console.log(id)
  const [producto, setProducto] = useState({});
  const [categoria, setCategoria] = useState('');
  const URL = process.env.REACT_APP_API_URL + "/" + id;
  //crear variables de referencia
  const nombreProductoRef = useRef('');
  const precioProductoRef = useRef(0);

  useEffect(async () => {
    //consultar a la API el producto que tiene el id
    try {
      //realizar una consultar GET
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if (respuesta.status === 200) {
        const dato = await respuesta.json();
        console.log(dato);
        setProducto(dato);
        setCategoria(dato.categoria);
      }
    } catch (error) {
      console.log(error);
      //mostrar cartel de error al usuario
    }
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    //validar los campos
    //console.log(nombreProductoRef.current.value);
    if(campoRequerido(nombreProductoRef.current.value) &&
    rangoNumero(precioProductoRef.current.value) &&
    campoRequerido(categoria)){
      //console.log('aqui envio los datos')
      //construir el objeto a enviar a la API
      const productoModificado = {
        nombreProducto: nombreProductoRef.current.value,
        precioProducto: precioProductoRef.current.value,
        categoria
      }

      try {
        //consulta PUT para modificar valores en la API
        const respuesta = await fetch(URL, {
          method: "PUT",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify(productoModificado)
        })
        console.log(respuesta);
        if(respuesta.status === 200){
          Swal.fire(
            'Producto modificado!',
            'Su producto fue editado correctamente!',
            'success'
          )
          props.consultaAPI();
        }

      } catch (error) {
        console.log(error);
      }
    }else{
      //mostrar un cartel de error
      console.log('mostrar el error');
    }

  }

  return (
    <div className="container">
      <h1 className="text-center display-2 my-3">Editar Producto</h1>
      <Form className="border border-dark border-2 rounded py-3 px-3 my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder=""
            defaultValue={producto.nombreProducto}
            ref={nombreProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            placeholder=""
            defaultValue={producto.precioProducto}
            ref={precioProductoRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Categoria:</Form.Label>
          <Form.Select className="border border-dark" value={categoria} onChange={(e)=> setCategoria(e.target.value)}>
            <option value="">Seleccione una opción</option>
            <option value="bebida-caliente">Bebida Caliente</option>
            <option value="bebida-fria">Bebida Fria</option>
            <option value="sandwich">Sandwich</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default EditarProducto;
