import { useState, useEffect } from 'react'
import { getProductos } from '../helpers/getProductos';

export const useFetchProductos = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getProductos()
            .then( productos => {
                
                setState({
                    data: productos,
                    loading: false
                });
            })

    },[])

    return state; // { data:[], loading: true };
}
