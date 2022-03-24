import React from 'react';
import { Route, Navigate, Outlet, Routes } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import './styles.css'
import { Resumen } from './Resumen';
import { FilterableTable } from '../productos/Productos'
import { ProductosForm } from '../productos/ProductosForm';


export const Panel = () => {

    function ProductosFormDiv() {
        return (
            <div className="container">
                <div className="col-6">
                    <ProductosForm />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="d-flex" id="wrapper">

                <Sidebar />

                <div id="page-content-wrapper">

                    <Navbar />


                    <div className="container-fluid px-4">

                        <Routes>
                            <Route path="/" element={<Outlet />} >
                                <Route index element={<Resumen />} />
                                <Route path="resumen" element={<h1>RESUMEN</h1>} />
                                <Route path="medicamentos" element={<FilterableTable />} />
                                <Route path="/medicamentos/form" element={<ProductosFormDiv />} />
                                <Route path="/medicamentos/form/:id" element={<ProductosFormDiv />} />
                                <Route path="*" element={<Navigate to="/" />} />

                            </Route>
                        </Routes>


                    </div>

                </div>

            </div>

        </>
    );
};
