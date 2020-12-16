import React, { useState, useEffect } from 'react'
import ShowProduct from '../components/ShowProduct';

function Product() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(product => {
                console.log(product);
                setProducts(product);
            });
    }, [])
    
console.log(products)
    return (
        <div>
            {products.map( (product) => (
                <ShowProduct product={product} />
            ))}
        </div>
    )
}

export default Product
