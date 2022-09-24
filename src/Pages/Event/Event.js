import React from 'react';
import './Event.css'
const Event = () => {

    const ifremLink = localStorage.getItem("ifremLink");
    console.log(`from event, link : ${ifremLink}`);

    setTimeout(() => {
        document.getElementById('refIframe').src = ""
        console.log('time out');
    }, (60000 * 45))

    setTimeout(() => {
        alert("Hurry Up, You have only 5 minute");
    }, (60000 * 40))

    setTimeout(() => {
        alert("1 minute left, Submit it now or your submission will not be counted");
    }, (60000 * 44))

    return (
        <div>
            <h2 className='mb-5 mt-5 pt-4'>Welcome To CALCHUNT 1.0</h2>
            <div id="iframe-container" >
                <iframe id="refIframe"
                    title='unique_title'
                    src={ifremLink}
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                    aria-disabled="true"
                >Loading…</iframe>
            </div>
        </div>
    );
};

export default Event;