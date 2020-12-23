import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './product';
import ProductItems from '../products.json';
import { getProductItems } from '../Statemanager/actionCreator';

export default function Header() {
    
    const productItems = [...ProductItems.items]

    const { products } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getProductItems(productItems))
        },
        []
    )
    
    return (
        <>
        <header className="hero">
            <div className="banner">
                <h1 className="banner-title">furniture collection</h1>
                <button className="banner-btn">shop now</button>
            </div>
        </header>
        <section className="products">
            <div className="section-title">
                <h2>our products</h2>
            </div>
            <div id="products" className="products-center">
                {products.map(item => (
                    <Product 
                        img={item.fields.image.fields.file.url} 
                        productName={item.fields.title} 
                        key={item.sys.id}
                        id={item.sys.id}
                        price={item.fields.price}
                />
                    ))}
            </div>
        </section>
    </>
    )
}