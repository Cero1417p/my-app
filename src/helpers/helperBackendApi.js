import { conexion } from "../config/config";

export const peticion = async ( path, method ='GET' ,content ) => {

    const url = conexion + path;

    const token = JSON.parse(localStorage.getItem('token')).access_token;

    try {
        const resp = await fetch(url, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : method==='GET' ? null: JSON.stringify(content)
        });

        console.log(JSON.stringify(content));

        return resp;

    } catch (err) {
        console.log(err);
        return err.toString();
    }
}