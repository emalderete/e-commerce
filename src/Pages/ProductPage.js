import React from 'react';
import Header from '../Components/Common/Header';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import '../Components/ProductPage/ProductPage.css';

const ProductPage = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <div className='productTitle'>
                    <h1>Administración de productos</h1>
                    <div className='underline'></div>
                </div>
                <div className='productsContainer'>
                    <div className='products'>
                        <div className='noProducts'>
                        {/* Cuadro de dialogo a mostrar en caso de que no haya cargado ningun producto */}
                            <h5 style={{marginBottom: '2rem'}}>Por ahora no hay productos que mostrar <i className='fa-solid fa-boxes-packing'>a</i></h5>
                            <h5>¿Que tal si agregamos uno?</h5>
                            <h5>Pulsa el botón "<i className='fa-solid fa-circle-plus'></i>"</h5>
                        </div>
                        <button type='button' className='addButton'><i className='fa-solid fa-circle-plus'></i></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;