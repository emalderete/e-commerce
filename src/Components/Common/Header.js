import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../../Img/brand.svg';
import { constructorNewRegister } from '../ProductPage/Data';
import { registerFormName, registerFormMail, registerFormPass, registerFormRePass, registerFormCorrect } from '../FormsValidations';

const Header = () => {

    // Estados y funciones que controlan la aparición y desaparición de:
    // Ventana modal de inicio de sesión y ventana independiente de registro.
    // Menu desplegable para la versión móvil.
    // Botón de mostrar y ocultar contraseña.
    // Mostrar campo de búsqueda.
    // Mostrar ventana modal de inicio de sesion y registro y además ocultar menu desplegable para la versión móvil.
    
    const [inputSearchShow, setInputSearchShow] = useState(false);
    const [overlayMobile, setOverlayMobile] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [accountSettingsMenuShow, setAccountSettingsMenuShow] = useState(false);

    function searchInputHandler(){
        inputSearchShow ? setInputSearchShow(false) : setInputSearchShow(true);
    };

    function overlayMobileHandler(){
        overlayMobile ? setOverlayMobile(false) : setOverlayMobile(true);
    };

    function showPassHandler(e){
        e.preventDefault(showPass ? setShowPass(false) : setShowPass(true));
        
    };

    function showLoginModalHandler(){
        showLoginModal ? setShowLoginModal(false) : setShowLoginModal(true);
    };

    function showRegisterModalHandler(){
        showRegisterModal ? setShowRegisterModal(false) : setShowRegisterModal(true);
    };

    function showLoginModalHandlerMobile(){
        showLoginModalHandler();
        overlayMobileHandler();
    };

    function showRegisterModalHandlerMobile(){
        showRegisterModalHandler();
        overlayMobileHandler();
    };

    function showAccountMenuHandler(){
        accountSettingsMenuShow ? setAccountSettingsMenuShow(false) : setAccountSettingsMenuShow(true);
    }

    // Lógica de funcionamiento de la sesión.
    // Registro:
    // Validaciones:
    // Datos base de administrador:

    const adminData = [{userName : 'Admin', userMail : 'admin@mail.com', userPassword : 'administrador'}];
    const adminData_string = JSON.stringify(adminData);
    localStorage.setItem('registeredUsers', adminData_string);

    function RegisterForm(e){
        e.preventDefault();
        let username = document.querySelector('.registerInputUsername').value;
        let mail = document.querySelector('.registerInputMail').value;
        let password = document.querySelector('.registerInputPassword').value;
        let passwordConfirm = document.querySelector('.registerInputPasswordConfirm').value;
        if(!registerFormName(username)){
            alert('El nombre de usuario ingresado no es válido, debe ser de al menos 4 carácteres');
        } else if(!registerFormMail(mail)){
            alert('Por favor ingrese un correo válido');
        } else if(!registerFormPass(password)){
            alert('La contraseña debe tener al menos 8 carácteres');
        } else if(!registerFormRePass(password, passwordConfirm)){
            alert('Las contraseñas no coinciden');
        };
        if(registerFormCorrect(username, mail, password, passwordConfirm) && JSON.stringify(localStorage.getItem('registeredUsers')).indexOf(mail) === -1){
            let newUserDataCompiled = new constructorNewRegister(username, mail, password);
            if(JSON.stringify(localStorage).indexOf('registeredUsers') === -1){
                let object = [];
                object.push(newUserDataCompiled);
                let newUser_string = JSON.stringify(object);
                localStorage.setItem('registeredUsers', newUser_string);
            } else {
                let newUserDataCompiled = new constructorNewRegister(username, mail, password);
                let getUsersData = JSON.parse(localStorage.getItem('registeredUsers'));
                getUsersData.push(newUserDataCompiled);
                let newUser_string = JSON.stringify(getUsersData);
                localStorage.setItem('registeredUsers', newUser_string);
            }
        } else {
            return console.log('No se pudo completar el registro');
        }
    };

    // Login:
    // Lógica:

    function session(e) {
        e.preventDefault();
        let sessionMail = document.querySelector('#sessionLoginMail').value;
        let sessionPass = document.querySelector('#sessionLoginPassword').value;
        var usersParsedStorage = JSON.parse(localStorage.getItem('registeredUsers'));

        if(JSON.stringify(localStorage).indexOf('registeredUsers') !== -1){
            for (let user of usersParsedStorage){
                if(sessionMail === user.userMail){
                    let userTemp = user;
                    if(sessionPass === userTemp.userPassword){
                        let userLoged = userTemp;
                        let userLoged_string = JSON.stringify(userLoged);
                        sessionStorage.setItem('userLoged', userLoged_string);
                        document.location.reload();
                    }
                } else {
                    console.log('El mail o la contraseña son incorrectos');
                }
            }
        }
    }

    function logout(){
        sessionStorage.removeItem('userLoged');
        document.location.reload();
    }

    // Renderizado condicional

    function greetings(){
        // Si se ha iniciado sesión
        if(JSON.stringify(sessionStorage).indexOf('userLoged') !== -1){
            return(
                <div>
                    <h5 className='userGreeting'>¡Hola!, {JSON.parse(sessionStorage.getItem('userLoged')).userName}. Bienvenido de vuelta.</h5>
                    <button className='userAccountButton' onClick={showAccountMenuHandler}>Cuenta</button>
                    <div className={accountSettingsMenuShow ? 'userAccountMenu' : 'userAccountMenu hideAccountMenu'}>
                        <ul>
                            <li><NavLink className='adminProductsButton userAccountMenuButtons' to='/product'> <i className='fas fa-user-cog'></i> Administrar productos</NavLink></li>
                            <li><NavLink className='accountSettingsButton userAccountMenuButtons' to='/settings'> <i className='fa-solid fa-gear'></i> Configuración</NavLink></li>
                            <li><button onClick={logout} type='button' className='accountLogOut userAccountMenuButtons'> <i className='fa-solid fa-arrow-right-from-bracket'></i> Cerrar sesión</button></li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            // Si no se ha iniciado sesión
            return(
                <div className='sesion'>
                    <button className='loginButton' type='button' onClick={showLoginModalHandler}>Iniciar Sesion</button>
                    <div style={{margin: '0 2vw', width: '0.2rem', height: '2.5rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                    <button className='registerButton' type='button' onClick={showRegisterModalHandler}>Registrarse</button>
                </div>
            );
        }
    }

    return (
        <div>
            {/* Inicio del código del header */} 
            <div className='headerContainer'>
                <div className='header'>

                    {/* Logo principal del sitio web */}

                    <NavLink className='linkBrand' to='/'>
                        <div className='brandContainer'>
                            <img className='brand' src={Brand} alt=''></img>
                            <span className='brandText'>RollingCommerce</span>
                        </div>    
                    </NavLink>
                    <div style={{display: 'flex', alignItems: 'center'}}>

                        {/* Campo de búsqueda */}

                        <div className='search'>
                            <button className={inputSearchShow ? 'inputHidden inputButtonTrigger' : 'inputButtonTrigger'} type='button' onClick={searchInputHandler}><i className='fa-solid fa-magnifying-glass'></i></button>
                            <form className={inputSearchShow ? 'formSerach' : 'inputHidden formSearch'}>
                                <input className='inputSearch' type='text' placeholder='Buscar...'/>
                                <button className='buttonSearch' id='' type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
                            </form>
                        </div>

                        { /* Botones superiores de inicio de sesion y registro */}

                        <div className='sesion'>
                        {greetings()}
                        </div>

                        { /* Botones de redes sociales */}

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

                    {/* En móvil: boton de 3 barras o "hamburguesa" para el despliegue del menu */}

                    <div className='barsButtonContainer'>
                        <button className='barsButton' type='button' onClick={overlayMobileHandler}><i className='fa-solid fa-bars'></i></button>
                    </div>
                </div>

                {/* En móvil: menu desplegable desde el boton de barras. Se incluyen los botones de inicio de sesión y registro dentro */}

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

                {/* Ventana modal de inicio de sesión */}

                <div className={showLoginModal ? 'modalLoginContainer' : 'modalLoginContainer hiddenOverlay displayNone'}>
                    <div className={showLoginModal ? 'modalLogin' : 'modalLogin hiddenModal displayNone'}>
                        <div className='modalLoginHeader'>
                            <button className='btn-close' onClick={showLoginModalHandler}></button>
                        </div>
                        <div style={{padding: '0% 10% 10% 10%'}}>
                            <div className='modalLoginBody'>
                                <h1 className='modalLoginTitle'>¡Hola!<br/>Por favor ingresa tu correo electrónico y contraseña para iniciar sesión</h1>
                                <form className='formLogin'>
                                    <div className='modalInput'>
                                        <label name='mail'>E-mail</label>
                                        <input type='email' className='loginInputMail' id='sessionLoginMail' required />
                                    </div>
                                    <div className='modalInput'>
                                        <label name='password'>Contraseña</label>
                                        <input type={showPass ? 'text' : 'password'} className='loginInputPassword' id='sessionLoginPassword' required />
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.4rem', pointerEvents: 'none'}}>
                                            <button className={showPass ? 'displayNone' : null} style={{backgroundColor: '#00000000', border: 'none', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye-slash'></i></button>
                                            <button className={showPass ? null : 'displayNone'} style={{backgroundColor: '#00000000', border: 'none', marginLeft: '-1px', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye'></i></button>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                        <button style={{margin: '0 1rem', marginTop: '1rem'}} className='buttonLoginContinue' type='submit' onClick={session}>Continuar</button>
                                        <NavLink className='recoverLink' to='/recover'>¿Olvidaste tu contraseña?</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ventana modal de registro */}

                <div className={showRegisterModal ? 'modalLoginContainer' : 'modalLoginContainer hiddenOverlay displayNone'}>
                    <div className={showRegisterModal ? 'modalLogin' : 'modalLogin hiddenModal displayNone'}>
                        <div className='modalLoginHeader'>
                            <button className='btn-close' onClick={showRegisterModalHandler}></button>
                        </div>
                        <div style={{padding: '0% 10% 10% 10%'}}>
                            <div className='modalLoginBody'>
                                <h1 className='modalLoginTitle'>¡Bienvenido!<br/>Estás a un paso de adquirir eso que te gusta desde la comodidad de tu hogar.</h1>
                                <form className='formLogin'>
                                    <div className='modalInput'>
                                        <label name='nick'>Nombre de usuario</label>
                                        <input type='text' className='registerInputUsername' required />
                                    </div>
                                    <div className='modalInput'>
                                        <label name='mail'>E-mail</label>
                                        <input type='email' className='registerInputMail' required />
                                    </div>
                                    <div className='modalInput'>
                                        <label name='password'>Contraseña</label>
                                        <input type={showPass ? 'text' : 'password'} className='registerInputPassword' required />
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.4rem', pointerEvents: 'none'}}>
                                            <button className={showPass ? 'displayNone' : null} style={{backgroundColor: '#00000000', border: 'none', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye-slash'></i></button>
                                            <button className={showPass ? null : 'displayNone'} style={{backgroundColor: '#00000000', border: 'none', marginLeft: '-1px', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye'></i></button>
                                        </div>
                                    </div>
                                    <div style={{marginTop: '1.5rem'}} className='modalInput'>
                                        <label name='password'>Repetir contraseña</label>
                                        <input type={showPass ? 'text' : 'password'} className='registerInputPasswordConfirm' required />
                                        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-2.4rem', pointerEvents: 'none'}}>
                                            <button className={showPass ? 'displayNone' : null} style={{backgroundColor: '#00000000', border: 'none', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye-slash'></i></button>
                                            <button className={showPass ? null : 'displayNone'} style={{backgroundColor: '#00000000', border: 'none', marginLeft: '-1px', pointerEvents: 'all'}} onClick={showPassHandler}><i className='fa-solid fa-eye'></i></button>
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                        <button className='buttonLoginContinue' type='submit' onClick={RegisterForm}>Continuar</button>
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