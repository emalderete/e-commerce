import React, { useState } from 'react';
import Header from '../Components/Common/Header';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import '../Components/ProductPage/ProductPage.css';

const ProductPage = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    function overlayNewItemHandler(){
        showOverlay ? setShowOverlay(false) : setShowOverlay(true);
    }

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
                            <h5>¡Agrega uno nuevo!</h5>
                            <h5>Pulsa el botón "<i className='fa-solid fa-circle-plus'></i>"</h5>
                        </div>
                        <button type='button' className={showOverlay ? 'addButton moveAddButton' : 'addButton'} onClick={overlayNewItemHandler}><i className='fa-solid fa-circle-plus'></i></button>
                    </div>
                </div>
            </div>
            <div className={showOverlay ? 'overlayNewItem' : 'overlayNewItem hideOverlayNewItem'}>
                <div style={{display: 'flex', justifyContent: 'flex-end', margin: '1rem'}}>
                    <button style={{fontSize: '1.5rem'}} className='btn-close' onClick={overlayNewItemHandler}></button>
                </div>
                <h3>Agregar nuevo producto</h3>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <form className='newItemForm'>
                        <div className='modalInput'>
                            <label name='mail'>Nombre del producto</label>
                            <input type='text' required />
                        </div>
                        <div className='modalInput'>
                            <label name='mail'>Precio</label>
                            <input type='text' required />
                        </div>
                        <div className='modalInput'>
                            <label name='mail'>Descripción</label>
                            <input type='text' required />
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;