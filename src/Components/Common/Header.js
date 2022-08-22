import React, { useState } from 'react';
import Brand from '../../Img/brand.svg';

const Header = () => {
    const [inputSearchShow, setInputSearchShow] = useState(false);
    const [overlayMobile, setOverlayMobile] = useState(false);

    function searchInputHandler(){
        inputSearchShow ? setInputSearchShow(false) : setInputSearchShow(true);
    }

    function overlayMobileHandler(){
        overlayMobile ? setOverlayMobile(false) : setOverlayMobile(true);
    }

    return (
        <div>
            <div className='headerContainer'>
                <div className='header'>
                    <div className='brandContainer'>
                        <img className='brand' src={Brand} alt=''></img>
                        <span className='brandText'>E-Commerce</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='search'>
                            <button className={inputSearchShow ? 'inputHidden inputButtonTrigger' : 'inputButtonTrigger'} type='button' onClick={searchInputHandler}><i className='fa-solid fa-magnifying-glass'></i></button>
                            <form className={inputSearchShow ? 'formSerach' : 'inputHidden formSearch'}>
                                <input className='inputSearch' type='text' placeholder='Buscar...'/>
                                <button className='buttonSearch' id='' type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
                            </form>
                        </div>
                        <div className='sesion'>
                            <button className='loginButton' type='button'>Iniciar Sesion</button>
                            <div style={{margin: '0 2vw', width: '0.2rem', height: '2.5rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                            <button className='registerButton' type='button'>Registrarse</button>
                        </div>
                        <div className='social'>
                            <div>
                                <span style={{fontSize: '70%', marginLeft: '7px', color: '#ffffff', fontFamily: '"ubuntu", sans-serif'}}>Síguenos en:</span>
                            </div>
                            <div>
                                <a className='icons' href='https://www.facebook.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-square-facebook'></i></a>
                                <a className='icons' href='https://twitter.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-square-twitter'></i></a>
                                <a className='icons' href='https://www.instagram.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-instagram'></i></a>
                                <a className='icons' href='https://www.youtube.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-youtube'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='barsButtonContainer'>
                        <button className='barsButton' type='button' onClick={overlayMobileHandler}><i className='fa-solid fa-bars'></i></button>
                    </div>
                </div>
                <div className={overlayMobile ? 'overlayMobileContainer' : 'overlayMobileContainer overlayHidden'}>
                    <div className='headerOverlay'>
                        <div className='mobileSesion'>
                            <button className='loginButton' type='button'>Iniciar Sesion</button>
                            <div style={{margin: '0 2vw', width: '0.2rem', height: '2rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                            <button className='registerButton' type='button'>Registrarse</button>
                        </div>
                        <button className='btn-close btn-close-white' type='button' onClick={overlayMobileHandler}></button>
                    </div>
                    <form className='mobileSearch'>
                        <input style={{width: '80%'}} className='inputSearch' type='text' placeholder='Buscar...'/>
                        <button className='mobileButtonSearch' type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
                    </form>
                </div>
                <div className='modalLoginContainer'>
                    <div className='modalLogin'>
                        <div className='modalLoginHeader'>
                            <button className='btn-close btn-close-white'></button>
                        </div>
                        <div className='modalLoginBody'>
                            <h1 className='modalLoginTitle'>¡Saludos!, visitante.<br/>Por favor ingresa tu correo electrónico y contraseña para iniciar sesión</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;