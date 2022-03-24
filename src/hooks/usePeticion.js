import { useState, useEffect } from 'react'
import { peticion } from '../helpers/helperBackendApi';

export const usePeticion = (method, path, token, content={}) => {
    
    const [state, setState] = useState({
        data: []
    });

    useEffect( () => {

        peticion(method,path,token,content)
            .then( response => {
                
                setState({
                    data: response,
                });
            })

    },[])

    return state; // { data:[], loading: true };
}