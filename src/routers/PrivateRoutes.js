import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Navigate, Outlet, useNavigate, Routes } from 'react-router-dom';
import { logout } from '../actions/auth';
import { Aside } from '../components/inicio/Aside';
import {Panel} from '../components/panel/Panel';



export const PrivateRoutes = () => {


    const dispatch = useDispatch();

    const { correo } = useSelector(store => store.auth);

    const handleLogout = (e) => {
        e.preventDefault();
        console.log("logout");
        localStorage.setItem('token', '');
        dispatch(logout());

    }
    const navigate = useNavigate();

    function Raiz() {
        return (
            <div>

                <Aside/>

                
                <h1>"Raiz /" hola { correo } </h1>
                <button className='btn btn-danger' onClick={handleLogout}>Log out</button> &nbsp;
                <button className='btn btn-primary' onClick={() => navigate('/panel/panel')}> Privado </button> &nbsp;
                <button className='btn btn-success' onClick={() => navigate('/panel')}> Panel </button>
            </div>
        )
    }

    return (

        <Routes>
            <Route path="/" element={<div> <Panel/> <Outlet /> </div>} >
                <Route index element={<h1>index</h1>} />
                <Route path="panel" element={ <h1>panel</h1>} />
                <Route path="panel/privado" element={<h1>privado</h1>} />
                <Route path="*" element={<Navigate to="/panel" />} />

            </Route>
        </Routes>
    )
}
