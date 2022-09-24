import React from 'react';
import './TopBanner.css'
const TopBanner = () => {
    return (
        <div className='container topbanner-container'>
            <img src={require('../../images/top_banner.jpg')} class="img-fluid" alt="..." />
        </div>
    );
};

export default TopBanner;