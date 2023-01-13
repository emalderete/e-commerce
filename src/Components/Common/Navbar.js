import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [accountSettingsMenuShow, setAccountSettingsMenuShow] = useState(false);

    function showAccountButton(){
        if(JSON.stringify(sessionStorage).indexOf('userLoged') !== -1){
            return(
                    <button className='userAccountButton' onClick={showAccountMenuHandler}> <i className='fa-solid fa-user'></i> Cuenta</button>
            )
        }
    };

    function showAccountMenuHandler(){
        accountSettingsMenuShow ? setAccountSettingsMenuShow(false) : setAccountSettingsMenuShow(true);
    };

    function logout(){
        sessionStorage.removeItem('userLoged');
        document.location.reload();
    };

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
                    {showAccountButton()}
                    <li><NavLink to='/contact' className='navButtons'><i className='fa-solid fa-location-dot'></i><span className='navItemInnerText'> Contacto</span></NavLink></li>
                    <li><button className='navButtons'><i className='fa-solid fa-circle-question'></i><span className='navItemInnerText'> Ayuda</span></button></li>
                </ul>
                <div className={accountSettingsMenuShow ? 'userAccountMenu' : 'userAccountMenu hideAccountMenu'}>
                    <ul>
                        <li><NavLink className='adminProductsButton userAccountMenuButtons' to='/product'> <i className='fas fa-user-cog'></i> Administrar productos</NavLink></li>
                        <li><NavLink className='accountSettingsButton userAccountMenuButtons' to='/settings'> <i className='fa-solid fa-gear'></i> Configuración</NavLink></li>
                        <li><button onClick={logout} type='button' className='accountLogOut userAccountMenuButtons'> <i className='fa-solid fa-arrow-right-from-bracket'></i> Cerrar sesión</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;