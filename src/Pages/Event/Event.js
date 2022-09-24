import React, { useEffect } from 'react';
import './Event.css'
const Event = () => {
    const sheetdb = require("sheetdb-node");
    const client = sheetdb({ address: 'c1dje3yxjvn5v' });



    useEffect(() => {
        // client.create({ email: "William", starting_time: 25, ending_time: 30 })
        //     .then(function (data) {
        //         console.log(data);
        //     }, function (err) {
        //         console.log(err);
        //     });


    }, [])
    return (
        <div>
            <h2 className='mb-5'>Welcom To Mathalogy</h2>
            <div id="iframe-container">
                <iframe
                    title='unique_title'
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeb3W3T2gme6EISCQSuhGhFCbRaN0YwjFHIMMeHuMbpm3VXSA/viewform?embedded=true"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >Loading…</iframe
                >
            </div>
        </div>
    );
};

export default Event;