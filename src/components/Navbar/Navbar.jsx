import React from 'react';
import Cart from './Cart/CartWidget';
import logoImg from "../../assets/logo.png";

const Navbar = (props)=>{
    console.log(props);
    return(
        <nav>
            {/* <h3>{props.nombreDeLaTienda}</h3> */}
            <div className="logo">
                <a href="#"><img src={logoImg} alt="Logo" /></a>
            </div>
            <ul>
                <li><a href="#">Compras</a></li>
                <li><a href="#">Arriendas</a></li>
                <li><a href="#">Administracion</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <span><Cart/></span>
            
            {/* <button onClick={props.darBienvenida}>Saludar</button> */}
        </nav>
    );
};

export default Navbar;