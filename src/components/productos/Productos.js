import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


import { deleteArticulo, peticionArticulos } from '../../actions/articulos'

const ProductTable = ({ products, filterText, edit }) => {

    //console.log(products);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Rows = () => {

        const Row = ({ id, art, index }) => {

            const handleEdit = (e) => {
                e.preventDefault()
                //console.log(id)
                navigate('/medicamentos/form/' + id);
            }
            const handleDelete = (e) => {
                e.preventDefault()

                Swal.fire({
                    title: 'Seguro que quieres eliminar este medicamento?',
                    text: "Esto no podra ser revertido!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar!'
                }).then((result) => {
                    if (result.isConfirmed) {
    
                        dispatch(
                            deleteArticulo(id)
                        );
    
                    }
                })

            }
           


            return (
                <tr key={id}>
                    <th scope="row">{art.cod}</th>
                    <td>{art.cod}</td>
                    <td>{art.nombre}</td>
                    <td>{art.precio_venta}</td>
                    <td>{art.stock}</td>
                    <td>{art.descripcion}</td>
                    <td>{art.estado.toString()}</td>
                    {
                        edit &&
                        <>
                            <td> <button className="btn btn-primary" onClick={handleEdit}>Editar</button> </td>
                            <td> <button className="btn btn-danger" onClick={handleDelete}>Borrar</button> </td>
                        </>

                    }
                </tr>
            )
        }

        let count = 0;

        return products.map( (art,index) => {
            //console.log("===========000");
            if (filterText.length > 0) {
                if (art.nombre.indexOf(filterText) === -1) {
                    return;
                }
            }
//////////////////////////////////////////////////////////////////////////////////////////////////////
            if(count >= 9){
                return;
            }
            count = count + 1;
            return (<Row key={art.cod} id={art.cod} art={art} index={index} />)

        })
    }


    return (
        <div className="table-responsive">
            <table className="table">
                <thead className='container'>
                    <tr >
                        <th scope="col">id</th>
                        <th scope="col">codigo</th>
                        <th scope="col" className='col-3'>nombre</th>
                        <th scope="col">precio venta</th>
                        <th scope="col">stok</th>
                        <th scope="col">descripcion</th>
                        <th scope="col">estado</th>
                        {edit &&
                            <>
                                <th scope="col">Editar</th>
                                <th scope="col">Borrar</th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        <Rows  />
                    }

                </tbody>

            </table>
        </div>
    );
};

const SearchBar = ({ filterText, onFilterTextChange }) => {

    const handleFilterTextChange = (e) => {
        const text = e.target.value.toUpperCase();
        onFilterTextChange(text);
    }

    return (
        <div>
            <form>

                <input
                    type="text"
                    placeholder="Buscar..."
                    value={filterText}
                    onChange={handleFilterTextChange}
                />

            </form>
        </div>
    );
}

export const FilterableTable = ({ edit = true }) => {



    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(peticionArticulos());
    }, [dispatch]);

    const { articulos } = useSelector(store => store.datos);

    const handleNuevo =(e) =>{
        e.preventDefault()
        navigate('/medicamentos/form');
    }

    return (
        <div className='container'>
            <div className="row">

                <div className='col-md-4'>
                    <SearchBar
                        filterText={text}
                        onFilterTextChange={setText}/>
                </div>

                <div className='col-md-4 offset-md-4 '>
                    <button className="btn btn-success float-end" onClick={ handleNuevo } >Crear Nuevo</button>
                </div>

            </div>


            <div className="row">
                <ProductTable
                    edit={edit}
                    products={articulos}
                    filterText={text}/>
            </div>


        </div>
    );
}

