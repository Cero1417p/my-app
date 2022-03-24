import React from 'react';
import { useDispatch } from 'react-redux'

import { useForm } from '../../hooks/useForm';
import {login} from '../../actions/auth';
import './css.css';

export const LoginScreen = () => {

    const initialForm = {
        email: 'merlin@perufarma.com',
        password: '12345',
        check: true
    };

    const [values, handleInputChange] = useForm(initialForm);

    const { email, password, check } = values;

    const dispacth = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login");
        dispacth(login(email,password));
     
    }

    return (

        <div className="container">
            <div className="abs-center">


                <form className="border p-3 form login-form" onSubmit={ handleSubmit }>

                    <div className="row">
                        <div className="col-md-12 login-form-header">
                            <p className="login-form-font-header">Peru<span>Farma</span></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 login-from-row">
                            <label className="form-label">Direccion de correo</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                aria-describedby="emailHelp"
                                value={email}
                                onChange={handleInputChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12 login-from-row">
                            <label className="form-label">Contraseña</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={handleInputChange} />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12 login-from-row">
                            <input
                                name="check"
                                type="checkbox"
                                className="form-check-input"
                                checked={check}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">Admin</label>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-12 login-from-row">
                            <button
                                type="submit"
                                className="btn btn-dark"
                            >Submit</button>
                        </div>

                    </div>


                </form>


            </div>
        </div>


    )
};
