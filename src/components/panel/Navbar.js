import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';

import './styles.css';

export const Navbar = () => {

    const { usuario } = useSelector(store => store.auth);

    const dispatch = useDispatch();

    const handleClickToggle = (e) => {
        e.preventDefault();
        var el = document.getElementById("wrapper");
        el.classList.toggle("toggled");
    }

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch(logout());
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle" onClick={handleClickToggle}></i>
                    <h2 className="fs-2 m-0">Dashboard</h2>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle second-text fw-bold cursor-pointer"  
                            href="/"
                            id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user me-2"></i>{ usuario.nombre }
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item cursor-pointer" href="#/">Profile</a></li>
                                <li><a className="dropdown-item cursor-pointer" href="#/">Settings</a></li>
                                <li onClick={ handleLogout }><a className="dropdown-item" href="#/">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
