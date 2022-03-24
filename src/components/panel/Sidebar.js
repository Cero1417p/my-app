import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { logout } from '../../actions/auth';
import './styles.css'

export const Sidebar = () => {

        const dispatch = useDispatch();
        const navigate = useNavigate();
        ///////////////////////////////////////
        const active = window.location.pathname;

        useEffect(() => {
                if (document.getElementById(active)) {
                        document.getElementById(active).className = document.getElementById(active).className + " active";
                }
        }, [active]);

        const handleResumen = (e) => {
                e.preventDefault();
                navigate('/resumen');
        }
        const handleClick = (e) => {
                e.preventDefault();
        }

        const handleProductos = (e) => {
                e.preventDefault();
                //e.target.className = e.target.className + ' active'
                navigate('/medicamentos');
        }



        const handleLogout = (e) => {
                e.preventDefault();

                Swal.fire({
                        title: 'Seguro que quieres salir?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Sí, salir!'
                }).then((result) => {
                        if (result.isConfirmed) {
                                dispatch(logout());
                                Swal.fire(
                                        '',
                                        'Secion cerrada',
                                        'success'
                                )
                        }
                })

        }

        return (
                <div className="bg-white" id="sidebar-wrapper">
                        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                                <i className="fas fa-user-secret me-2"></i>PeruFarma0
                        </div>
                        <div className="list-group list-group-flush my-3">
                                <a
                                        href="/"
                                        className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                                        id="/">
                                        <i className="fas fa-tachometer-alt me-2"></i>Dashboard
                                </a>
                                <a href="#/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-project-diagram me-2"></i>Projects</a>
                                <a
                                        href="/resumen"
                                        className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                                        id="/resumen">
                                        <i className="fas fa-chart-line me-2"></i>Resumen
                                </a>
                                <a href="#/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-paperclip me-2"></i>Reports</a>
                                <a href="#/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-shopping-cart me-2"></i>Store Mng</a>
                                <a
                                        href="/medicamentos"
                                        className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                                        id="/medicamentos">
                                        <i className='fas fa-capsules me-2 ' ></i>Medicamentos
                                </a>

                                <a href="#/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                        className="fas fa-comment-dots me-2"></i>Chat</a>
                                <a href="#/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                                        <i className="fas fa-address-card me-2"></i >Outlet</a>

                                

                                <a href="#/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold cursor-pointer"
                                        onClick={handleLogout}>
                                        <i className="fas fa-power-off me-2" ></i >Logout</a>

                        </div>
                </div>
        )
}


