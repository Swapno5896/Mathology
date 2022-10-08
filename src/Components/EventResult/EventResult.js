import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShowResultImage } from '../../utility/utility';
import './EventResult.css'
const EventResult = () => {
    let navigate = useNavigate();
    const [catagori, setCatagori] = useState({});

    const handelChange = (e) => {
        setCatagori({ ...catagori, [e.target.id]: e.target.value })
    }

    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(catagori);

        const link = ShowResultImage(catagori)

        // store link in local storage
        const resultImageLink = localStorage.setItem("resultImageLink", link[1]);
        navigate("/result");
    }
    return (
        <section className='py-5 my-5' >
            <div className="bg-cover event-result-form">
                <div className="overlay">
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-12 section-intro text-center" data-aos="fade-up">
                            <p className='text-center pt-5  catagori-welcome'>Hello Participants</p>

                            <div class="divider"></div>
                            <p className='pb-2 fs-4'>The results are out now. Your ability to relentlessly <br /> search for solutions to problems and find unique ways  of thinking is the key to this success <br /> and many to come. Warmest congratulations on your achievement! Wishing you even more success in the future.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 mx-auto" data-aos="fade-up">
                            <form action="#" class="row g-4">

                                {/* <div class="form-group col-md-12">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div> */}

                                <div class="form-floating" >
                                    <select onChange={handelChange} class="form-select form-control" id="catagori">
                                        <option selected>Choose Your Catagory</option>
                                        <option name='a' value="Junior" >Junior</option>
                                        <option name='b' value="Serion">Senior</option>
                                    </select>
                                </div>

                                <div class="form-floating mt-3">
                                    <select onChange={handelChange} class="form-select form-control" id="segment">
                                        <option selected>Choose Your Segment</option>
                                        <option value="integration">Integration Bee  </option>
                                        <option value="differentiation">Differentiation Bee   </option>
                                        <option value="application-of-calculu">Application of Calculus </option>
                                        <option value="math-olympiad">Math Olympiad </option>
                                        <option value="mean-contest">Mathematical Meme Contest</option>
                                    </select>
                                </div>
                                <div class="text-center">
                                    <button class="btn btn-show-result" onClick={handelSubmit} type="submit">Show Result</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventResult;