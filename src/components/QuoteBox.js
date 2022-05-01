import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json'

const long = quotes.length
const ramdomizer = () => Math.floor(Math.random() * long);
const Colours = [ "red", "green", "blue", "magenta", "orange", "purple"]

const QuoteBox = () => {

    const [ quoter, setQuoter ] = useState(quotes[ramdomizer()])
    const ramdomQuoter = () => setQuoter(quotes[ramdomizer()])
    const backgounder = Colours[Math.floor(Math.random()*Colours.length)]
    document.body.style.backgroundColor = backgounder

    return (
        <div className="quote-container" style={{color: backgounder}}>
            <span><i className="fa fa-solid fa-quote-left fa-4x"></i><p>{quoter.quote}</p></span>
            <br />
            <p>{quoter.author}</p>
            <div><button onClick={ramdomQuoter} style={{color: backgounder}}><i class="far fa-solid fa-circle-chevron-right fa-2x"></i></button></div>
            {/* <i class="fa fa-solid fa-quote-left fa-3x"></i>
            <span>{quoter.quote}</span>
            <p>{quoter.author}</p>
            <button onClick={ramdomQuoter}><i class="fa fa-solid fa-circle-chevron-right"></i></button> */}
        </div>
    );
};

export default QuoteBox;