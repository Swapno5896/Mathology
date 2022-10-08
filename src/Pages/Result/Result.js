import React from 'react';
import './Result.css'
const Result = () => {
    const resultImageLink = localStorage.getItem("resultImageLink");
    console.log(`resultImageLink : ${resultImageLink}`);
    return (
        <div className='container py-5'>
            <img className='result-image' src={resultImageLink} alt="" />
        </div>
    );
};

export default Result;