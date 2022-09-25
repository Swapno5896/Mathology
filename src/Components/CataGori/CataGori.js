import React, { useState } from 'react';
import { selectFormLik, time_difference } from '../../utility/utility';
import './CataGori.css';
import { useNavigate } from "react-router-dom";

const CataGori = () => {

    let navigate = useNavigate();
    const [catagori, setCatagori] = useState({});

    // set state
    const handelChange = (e) => {
        setCatagori({ ...catagori, [e.target.id]: e.target.value })
    }


    const handelSubmit = () => {
        console.log(catagori);
        // according to form info give specific link
        const link = selectFormLik(catagori)

        // store data in local storage
        const ifremLink = localStorage.setItem("ifremLink", link[1]);
        navigate("/event");
    }

    return (
        <div className='container mb-5 pb-5'>
            <h3 className='text-center mt-5 mb-5 catagori-welcome'>Welcome To CALCHUNT 1.0</h3>
            <p className='pb-3 fs-5'> <span className='text-primary fs-3 '>
                Dear Participant

            </span>
                <br />
                <br />
                You have got all day to take part in the event. You can part in the exam at any part of the day.
                There are <span className='text-success'>
                    15 questions
                </span>  in total.


                <span className='text-warning'>
                    You will get only 45 minutes to answer,  After 45 minutes it will be closed automatically, and you can't be able to submit the form and will be disqualified.
                </span>


                So Be vigilant about times. If you just answer the in the text box you will get only
                <span className='text-danger'>
                    50% marks
                </span>
                . To get 100% marks, you have to send us your solutions to the problems on our email account + write down the answer in the text box. You have to specify the solutions in your exam script.
                <span className='text-warning'>
                    You can submit in any format(must have to be hand written) except videos.
                </span>
                Any image from the Internet, copy or any image including typing is prohibited and this will not be counted in marking. We know some problems are difficult to type, for that kind of problems if you send us the solution you will be eligible to get full marks.
                <br />
                <br />
                <p className=''>
                    <span className='fw-bolder fs-3 text-success'> Levels:</span>      <br />
                    1. Junior(up to grade 10) <br />
                    2. Senior(grade 11 to infinity)
                </p>
                <br />   <span className='fs-4 text-info '>
                    Email ID: calculusoftheday@gmail.com
                </span>
            </p>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={require('../../images/Cover 1.png')} class="img-fluid mt-5" alt="..." />
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
                            <option value="integration">Integration Bee  </option>
                            <option value="differentiation">Differentiation Bee   </option>
                            <option value="application-of-calculu">Application of Calculus </option>
                            <option value="math-olympiad">Math Olympiad </option>
                            <option value="mean-contest">Mathematical Meme Contest</option>
                        </select>
                    </div>
                    <button onClick={handelSubmit} type="submit" class="btn btn-primary mt-5">Go To Exam</button>
                </div>
            </div>
        </div>
    );
};

export default CataGori;