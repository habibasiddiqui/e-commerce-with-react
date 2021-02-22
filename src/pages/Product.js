import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';

function Product() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(product => {
                // console.log(product);
                setProducts(product);
            });
    }, [])
    
// console.log(products)
    return (
        <div >
            <Grid className='products-div' container spacing={2} justify='center' alignContent='space-around' alignItems='center'>
                {products.map( (product) => (
                
                <Grid style={{}} key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
                
                ))}
            
            </Grid>

            
        </div>
    )
}

export default Product
