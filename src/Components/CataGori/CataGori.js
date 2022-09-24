import React, { useState } from 'react';
import { selectFormLik, time_difference } from '../../utility/utility';
import './CataGori.css'
const CataGori = () => {
    const [catagori, setCatagori] = useState({});

    const handelChange = (e) => {
        setCatagori({ ...catagori, [e.target.id]: e.target.value })
    }
    const handelSubmit = () => {
        console.log(catagori);
        // according to form info give specific link
        const link = selectFormLik(catagori)
        console.log(`your link is ${link}`);

    }

    const click = () => {
        const current = new Date();
        setTimeout(() => {
            const current2 = new Date();
            const minuit = time_difference(current, current2)
            console.log(minuit);
            // const secondTime = current2.getTime() - current.getTime()
            // console.log(secondTime / (1000 * 60));

        }, 60000);

    }

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
                            <option selected>Choose Your Catagory</option>
                            <option name='a' value="Junior" >Junior</option>
                            <option name='b' value="Serion">Senior</option>
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
                    <button onClick={handelSubmit} type="submit" class="btn btn-primary mt-3">Go To Exam</button>
                    <button onClick={click}>js</button>
                </div>
            </div>
        </div>
    );
};

export default CataGori;