import React from 'react';

export const Aside = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log("aside click")
    }

    return (
        <div>



            <ul>
                <li>  <button className="btn btn-primary"  onClick={ handleClick } > ventas </button> </li>
                <li>  <button className="btn btn-secondary"  onClick={ handleClick } > compras </button> </li>
                <li>  <button className="btn btn-danger"  onClick={ handleClick } > perfil </button> </li>
            </ul>

        </div>
    );
};
