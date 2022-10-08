import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer-container">
            <div className="row">
                <div className="col-md-4 footer-aurpon-container">
                    <h2>Calculas Of The Day</h2>
                    <p className='pt-3'>We are currently working on creating different databases of mathematical problems with solutions. Hope the second derivative of your life is always negative.</p>
                    <button className='btn btn-danger f-btn'>
                        <a href="https://instagram.com/calculusoftheday?igshid=NzNkNDdiOGI=">Instragram</a>
                    </button>
                    <button className='btn btn-primary ms-3  f-btn'>
                        <a href="https://www.facebook.com/groups/mathology">Facebook Group</a>
                    </button>
                    <button className='btn btn-primary ms-3 mt-3  f-btn'>
                        <a href="https://www.facebook.com/calculusoftheday">Facebook Page</a>
                    </button>
                </div>
                <div className="col-md-2 footer-links">
                    <Link to='/'>Home</Link>
                    <Link to='/event'>event</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/about'>Contact Us</Link>
                </div>
                <div className="col-md-3 footer-img-container">
                    <img src={require('../../images/footer.jpg')} alt="" />
                </div>
                <div className="col-md-3 footer-location ">
                    {/* <p>Sundori Plaza (3rd Floor) House #07, Road #04,</p> */}
                    <p>Dhaka, Bangladesh</p>
                    <p>calculusoftheday@gmail.com</p>
                </div>
            </div>
            <p className="pt-5 text-center fw-semibold">Copyright © 2022  Calculus of the Day</p>
        </div>
    );
};

export default Footer;