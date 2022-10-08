import React from 'react';
import SubscribeForEvent from '../../Components/SubscribeForEvent/SubscribeForEvent';
import './Result.css'
const Result = () => {
    const resultImageLink = localStorage.getItem("resultImageLink");
    console.log(`resultImageLink : ${resultImageLink}`);
    return (
        <div className='container py-5'>
            <img className='result-image' src={resultImageLink} alt="" />
            <div className='py-5'>
                <SubscribeForEvent></SubscribeForEvent>

            </div>
        </div>
    );
};

export default Result;