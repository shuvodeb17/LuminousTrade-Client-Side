import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Products from '../Products/Products';

const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    },[])

    return (
        <div>
            <Banner />
            <ChooseUs />
            <Products />
        </div>
    );
};

export default Home;