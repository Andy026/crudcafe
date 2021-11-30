import React, {useState, useEffect, useRef} from "react";
import { Form, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom';

const EditarProducto = () => {
  const { id } = useParams();
//console.log(id)
  const [producto, setProducto] = useState({});
  const URL = process.env.REACT_APP_API_URL+'/'+id;

  useEffect(async() => {
    //consultar a la API el producto que tiene el id
    try {
      //realizar una consultar GET
      const respuesta = await fetch(URL);
      console.log(respuesta);
      if(respuesta.status === 200){
        const dato = await respuesta.json()
        console.log(dato);
        setProducto(dato);
      }
      
    } catch (error) {
      console.log(error);
      //mostrar cartel de error al usuario
    }
  }, [])

  return (
    <div className="container">
      <h1 className="text-center display-2 my-3">Editar Producto</h1>
      <Form className="border border-dark border-2 rounded py-3 px-3 my-5">
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Nombre:</Form.Label>
          <Form.Control className="border border-dark" type="text" placeholder=""  defaultValue={producto.nombreProducto}/>
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

export default EditarProducto;
