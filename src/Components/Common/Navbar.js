import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className='navbar'>
                <ul className='navItems'>
                    <li><NavLink to='/' className='navButtons'><i className='fa-solid fa-house-chimney'></i><span className='navItemInnerText'> Home</span></NavLink></li>
                    <li><button className='navButtons'><i className='fa-solid fa-star'></i><span className='navItemInnerText'> Destacado</span></button></li>
                    <li><button className='navButtons'><i className='fa-solid fa-heart'></i><span className='navItemInnerText'> Favoritos</span></button></li>
                    <li><button className='navButtons'><i className='fa-solid fa-cart-shopping'></i><span className='navItemInnerText'> Carrito</span></button></li>
                </ul>
                <ul className='navItemsAssist'>
                    <li><NavLink to='/contact' className='navButtons'><i className='fa-solid fa-location-dot'></i><span className='navItemInnerText'> Contacto</span></NavLink></li>
                    <li><button className='navButtons'><i className='fa-solid fa-circle-question'></i><span className='navItemInnerText'> Ayuda</span></button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;