import React, { useState } from 'react';
import './EventResult.css'
const EventResult = () => {
    const [catagori, setCatagori] = useState({});

    const handelChange = (e) => {
        setCatagori({ ...catagori, [e.target.id]: e.target.value })
    }

    const handelSubmit = () => {
        console.log(catagori);
    }
    return (
        <section className='py-5 my-5' >
            <div className="bg-cover event-result-form">
                <div className="overlay">
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-12 section-intro text-center" data-aos="fade-up">
                            <h3 className='text-center pt-5  catagori-welcome'>Welcome To CALCHUNT 1.0</h3>

                            <div class="divider"></div>
                            <p className='pb-2'>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered<br />
                                alteration in some form, by injected humour, or randomised words which don't look even slightly
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-8 mx-auto" data-aos="fade-up">
                            <form action="#" class="row g-4">

                                <div class="form-group col-md-12">
                                    <input type="text" class="form-control" placeholder="Subject" />
                                </div>

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
                                    <button class="btn btn-show-result" type="submit">Show Result</button>
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