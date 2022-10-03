import React, { useState } from 'react';
import Header from '../Components/Common/Header';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import '../Components/ProductPage/ProductPage.css';
import { constructorNewItem } from '../Components/ProductPage/Data';

const ProductPage = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    var storage_string = JSON.stringify(localStorage);

    function overlayNewItemHandler(){
        showOverlay ? setShowOverlay(false) : setShowOverlay(true);
    };

    function randomNumberGenerator() {
        return Math.floor(Math.random() * 10000);
    }

    function newItemLoader(){
        let itemId = 'item' + randomNumberGenerator();
        let itemName = document.querySelector('#itemName').value;
        let itemPrice = document.querySelector('#itemPrice').value;
        let itemDesc = document.querySelector('#itemDesc').value;
        let itemCat = document.querySelector('#itemCat').value;
        let itemImage1 = document.querySelector('#itemImage1').value;
        let itemImage2 = document.querySelector('#itemImage2').value;

        let itemCreated = new constructorNewItem(itemName, itemPrice, itemDesc, itemCat, itemImage1, itemImage2);
        let itemCreated_string = JSON.stringify(itemCreated);

        if (storage_string.indexOf(itemId) === -1) {
            localStorage.setItem(itemId, itemCreated_string);
            console.log('se agregó el nuevo artículo a la base de datos');
        } else {
            itemId = 'item' + randomNumberGenerator();
            localStorage.setItem(itemId, itemCreated_string);
            console.log('se agregó el nuevo artículo luego de 1 reintento');
        }

        // function printProducts(){
        //     if (localStorage === null){
        //         return (
        //             <div className='noProducts'>
        //                 <h5 style={{marginBottom: '2rem'}}>Por ahora no hay productos que mostrar <i className='fa-solid fa-boxes-packing'>a</i></h5>
        //                 <h5>¡Agrega uno nuevo!</h5>
        //                 <h5>Pulsa el botón "<i className='fa-solid fa-circle-plus'></i>"</h5>
        //             </div>
        //         );
        //     } else {

        //     };
        // };
    };

    return (
        <div style={showOverlay ? {position: 'fixed', width: '100%'} : null}>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <div className='productTitle'>
                    <h1>Administración de productos</h1>
                    <div className='underline'></div>
                </div>
                <div className='productsContainer'>
                    <div className='products'>
                        {/* Cuadro de dialogo a mostrar en caso de que no haya cargado ningun producto */}
                        {
                            
                        }
                        <div className='productsItem'>
                            <img src='#' alt=''/>
                            <h3>Titulo del artículo</h3>
                            <p>Descripción del artículo</p>
                        </div>
                        <button type='button' className='addButton' onClick={overlayNewItemHandler}><i className='fa-solid fa-circle-plus'></i></button>
                    </div>
                </div>
            </div>

            {/* Modal para ingresar un nuevo artículo */}

            <div className={showOverlay ? 'overlayAddItemContainer' : 'overlayAddItemContainer overlayAddItemContainerHide'}>
                <div className={showOverlay ? 'overlayAddItem' : 'overlayAddItem overlayAddItemHide'}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button style={{margin: '1rem', fontSize: '1.2rem', position: 'fixed'}} className='btn-close btn-close-white' onClick={overlayNewItemHandler} />
                    </div>
                    <h3>Agregar nuevo artículo</h3>
                    <form className='formAddItem'>
                        <div className='modalInput inputAddItem'>
                            <label htmlFor='itemName'>Nombre del producto</label>
                            <input type='text' name='itemName' id='itemName' required />
                        </div>
                        <div className='modalInput inputAddItem'>
                            <label htmlFor='itemPrice'>Precio</label>
                            <div>
                                <span style={{color: '#ffffff', fontSize: '1.2rem', marginRight: '0.7rem'}}>$</span>
                                <input style={{width: '35%'}} type='number' name='itemPrice' id='itemPrice' required />
                            </div>
                        </div>
                        <div className='modalInput inputAddItem'>
                            <label htmlFor='itemDesc'>Descripción</label>
                            <input type='text' name='itemDesc' id='itemDesc' required />
                        </div>
                        <div className='modalInput inputAddItem'>
                            <label htmlFor='itemCat'>Categoría</label>
                            <select name='itemCat' id='itemCat' placeholder='- Elige una opción -' required>
                                <option value='moda'>Moda y accesorios</option>
                                <option value='belleza'>Artículos de Belleza</option>
                                <option value='tecnologia'>Tecnología</option>
                                <option value='herramientas'>Herramientas</option>
                                <option value='hogar'>Hogar y Muebles</option>
                                <option value='electrodomesticos'>Electrodomésticos</option>
                                <option value='juguetes'>Juegos y Juguetes</option>
                            </select>
                        </div>
                        <div className='modalInput inputAddItem'>
                            <label htmlFor='itemImage1'>Imagen de portada (URL)</label>
                            <input type='url' name='itemImage1' id='itemImage1' required />
                        </div>
                        <div className='modalInput inputAddItem'>
                            <label htmlFor='itemImage2'>Imagen de muestra (URL, opcional)</label>
                            <input type='url' name='itemImage2' id='itemImage2' />
                        </div>
                        <div className='modalInput inputAddItem'>
                            <button type='button' onClick={newItemLoader}>Cargar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductPage;