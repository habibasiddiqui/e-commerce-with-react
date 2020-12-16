import React from 'react';
import ProductCard from './ProductCard';

function ShowProduct({product}) {
    return (

            <div key={product.id}>
                {/* <div>{product.title}</div>
                <img  width='150px' src={product.image}></img> */}
                <ProductCard title={product.title} image={product.image} />
            </div>

    )
}

export default ShowProduct
