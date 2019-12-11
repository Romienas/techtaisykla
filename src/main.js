import React,  { Component } from 'react';
import Hero from './hero';
import Services from './services';
import Header from './header';
import Why from './why';
import Contacts from './contacts';
import Footer from './footer';
import Map from './map';
import Cookie from './cookie';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hero />
                <Services />
                <Why />
                <Contacts />
                <Map />
                <Footer />
                <Cookie />
            </div>
        )
    }
}

export default Main;