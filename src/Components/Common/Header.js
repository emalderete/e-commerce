import React, { useState } from 'react';
import Brand from '../../Img/brand.svg';

const Header = () => {
    const [inputSearchShow, setInputSearchShow] = useState(false);

    function searchInputHandler(){
        inputSearchShow ? setInputSearchShow(false) : setInputSearchShow(true);
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
                                <input className='inputSearch' type='text' placeholder='Buscar...'></input>
                                <button className='buttonSearch' id='' type='submit'><i className='fa-solid fa-magnifying-glass'></i></button>
                            </form>
                        </div>
                        <div className='sesion'>
                            <button className='loginButton' type='button'>Iniciar Sesion</button>
                            <div style={{margin: '0 2vw', width: '0.2rem', height: '2.5rem', backgroundColor: '#ffffff', borderRadius: '5px'}}></div>
                            <button className='registerButton' type='button'>Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modalContainer'>
                <div className='modal'>
                    <div className='modalHeader'>
                        <button className='btn-close'></button>
                    </div>
                    <div className='modalBody'>
                        este es un texto de prueba
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;