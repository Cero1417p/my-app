import React, { useState, useEffect } from 'react';

export const CategoriasForm = ({categoria, setCategoria}) => {

    const [state, setState] = useState({
        nombre: categoria? categoria.nombre:'',
        descripcion:categoria? categoria.descripcion:'',
        estado:categoria?categoria.estado:true,
    });

    useEffect(() => {
        
        setState({
            nombre: categoria? categoria.nombre:'',
            descripcion:categoria? categoria.descripcion:'',
            estado:categoria?categoria.estado:true,
        });

        return () => {
            
        }
    }, [categoria])

    const handleChange=(event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        //console.log(value);

        setState(
            {
                ...state,
                [name] : value,
            }
        );

    }

    const handleCancelarClick =(e) =>{
        e.preventDefault();
        setCategoria(null);
    }

    const handleSubmit=(e)=>{
    }

    return (
        <form onSubmit={handleSubmit}>

                <div className="mb-3">
                        <h1 >Editar/Crear Categoria</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input 
                    name="nombre"
                    type="text" 
                    className="form-control" 
                    id="nombre" 
                    aria-describedby="emailHelp"
                    value={state.nombre}
                    onChange={handleChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input 
                    name="descripcion"
                    type="text" 
                    className="form-control" 
                    id="descripcion" 
                    aria-describedby="emailHelp"
                    value={state.descripcion}
                    onChange={handleChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
    
                
                <div className="mb-3 form-check">
                    <label htmlFor="estado" className="form-label">Estado de categoria (Activo/Inactivo)</label>
                    <input
                    name="estado"
                    type="checkbox" 
                    className="form-check-input" 
                    id="estado"
                    checked={state.estado}
                    onChange={handleChange}/>
                </div>
    
             
              
              <button type="submit" className="btn btn-primary" style={{margin: '20px'}}>Submit</button>
              <button type="button" className="btn btn-danger" onClick={ handleCancelarClick } style={{margin: '20px'}}>Cancelar</button>
            </form>
    )
}



