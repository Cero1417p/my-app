import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route, Navigate} from "react-router-dom";
import {  startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { Panel } from '../components/panel/Panel';
import { PrivateRoutes } from './PrivateRoutes';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const { valor } = useSelector(store => store.auth);

    const [checking, setChecking] = useState(true);


    useEffect(() => {

        dispatch(startChecking());


    }, [dispatch, setChecking])

    useEffect(() => {

        setChecking(false);
    }, [setChecking]);


    function PrivateOutlet({ children }) {
        const isAuth = valor;
        console.log("paso private oulet" + isAuth);
        return isAuth ? children : <Navigate to="auth/login" />;
    }

    function PublicRoute({ children }) {
        console.log("public route " + valor);
        return valor ? <Navigate to="/" /> : children;
    }



    if (checking) {
        return (
            <h1>Cargando...</h1>
        )
    }

    return (
        <Routes>
            <Route path="*" element={<PrivateOutlet> <Panel /> </PrivateOutlet>} />

            <Route path="/auth/login" element={<PublicRoute> <LoginScreen /> </PublicRoute>} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
