import React, { useState } from 'react';
import './CataGori.css'
const CataGori = () => {
    const [catagori, setCatagori] = useState({});

    const handelChange = (e) => {
        setCatagori({ ...catagori, [e.target.id]: e.target.value })
    }
    const handelSubmit = () => {
        console.log(catagori);
        if (catagori.catagori == 'Junior') {
            if (catagori.segment == 'mean-contest') {
                console.log('junior and mean');
            } else if (catagori.segment == 'integration') {
                console.log('junior and integration');
            }
            else if (catagori.segment == 'differentiation') {
                console.log('junior and differentiation');
            }
            else if (catagori.segment == 'math-olympiad') {
                console.log('junior and math-olympiad');
            }
            else {

                console.log('junior application-of-calculu');
            }
        }
        else {
            if (catagori.segment == 'mean-contest') {
                console.log('senior and mean');
            } else if (catagori.segment == 'integration') {
                console.log('senior and integration');
            }
            else if (catagori.segment == 'differentiation') {
                console.log('senior and differentiation');
            }
            else if (catagori.segment == 'math-olympiad') {
                console.log('senior and math-olympiad');
            }
            else {

                console.log('senior application-of-calculu');
            }
        }
    }
    // const redirectToCatagori =()=>{

    // }
    return (
        <div className='container'>
            <h3 className='text-center mt-5 mb-5 catagori-welcome'>Welcome To CALCHUNT 1.0</h3>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={require('../../images/Cover 1.png')} class="img-fluid" alt="..." />
                </div>
                <div className="col-md-4 col-md-6 col-sm-12">
                    <p className='text-center pb-3 fw-bolder fs-4 submit-title'>Please Submit This Form</p>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Enter Your Name</label>
                    </div>
                    <div class="form-floating" >
                        <select onChange={handelChange} class="form-select" id="catagori">
                            <option selected>Choose Your Catagori</option>
                            <option name='a' value="Junior" >Junior</option>
                            <option name='b' value="Serion">Serion</option>
                        </select>
                    </div>
                    <div class="form-floating mt-3">
                        <select onChange={handelChange} class="form-select" id="segment">
                            <option selected>Choose Your Segment</option>
                            <option value="mean-contest">mean contest </option>
                            <option value="integration">Integration  </option>
                            <option value="differentiation">Differentiation   </option>
                            <option value="math-olympiad">Math Olympiad   </option>
                            <option value="application-of-calculu">Application Of Calculu  </option>
                        </select>
                    </div>
                    <button onClick={handelSubmit} type="submit" class="btn btn-primary mt-3">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CataGori;