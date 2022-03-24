import React, { useState,useEffect } from 'react'
import { useFetchLogin } from '../../hooks/useFetchLogin';


export const LoginApp = () => {

    const [state, setState] = useState({
        username:'merlin@perufarma.com',
        password:'12345',
        token:''
    });
    
    useEffect(() => {
        alert("se creo LoginApp");
        if(state.username!='' && state.password!=''){
            //const {data} = useFetchLogin(state);
            //console.log(data);
        }
        return () => {
            
        }
    }, [state])

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("usuario: "+state.username+" password :"+state.password);
        
    }
    
    const handleChange=(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState(
            {
                ...state,
                [name] : value,
            }
        );
    }

    return ( 
        <form onSubmit={handleSubmit} className="col-4">

                <div className="mb-3">
                        <h1 >Login</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Usario</label>
                    <input 
                    name="username"
                    type="text" 
                    className="form-control" 
                    id="username" 
                    value={state.username}
                    onChange={handleChange}/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Contraseña</label>
                    <input 
                    name="password"
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={state.password}
                    onChange={handleChange}/>
                </div>
    
              <button type="submit" className="btn btn-primary" style={{margin: '20px'}}>Ingresar</button>
            </form>
    )
}
