import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer-container">
            <div className="row">
                <div className="col-md-4 footer-aurpon-container">
                    <h2>Calculas Of The Day</h2>
                    <p className='pt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur amet quisquam rem. Nulla eaque soluta voluptate, maiores, quia magni totam numquam, explicabo quibusdam accusamus porro suscipit tenetur rerum non reprehenderit?</p>

                    <button className='btn btn-primary f-btn'>You Tube</button>
                    <button className='btn btn-danger ms-3  f-btn'>Facebook</button>
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
                    <p>Momtaz Plaza (3rd Floor) House #07, Road #04,</p>
                    <p>Dhaka, Bangladesh</p>
                    <p>Swapnom73@gmail.com</p>
                </div>
            </div>
            <p className="pt-5 text-center fw-semibold">Copyright © 2022 Mathology</p>

        </div>
    );
};

export default Footer;