import React from 'react';
import Brand from '../../Img/brand.svg';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footer'>
                <div className='fourColumnsContainer'>
                    <div className='brandContainer' style={{marginTop: '2.5rem'}}>
                        <img className='brand' src={Brand} alt=''></img>
                        <span className='brandText'>E-Commerce</span>
                    </div>
                    <div className='columnSells'>
                        <ul className='listStyleNone'>
                            <li>Categorias</li>
                            <li>Destacado</li>
                            <li>Favoritos</li>
                            <li>Productos</li>
                        </ul>
                    </div>
                    <div className='columnAbout'>
                        <ul className='listStyleNone'>
                            <li>Contacto</li>
                            <li>Sugerencias</li>
                            <li>Trabaja con nosotros</li>
                            <li>Ayuda</li>
                        </ul>
                    </div>
                    <div className='columnFollow'>
                    <span style={{fontSize: '100%', marginLeft: '7px', color: '#ffffff', fontFamily: '"ubuntu", sans-serif'}}>Síguenos en:</span>
                        <div style={{marginBottom: '2rem'}}>
                            <a className='icons' href='https://www.facebook.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-square-facebook'></i></a>
                            <a className='icons' href='https://twitter.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-square-twitter'></i></a>
                            <a className='icons' href='https://www.instagram.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-instagram'></i></a>
                            <a className='icons' href='https://www.youtube.com/' rel='noreferrer noopener' target='blank'><i className='fa-brands fa-youtube'></i></a>
                        </div>
                        <span>Contactanos:</span>
                        <ul style={{marginTop: '0.5rem'}} className='listStyleNone'>
                            <li>Teléfono: (+54) 381 1234 567</li>
                            <li>Mail: ejemplo@correo.com</li>
                        </ul>
                    </div>
                    <img className='fiscalQR' src='https://1.bp.blogspot.com/-tyDj3FH73V0/UVugtbI_MYI/AAAAAAAAGYE/TzM5UBA57QQ/s1600/Data-fiscal-Web.jpg' alt='código QR de data fiscal' />
                </div>
                <div className='copyrights'>
                    <span>&copy; 2022. E-Commerce, la marca comercial, el logo y sus referencias son marcas registradas pertenecientes a RollingCode. Todos los derechos.</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;