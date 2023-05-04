import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='text-center'>{navigation.state === 'loading' && <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}</div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;