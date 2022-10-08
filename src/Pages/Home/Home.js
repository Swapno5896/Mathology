import React from 'react';
import { Link } from 'react-router-dom';
import CataGori from '../../Components/CataGori/CataGori';
import EventResult from '../../Components/EventResult/EventResult';
import TopBanner from '../../Components/TopBanner/TopBanner';

const Home = () => {
    return (

        <>
            <TopBanner></TopBanner>
            <EventResult></EventResult>
            <hr />
            {/* <CataGori></CataGori> */}

        </>

    );
};

export default Home;