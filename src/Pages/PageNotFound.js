import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../Img/brand.svg';

const PageNotFound = () => {
    return (
        <div>
            <div className='brandHeader'>
                <NavLink className='linkBrand' to='/'>
                    <div className='brandContainer'>
                        <img className='brand' src={Brand} alt=''></img>
                        <span className='brandText'>RollingCommerce</span>
                    </div>    
                </NavLink>
            </div>
        </div>
    );
};

export default PageNotFound;