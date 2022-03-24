import { types } from "../types/types";


let initialState = {
    articulos: [],
    articulo: {
        cod: 0,
        nom_form_farm_simplif: {},
        nombre: "",
        concentracion:"",
        nom_form_farm:"",
        presentacion:"",
        fracciones:1,
        fec_vcto_reg_sanitario:"",
        num_regsan:"",
        nom_titular:"",
        estado: true,
        precio_caja:0,
        precio_fraccion: 0,
        stock: 0,
        
    }
}


export const articulosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.articulos:
            return {
                ...state,
                articulos: action.payload.articulos
            }
        case types.articulo:
            return {
                ...state,
                articulo: action.payload.articulo
            }
        case types.createArticulo:
            return {
                ...state,
                articulos: [action.payload.articulo, ...state.articulos]
            }
        case types.updateArticulo:
            return {
                ...state,
                articulos: state.articulos.map(
                    art => art.idarticulo === action.payload.idarticulo
                        ? action.payload.articulo
                        : art
                )
            }
        case types.deleteArticulo:
            return {
                ...state,
                articulos: state.articulos.filter(art => art.idarticulo !== action.payload.id)
            }

        default:
            return state;
    }
}