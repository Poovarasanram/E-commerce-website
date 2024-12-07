import React, { useContext } from 'react';
import './Productpage.css';
import star from '../assets/images/star_icon.png';
import stardull from '../assets/images/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';


const Productpage = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productpage'>
            <div className="productpage-left">
                <div className="productpage-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-img-list">
                    <img className='productpage-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className="productpage-right">
                <h1>{product.name}</h1>
                <div className="productpage-right-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={stardull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productpage-right-prices">
                    <div className="productpage-right-price-old">${product.old_price}</div>
                    <div className="productpage-right-price-ne">${product.new_price}</div>
                </div>
                <div className="productpage-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productpage-right-size">
                    <h1>Select Size</h1>
                    <div className="productpage-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} >ADD TO CART</button>
                <p className='productpage-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='productpage-right-category'><span>Tags :</span>Modern, Latest</p>

            </div>
        </div>
    )
}

export default Productpage;
