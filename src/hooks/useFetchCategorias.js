import { useState, useEffect } from 'react'
import { getCategorias, getCategoria } from '../helpers/helperCategorias';

export const useFetchCategorias = () => {
    
    const [state, setState] = useState({
        data: []
    });

    useEffect( () => {

        getCategorias()
            .then( categorias => {
                
                setState({
                    data: categorias,
                });
            })

    },[])

    return state; // { data:[], loading: true };
}

export const useFetchCategoria = (id) => {
    
    const [state, setState] = useState({
        data: {}
    });

    useEffect( () => {

        getCategoria(id)
            .then( categoria => {
                
                setState({
                    data: categoria,
                });
            })

    },[])

    return state; // { data:[], loading: true };
}

