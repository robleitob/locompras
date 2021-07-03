import React from 'react';

const Navbar = (props)=>{
    console.log(props);
    return(
        <nav>
            <h3>{props.nombreDeLaTienda}</h3>
            <ul>
                <li><a href="#">Compras</a></li>
                <li><a href="#">Arriendas</a></li>
                <li><a href="#">Administracion</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            {/* <button onClick={props.darBienvenida}>Saludar</button> */}
        </nav>
    );
};

export default Navbar;