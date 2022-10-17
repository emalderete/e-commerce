import React, { useState } from 'react';
import Header from '../Components/Common/Header';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import '../Components/ProductPage/ProductPage.css';
import { constructorNewItem } from '../Components/ProductPage/Data';

const ProductPage = () => {

    // Estados que controlan ventanas modal y menus desplegables.
    const [showOverlay, setShowOverlay] = useState(false);
    const [showContextualMenu, setShowContextualMenu] = useState(false);

    // Estado para el control del localStorage
    const [renderLocalStorage, setRenderLocalStorage] = useState(localStorage);
    var localStorageParsed = JSON.parse(renderLocalStorage.getItem('productsForSale'));

    // Funciones que, en conjunto con los estados, trabajan para controlar las ventanas modal y menus desplegables.
    function overlayNewItemHandler(){
        showOverlay ? setShowOverlay(false) : setShowOverlay(true);
    };
    function contextualMenuHandler(){
        showContextualMenu ? setShowContextualMenu(false) : setShowContextualMenu(true);
    }

    // Función PRINCIPAL que se encarga de la carga de nuevos productos desde la ventana modal correspondiente (CREATE).
    function newItemLoader(){

        // Se toman los valores de cada campo de la ventana de creación de producto y se crea un objeto con una clase constructora.
        let itemName = document.querySelector('#itemName').value;
        let itemPrice = document.querySelector('#itemPrice').value;
        let itemDesc = document.querySelector('#itemDesc').value;
        let itemCat = document.querySelector('#itemCat').value;
        let itemImage1 = document.querySelector('#itemImage1').value;
        let itemImage2 = document.querySelector('#itemImage2').value;
        let itemCreated = new constructorNewItem(itemName, itemPrice, itemDesc, itemCat, itemImage1, itemImage2);

        // Mediante un "if" se determina si ya existe la clave "productsForSale" dentro del localStorage,
        // si no existe la crea junto con el primer producto cargado,
        // si ya existe solicita los datos del localStorage, agrega un nuevo producto a cargar y luego lo sobreescribe.
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

    // Aquí inicia el código HTML a renderizar en la página. Se utilizó un "if" para renderizar el contenido según
    // la cantidad de productos cargados.
    if(JSON.stringify(localStorage).indexOf('productsForSale') === -1){
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
                            <div className='noProducts'>
                                <h5 style={{marginBottom: '2rem'}}>Por ahora no hay productos que mostrar <i className='fa-solid fa-boxes-packing'>a</i></h5>
                                <h5>¡Agrega uno nuevo!</h5>
                                <h5>Pulsa el botón "<i className='fa-solid fa-circle-plus'></i>"</h5>
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
                                <select name='itemCat' id='itemCat' required>
                                    <option value='Moda y accesorios'>Moda y accesorios</option>
                                    <option value='Belleza'>Artículos de Belleza</option>
                                    <option value='Tecnologia'>Tecnología</option>
                                    <option value='Herramientas'>Herramientas</option>
                                    <option value='Hogar y muebles'>Hogar y Muebles</option>
                                    <option value='Electrodomésticos'>Electrodomésticos</option>
                                    <option value='Juegos y juguetes'>Juegos y Juguetes</option>
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
    } else {
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
                            {/* mapeo de items en pantalla */}
                            {
                                localStorageParsed.map((item, index)=>{
                                  return (
                                      <div key={index} className='item'>
                                          <div className='itemGeneral'>
                                              <div className='itemCoverContainer'>
                                                  <img className='itemCover' src={item.cover_image} alt=''/>
                                              </div>
                                              <div className='itemInfoContainer'>
                                                  <h3>{item.name}</h3>
                                                  <span>$ {item.price}</span>
                                                  <p><b>Descripción:</b><br/>{item.description}</p>
                                              </div>
                                          </div>
                                          <div className='itemSecondary'>
                                              <div className='itemCategory'>
                                                  <span>{item.category}</span>
                                              </div>
                                              <button className='contextualButton' onClick={contextualMenuHandler}><i className='fa-solid fa-ellipsis-vertical'></i></button>
                                          </div>
                                          <div className={showContextualMenu ? 'itemContextualMenu' : 'itemContextualMenu contextualHide'}>
                                              <button className='contextualButtons' id='highlightButton'><i className='fa-solid fa-star'></i> Marcar como "Destacado"</button>
                                              <button className='contextualButtons' id='editButton'><i className='fa-solid fa-pencil'></i> Editar publicación</button>
                                              <button className='contextualButtons' id='deleteButton'><i className='fa-solid fa-delete-left'></i> Eliminar publicación</button>
                                          </div>
                                      </div>
                                  )
                              })
                            }
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
                                    <option value='Moda y accesorios'>Moda y accesorios</option>
                                    <option value='Belleza'>Artículos de Belleza</option>
                                    <option value='Tecnologia'>Tecnología</option>
                                    <option value='Herramientas'>Herramientas</option>
                                    <option value='Hogar y muebles'>Hogar y Muebles</option>
                                    <option value='Electrodomésticos'>Electrodomésticos</option>
                                    <option value='Juegos y juguetes'>Juegos y Juguetes</option>
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
    }
    
};

export default ProductPage;