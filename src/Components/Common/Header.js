import React from 'react';
import Brand from '../../Img/brand.svg';

const Header = () => {
    return (
        <div>
            <div className='headerContainer'>
                <div className='header'>
                    <div className='brandContainer'>
                        <img className='brand' src={Brand} alt=''></img>
                        <span className='brandText'>E-Commerce</span>
                    </div>
                    <div>
                        <div className=''>
                        </div>
                        <div className='sesion'>
                            <button className='loginButton' type='button'>Iniciar Sesión</button>
                            <div style={{margin: '0 2vw', width: '0.2rem', height: '2.5rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                            <button className='registerButton' type='button'>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;