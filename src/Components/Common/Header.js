import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../../Img/brand.svg';

const Header = () => {
    const [inputSearchShow, setInputSearchShow] = useState(false);
    const [overlayMobile, setOverlayMobile] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    function searchInputHandler(){
        inputSearchShow ? setInputSearchShow(false) : setInputSearchShow(true);
    }

    function overlayMobileHandler(){
        overlayMobile ? setOverlayMobile(false) : setOverlayMobile(true);
    }

    function showPassHandler(e){
        e.preventDefault(showPass ? setShowPass(false) : setShowPass(true));
        
    }

    function showLoginModalHandler(){
        showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
    }

    function showRegisterModalHandler(){
        showRegisterModal ? setShowRegisterModal(false) : setShowRegisterModal(true);
    }

    function showLoginModalHandlerMobile(){
        showLoginModalHandler();
        overlayMobileHandler();
    }

    function showRegisterModalHandlerMobile(){
        showRegisterModalHandler();
        overlayMobileHandler();
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
                            <button className='loginButton' type='button' onClick={showLoginModalHandler}>Iniciar Sesion</button>
                            <div style={{margin: '0 2vw', width: '0.2rem', height: '2.5rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                            <button className='registerButton' type='button' onClick={showRegisterModalHandler}>Registrarse</button>
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
                            <button className='loginButton' type='button' onClick={showLoginModalHandlerMobile}>Iniciar Sesion</button>
                            <div style={{margin: '0 2vw', width: '0.2rem', height: '2rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                            <button className='registerButton' type='button' onClick={showRegisterModalHandlerMobile}>Registrarse</button>
                        </div>
                        <button className='btn-close btn-close-white' type='button' onClick={overlayMobileHandler}></button>
                    </div>
                    <form className='mobileSearch'>
                        <input style={{width: '80%'}} className='inputSearch' type='text' placeholder='Buscar...'/>
                        <button className='mobileButtonSearch' type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
                    </form>
                </div>
                <div className={showLoginModal ? 'modalLoginContainer' : 'modalLoginContainer hiddenOverlay'}>
                    <div className={showLoginModal ? 'modalLogin' : 'modalLogin hiddenModal'}>
                        <div className='modalLoginHeader'>
                            <button className='btn-close' onClick={showLoginModalHandler}></button>
                        </div>
                        <div style={{padding: '0% 10% 10% 10%'}}>
                            <div className='modalLoginBody'>
                                <h1 className='modalLoginTitle'>¡Hola!<br/>Por favor ingresa tu correo electrónico y contraseña para iniciar sesión</h1>
                                <form className='formLogin'>
                                    <div className='modalInput'>
                                        <label name='mail'>E-mail</label>
                                        <input type='email' required />
                                    </div>
                                    <div className='modalInput'>
                                        <label name='password'>Contraseña</label>
                                        <input type={showPass ? 'text' : 'password'} required />
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.4rem', pointerEvents: 'none'}}>
                                            <button className={showPass ? 'displayNone' : null} style={{backgroundColor: '#00000000', border: 'none', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye'></i></button>
                                            <button className={showPass ? null : 'displayNone'} style={{backgroundColor: '#00000000', border: 'none', marginLeft: '-1px', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye-slash'></i></button>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                        <button style={{margin: '0 1rem', marginTop: '1rem'}} className='buttonLoginContinue' type='submit'>Continuar</button>
                                        <NavLink className='recoverLink' to='/recover'>¿Olvidaste tu contraseña?</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={showRegisterModal ? 'modalLoginContainer' : 'modalLoginContainer hiddenOverlay'}>
                    <div className={showRegisterModal ? 'modalLogin' : 'modalLogin hiddenModal'}>
                        <div className='modalLoginHeader'>
                            <button className='btn-close' onClick={showRegisterModalHandler}></button>
                        </div>
                        <div style={{padding: '0% 10% 10% 10%'}}>
                            <div className='modalLoginBody'>
                                <h1 className='modalLoginTitle'>¡Bienvenido!<br/>Estás a un paso de adquirir eso que te gusta desde la comodidad de tu hogar.</h1>
                                <form className='formLogin'>
                                    <div className='modalInput'>
                                        <label name='nick'>Nombre de usuario</label>
                                        <input type='text' required />
                                    </div>
                                    <div className='modalInput'>
                                        <label name='mail'>E-mail</label>
                                        <input type='email' required />
                                    </div>
                                    <div className='modalInput'>
                                        <label name='password'>Contraseña</label>
                                        <input type={showPass ? 'text' : 'password'} required />
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.4rem', pointerEvents: 'none'}}>
                                            <button className={showPass ? 'displayNone' : null} style={{backgroundColor: '#00000000', border: 'none', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye'></i></button>
                                            <button className={showPass ? null : 'displayNone'} style={{backgroundColor: '#00000000', border: 'none', marginLeft: '-1px', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye-slash'></i></button>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '1.5rem'}} className='modalInput'>
                                        <label name='password'>Repetir contraseña</label>
                                        <input type={showPass ? 'text' : 'password'} required />
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.4rem', pointerEvents: 'none'}}>
                                            <button className={showPass ? 'displayNone' : null} style={{backgroundColor: '#00000000', border: 'none', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye'></i></button>
                                            <button className={showPass ? null : 'displayNone'} style={{backgroundColor: '#00000000', border: 'none', marginLeft: '-1px', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye-slash'></i></button>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                        <button className='buttonLoginContinue' type='submit'>Continuar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;