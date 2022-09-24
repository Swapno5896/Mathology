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
            <p className='pb-3 fs-5'>There are 15 questions in total.
                You will get only 45 minutes to answer. After 45 minutes it will be closed automatically and you can't able to submit the form and will be disqualified. So Be vigilant about times.
                If you just answer the in the text box you will get only 50% marks.
                To get 100% marks you have to send us your solutions to the problems on our email account + write down the answer in the text box. You have to specify the problems. You can submit in any format except videos.

                You must submit handwritten images. Any image from the Internet, copy or any image including typing is prohibited and this will not be counted in marking.
                We know some problems are difficult to type, for that kind of problems if you send us the solution we will be eligible for getting full marks.
                <br />    Email ID: calculusoftheday@gmail.com</p>
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
                            {/* <option value="differentiation">Differentiation Bee   </option> */}
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