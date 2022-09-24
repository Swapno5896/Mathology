const time_difference = (time1, time2) => {
    const secondTime = time2 - time1
    return (secondTime / (1000 * 60));
}

const selectFormLik = (catagori) => {
    if (catagori.catagori == 'Junior') {
        if (catagori.segment == 'mean-contest') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSeb3W3T2gme6EISCQSuhGhFCbRaN0YwjFHIMMeHuMbpm3VXSA/viewform?embedded=true"]
        } else if (catagori.segment == 'integration') {
            return ('junior and integration');
        }
        else if (catagori.segment == 'differentiation') {
            return ('junior and differentiation');
        }
        else if (catagori.segment == 'math-olympiad') {
            return ('junior and math-olympiad');
        }
        else {

            return ('junior application-of-calculu');
        }
    }
    else {
        if (catagori.segment == 'mean-contest') {
            return ('senior and mean');
        } else if (catagori.segment == 'integration') {
            return ('senior and integration');
        }
        else if (catagori.segment == 'differentiation') {
            return ('senior and differentiation');
        }
        else if (catagori.segment == 'math-olympiad') {
            return ('senior and math-olympiad');
        }
        else {

            return ('senior application-of-calculu');
        }
    }
}
export { time_difference, selectFormLik }