import { useState, useEffect } from 'react'
import {postLogin} from '../helpers/helperLogin'

export const useFetchLogin = (usuario) => {
    
    const [state, setState] = useState({
        data: []
    });

    useEffect( () => {

        postLogin(usuario)
            .then( login => {
                
                setState({
                    data: login,
                });
            })

    },[])

    return state; // { data:[], loading: true };
}