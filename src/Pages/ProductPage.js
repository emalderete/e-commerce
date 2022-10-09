import React, { useState } from 'react';
import Header from '../Components/Common/Header';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import '../Components/ProductPage/ProductPage.css';
import { constructorNewItem } from '../Components/ProductPage/Data';

const ProductPage = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    function overlayNewItemHandler(){
        showOverlay ? setShowOverlay(false) : setShowOverlay(true);
    };

    function newItemLoader(){
        let itemName = document.querySelector('#itemName').value;
        let itemPrice = document.querySelector('#itemPrice').value;
        let itemDesc = document.querySelector('#itemDesc').value;
        let itemCat = document.querySelector('#itemCat').value;
        let itemImage1 = document.querySelector('#itemImage1').value;
        let itemImage2 = document.querySelector('#itemImage2').value;
        let itemCreated = new constructorNewItem(itemName, itemPrice, itemDesc, itemCat, itemImage1, itemImage2);
        if (JSON.stringify(localStorage).indexOf('productsForSale') === -1){
            let itemOnArray = [];
            itemOnArray.push(itemCreated);
            let itemCreated_string = JSON.stringify(itemOnArray);
            localStorage.setItem('productsForSale', itemCreated_string);
        } else {
            let storageParse = JSON.parse(localStorage.getItem('productsForSale'));
            storageParse.push(itemCreated);
            let storage_string = JSON.stringify(storageParse);
            localStorage.setItem('productsForSale', storage_string);
        };
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
                        <div className='item'>
                            <div className='itemGeneral'>
                                <div className='itemCoverContainer'>
                                    <img className='itemCover' src='https://media.revistagq.com/photos/5ca5eca84c7adb138100c90a/3:4/w_318,h_424,c_limit/el_pantalon_de_vestir_894893361.jpg' alt=''/>
                                </div>
                                <div className='itemInfoContainer'>
                                    <h3>Titulo de prueba, pantalon de vestir</h3>
                                    <span>$3.500</span>
                                    <p><b>Descripción de prueba:</b><br/>Pantalon de gabardina de excelente calidad de manufactura. Compuesto de fibra semisintética tejida a mano</p>
                                </div>
                            </div>
                            <div className='itemCategory'>
                                <span>Categoría de prueba</span>
                            </div>
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