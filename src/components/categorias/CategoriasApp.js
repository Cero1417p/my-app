
import React, { useState, useEffect } from 'react';
import {CategoriasForm} from './CategoriasForm';
import {CategoryTable} from './Categorias';

export const CategoriasApp = ()=> {
    

  const [categoria, setCategoria] = useState(
      null
  );

  useEffect(() => {
      console.log(categoria)
      return () => {
         
      }
  },[categoria])


  const handleCrearClick = (e) =>{
    e.preventDefault();
    alert("Crear");
    setCategoria({});
  }

  return (
    <div className="container-fluid bg-light">
        <div className="row border border-secondary">

            

            <div className="col-6">
            <button type="button" className="btn btn-primary" onClick={ handleCrearClick }>Crear</button>
            <CategoryTable setCategoria={ setCategoria }/>
            </div>

            {(categoria!==null) && 
            <div className="col-6">
            <CategoriasForm categoria={ categoria } setCategoria={ setCategoria }/>
            </div> }

        </div>
    </div>
  );
}