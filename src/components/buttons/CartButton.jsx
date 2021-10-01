import React from 'react';
import { NavLink } from 'react-router-dom';

const CartButton = () => {
    return (
        <div>
              <>
            <NavLink to="/cart" className="btn btn-outline-success ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ()
            </NavLink>
        </>
        </div>
    )
}

export default CartButton
