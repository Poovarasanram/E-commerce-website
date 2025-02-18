import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums1 from '../Components/Breadcrums1/Breadcrums1';
import Productpage from '../Components/ProductDisplay/Productpage';
import Description from '../Components/DescriptionBox/Description';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))

    return (
        <div>
            <Breadcrums1 product={product} />
            <Productpage product={product} />
            <Description />
            <RelatedProduct />
        </div>
    )
};

export default Product;
