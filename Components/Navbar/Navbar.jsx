import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/images/logo.png';
import Cart_icon from '../assets/images/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {
    const [menu, setActiveItem] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={Logo} alt='' />
                <p>SHOPPER</p>
            </div>

            <ul className="nav-menu">
                <li className={menu === 'shop' ? 'active' : ''} onClick={() => setActiveItem('shop')}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link></li>
                <li className={menu === 'mens' ? 'active' : ''} onClick={() => setActiveItem('mens')}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link></li>
                <li className={menu === 'womens' ? 'active' : ''} onClick={() => setActiveItem('womens')}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link></li>
                <li className={menu === 'kids' ? 'active' : ''} onClick={() => setActiveItem('kids')}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link></li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={Cart_icon} alt='' /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
