import React from 'react';
import './App.css';

const Sidebar = ({myText, onClick}) => {
    return(
    <div className="menu">
        <ul className="menu">
            {myText.book.content.map(content => 
                <li key= {content.position} 
                    id={`toc-${content.position}`} 
                    onClick={ () => onClick(content.position)}>
                    {content.heading}
                </li>        
                )
            }
        </ul>
    </div>
    )
}


export default Sidebar