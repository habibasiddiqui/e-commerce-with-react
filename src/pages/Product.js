import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';
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
    
// console.log(products)
    return (
        <div >
            <Grid className='products-div' container spacing={0} justify='center' alignContent='space-around' alignItems='center'>
                {products.map( (product) => (
                
                <Grid style={{}} key={product.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
                
                ))}
            
            </Grid>

            {/* <ProductGrid products={products}/> */}
            
        </div>
    )
}

export default Product
