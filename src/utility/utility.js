const time_difference = (time1, time2) => {
    const secondTime = time2 - time1
    return (secondTime / (1000 * 60));
}
const selectFormLik = (catagori) => {
    if (catagori.catagori == 'Junior') {
        if (catagori.segment == 'mean-contest') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSdgOcThqrHhvbWVyO03teF4S9VLR24BDqziP0HWj55SzOC4Hg/viewform?embedded=true"] //DONE
        } else if (catagori.segment == 'integration') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSeF3Z7ysS232DKb0_Cm8tyr7vHPiieVgTUxnPEhTdUG835F8w/viewform?embedded=true"] //done
        }
        else if (catagori.segment == 'differentiation') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSdQVyyG-fHAD_6Ovd_i48MGS17N2NJ_Ihh82gUwPn_jlX_brg/viewform?embedded=true"] //done
        }
        else if (catagori.segment == 'math-olympiad') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSc8wZiEqDcZ05ORnEoaT40YrKrEB_OSpXKS2-Kb1BFoqQHRvw/viewform?embedded=true"] //done
        }
        else {

            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSdMcfWLFTSEwgjgj0aFlE9RdKNCOjbV_aZyPjU4qnLM-rHr_g/viewform?embedded=true"] //done
        }
    }

    // senior
    else {
        if (catagori.segment == 'mean-contest') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLScPM9dfWb1tHHLuZg68Tdc3tiEfyLBtHl4pDJG454aLxJyNzA/viewform?embedded=true"] //DONE
        } else if (catagori.segment == 'integration') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSdlsQ8M0nmKFHltAmRXb3QLVqupuVP3xzrvJNXDM6sxj5nJlw/viewform?embedded=true"] //done
        }
        else if (catagori.segment == 'differentiation') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLScmXV9YJmTEpdIzPxp9OZbCtQVgk7kKKjqrLMrmo7QlJfts-g/viewform?embedded=true"] //done
        }
        else if (catagori.segment == 'math-olympiad') {
            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLSeR6W3WsJLdCkWO7upkZWQur9F1nqjvVGsEX0TtLwODQyAUpQ/viewform?embedded=true"] // DONE
        }
        else {

            return ['junior and mean', "https://docs.google.com/forms/d/e/1FAIpQLScK9MrCA5F5Kxh9sNihhbPol-FzxnbAsEQbVoyrysyQzwOl3g/viewform?embedded=true"] // done
        }
    }
}
const ShowResultImage = (catagori) => {
    if (catagori.catagori == 'Junior') {
        if (catagori.segment == 'integration') {
            return ['junior and integration', "https://i.ibb.co/9tj2zP3/Integration-Bee-Junior.png"] // done
        }
        else if (catagori.segment == 'differentiation') {
            return ['junior and differentiation', "https://i.ibb.co/tQqfmYQ/Differentiation-Bee-Junior.png"] // done
        }
        else if (catagori.segment == 'math-olympiad') {
            return ['junior and math-olympiad', "https://i.ibb.co/NWy3smj/Math-Olympiad-Junior.png"] // done
        }
        else {

            return ['junior and calculas', "https://i.ibb.co/QrXXtp8/Application-of-Calculus-Junior.png"] //
        }
    }

    // senior
    else {
        if (catagori.segment == 'mean-contest') {
            return ['junior and mean', "https://i.ibb.co/ChTS2QQ/Meme-Contest.png"] //done
        } else if (catagori.segment == 'integration') {
            return ['junior and mean', "https://i.ibb.co/kDQcSrB/Integration-Bee-Senior.png"] //done
        }
        else if (catagori.segment == 'differentiation') {
            return ['junior and differentiation', "https://i.ibb.co/7YCHr0s/Differentiation-Bee-Senior.png"] //done
        }
        else if (catagori.segment == 'math-olympiad') {
            return ['junior and mean', "https://i.ibb.co/4TVNHzz/Math-Olympiad-Senior.png"] // 
        }
        else {

            return ['junior and mean', "https://i.ibb.co/BsXdT7g/Application-of-Calculus-Senior.png"] // 
        }
    }
}
export { time_difference, selectFormLik, ShowResultImage }





