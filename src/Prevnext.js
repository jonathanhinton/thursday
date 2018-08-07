import React from 'react';
import './App.css';

const Prevnext = ({totalSections, currPosition, prevClick, nextClick}) => {
    return(
    <div className="button-group">
        <button disabled={currPosition === 0} 
                onClick={ () => prevClick(currPosition) }>
                Previous
        </button>
        <button disabled={currPosition === (totalSections - 1)}
                onClick={ () => nextClick(currPosition) }>
                Next
        </button>
    </div>
    )
}

export default Prevnext