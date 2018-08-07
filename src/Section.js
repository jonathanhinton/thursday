import React from 'react';
import './App.css';

const Section = ({myText, currPosition}) => {
    const chapter = myText.book.content[currPosition];

    return(
        <div className="section-wrapper">
            <div className={chapter.section} id={`body-${chapter.position}`}>
                {chapter.body.map((body, index) => (
                    <p key={`para-${chapter.position}-${index}`} id={`para-${chapter.position}-${index}`}>{body}</p>
                ))}
            </div>
        </div>
    )
}


export default Section