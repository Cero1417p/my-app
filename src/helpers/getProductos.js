import { conexion } from "../config/config";

export const getProductos = async( ) => {

    const url = conexion+"api/articulos";
    const resp = await fetch( url );
    const data = await resp.json();

    const productos = data.map( producto => {
        return {
            categoria:producto.categoria.nombre,
            codigo: producto.codigo,
            descripcion: producto.descripcion,
            estado: producto.estado,
            idarticulo: producto.idarticulo,
            nombre: producto.nombre,
            precio: producto.precio_venta,
            stock: producto.stock
        }
    })
    return productos;
}
