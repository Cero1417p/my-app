import React, { useEffect, useRef } from 'react';
import { useForm } from '../../hooks/useForm';

import {
    useNavigate,
    useParams
} from "react-router-dom";
import { createArticulo, peticionArticulo, updateArticulo } from '../../actions/articulos';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { removeError, setError } from '../../actions/ui';

import './css.css';



export const ProductosForm = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    let { articulo } = useSelector(store => store.datos);
    const { msgError } = useSelector(state => state.ui);

    const [values, handleInputChange, reset] = useForm(articulo);
    const { cod, nom_form_farm_simplif, codigo, nombre, precio_venta, stock, descripcion, estado } = values;

    const activeId = useRef(articulo.idarticulo);

    useEffect(() => {

        if (articulo.idarticulo !== activeId.current) {
            reset(articulo);
            activeId.current = articulo.idarticulo
        }

    }, [articulo, reset])

    useEffect(() => {
        if (id) {
            //console.log("mostrart id : "+id);
            dispatch(peticionArticulo(id));
        }

    }, [dispatch, id]);


    const handleEditar = (e) => {
        e.preventDefault();

        if( isFormValid() ){
            Swal.fire({
                title: 'Seguro que quieres editar este medicamento?',
                text: "Esto no podra ser revertido!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, editar!'
            }).then((result) => {
                if (result.isConfirmed) {

                    //console.log(values);e
                    dispatch(
                        updateArticulo(values)
                    );

                    navigate('/medicamentos');

                }
            })
        } 

    }

    //console.log(nombre)
    const handleCrear = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            Swal.fire({
                title: 'Seguro que quieres crear un nuevo medicamento?',
                text: "Esto no podra ser revertido!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, crear!'
            }).then((result) => {
                if (result.isConfirmed) {

                    //console.log(values);
                    dispatch(
                        createArticulo(values)
                    );

                    navigate('/medicamentos');

                }
            })
        }

    }

    const isFormValid = () => {

        if (nombre.trim().length < 4) {
            console.log(nombre.trim().length)
            dispatch(setError('Un nombres completo es requerido'))
            return false;
        }

        dispatch(removeError());
        return true;
    }


    return (
        <form  >

            <div className="mb-3"> <h1>Medicamentos</h1> </div>

            {
                msgError &&
                (
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                )
            }


            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                    name="nombre"
                    type="text"
                    className="form-control"
                    id="nombre"
                    aria-describedby="emailHelp"
                    value={nombre}
                    onChange={handleInputChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripción</label>
                <input
                    name="descripcion"
                    type="text"
                    className="form-control"
                    id="descripcion"
                    aria-describedby="emailHelp"
                    value={descripcion}
                    onChange={handleInputChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="codigo" className="form-label">Código de producto</label>
                <input
                    name="codigo"
                    type="text"
                    className="form-control"
                    id="codigo"
                    aria-describedby="emailHelp"
                    value={codigo}
                    onChange={handleInputChange} />
            </div>

            <div className="mb-3 form-check">
                <label htmlFor="estado" className="form-label">Estado de producto (Activo/Inactivo)</label>
                <input
                    name="estado"
                    type="checkbox"
                    className="form-check-input"
                    id="estado"
                    checked={estado}
                    onChange={handleInputChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="precio_venta" className="form-label">Precio</label>
                <input
                    name="precio_venta"
                    type="number"
                    className="form-control"
                    id="precio_venta"
                    value={precio_venta}
                    onChange={handleInputChange}
                    onClick={(e) => e.preventDefault()} />
            </div>

            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input
                    name="stock"
                    type="number"
                    className="form-control"
                    id="stock"
                    value={stock}
                    onChange={handleInputChange}
                    onClick={(e) => e.preventDefault()} />

            </div>




            {id ?
                <button className="btn btn-primary" onClick={handleEditar}>Guardar cambios</button>
                : <button className="btn btn-primary" onClick={handleCrear}>Enviar</button>}

        </form>
    );
};
