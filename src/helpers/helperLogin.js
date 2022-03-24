import { conexion } from "../config/config";
import base64 from 'base-64'

export const postLogin = async (username, password) => {

    const url = conexion + "oauth/token";


    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + base64.encode("hola:12345")
            },
            body: new URLSearchParams({
                'username': username,
                'password': password,
                'grant_type': 'password'
            })
        });


        return resp;

    } catch (err) {
        console.log(err);
        return err.toString();
    }
}

export const refreshToken = async (refresh_token) => {

    const url = conexion + "oauth/token";


    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + base64.encode("hola:12345")
            },
            body: new URLSearchParams({
                'refresh_token':refresh_token,
                'grant_type': 'refresh_token'
            })
        });

        return resp;

    } catch (err) {
        console.log(err);
        return err.toString();
    }
}