export const descifrarToken = (token) => {
    let payload = token.split('.')[1];

    let datos = window.atob(payload);

    return JSON.parse(datos);
}