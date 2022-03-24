import { conexion } from "../config/config";
import base64 from 'base-64'

export const getCategorias = async( ) => {

    const url = conexion+"api/categorias";
    const resp = await fetch( url );
    const data = await resp.json();

    const categorias = data.map( categoria => {
        return {
            id: categoria.idcategoria,
            nombre: categoria.nombre,
            descripcion: categoria.descripcion,
        }
    })


    return categorias;
}

export const getCategoria = async(id)=>{
    const url = conexion+"categorias/"+id;
    const resp = await fetch( url );
    const data = await resp.json();

    const categoria = data.map( cat => {
        return {
            id: cat.idcategoria,
            nombre: cat.nombre,
            descripcion: cat.descripcion,
        }
    })


    return categoria;
}

export const postCategoria = async()=>{

    const url = conexion+"categorias";
    const resp = await fetch( url ,{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode('hola:12345')
        },
        body: JSON.stringify({ nombre : 'qweq',descripcion:'alguna',estado:true }) 
    });
    const data = await resp.json();

    data.map(dat =>{
        console.log(dat);
    });

}