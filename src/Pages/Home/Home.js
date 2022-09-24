import React from 'react';
import { Link } from 'react-router-dom';
import CataGori from '../../Components/CataGori/CataGori';
import TopBanner from '../../Components/TopBanner/TopBanner';

const Home = () => {
    return (

        <>
            <TopBanner></TopBanner>
            <CataGori></CataGori>
        </>

    );
};

export default Home;