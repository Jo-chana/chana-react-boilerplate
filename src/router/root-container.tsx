import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';
import { Routes } from './routes';

export default function RootContainer() {

    return <BrowserRouter>
        <Header />
        {
            Routes.map(it => 
                <Route key={ it.name } exact={ it?.exact ?? false } path={ it.path } component={ it.component } />
            )
        }
        <Footer />
        {/* if you need sidebar on your website */}
        {/* <SidebarContainer /> */}
    </BrowserRouter>
}