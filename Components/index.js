import React from 'react';
import Cart from './cart';
import Header from './header';
import Navbar from './navbar';
import '../main.css';

export default function Index() {

    return (
        <>
        <Navbar />
        <Cart />
        <Header />
        </>
    )
}