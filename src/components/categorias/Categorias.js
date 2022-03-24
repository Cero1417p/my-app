import React from 'react'
import { useFetchCategorias } from '../../hooks/useFetchCategorias';
import PropTypes from 'prop-types';



  const CategoryRow = ({category,setCategoria})=>{
    


    const handleClick =()=>{
      setCategoria(()=>category);
    }

    return (
      <tr>
        <td>{category.id}</td>
        <td>{category.nombre}</td>
        <td>{category.descripcion}</td>
        <td>{category.estado?'activo':'inactivo'}</td>
        <td>
          <button type="button" onClick={handleClick}>EDITAR</button>
        </td>
        <td>
          <button type="button" onClick={handleClick}>ELIMINAR</button>
        </td>
      </tr>
    );
  }

  CategoryRow.propTypes={
    setCategoria:PropTypes.func.isRequired,
  }

  export const CategoryTable = ({setCategoria})=> {
    const rows = [];

    const {data} = useFetchCategorias();

    

    data.forEach((category) => {
      
      rows.push(
        <CategoryRow
          setCategoria={ setCategoria }
          category={category}
          key={category.id}
        />
      );
    });

    return (
      <div>
        <h1>Lista de Categorias</h1>
        <table className="table table-striped">
        <thead>
          <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Editar</th>
          <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

  CategoryTable.propTypes={
    setCategoria:PropTypes.func.isRequired,
  }
  
  