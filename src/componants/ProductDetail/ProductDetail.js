import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
    const {productKey} = useParams();
   const product = fakeData.find(pb => pb.key === productKey);
   
    
    return (
        <div>
            <h1> Your Product Details ls Comming Sooooon</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;