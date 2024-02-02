import { useEffect, useContext } from 'react';
import React from "react";
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from "../ProductCard/ProductCard";
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

    const { products, setProducts, loading, setLoading } = useContext(AppContext);
    
    useEffect( () => {
        fetchProducts( 'iphone' ).then( ( response ) => {
            const result = response.results;
            setProducts( result );
            setLoading(false);
            // console.log( result );
        } );
    }, [] );

    // const map1 = products.map((product) => product = product.title)

    console.log(products)

    return (

        ( loading && <Loading /> ) || (
            <section className="products container">             
            {/* <p>{map1}</p> */ }
            {/* <ProductCard data={{}} /> */ }
            {
                products.map((product) => <ProductCard data={product} />)
            }
        </section>
            )

        
    );
}

export default Products;