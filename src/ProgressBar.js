import React from 'react';
import './App.css';

const ProgressBar = () => {
    
    window.onscroll = function() {updateProgress()};

    function updateProgress() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("chapterBar").style.width = scrolled + "%";
    
    }

    return(
        <div className="progress-wrapper">
            <div className="progress-bar" id="chapterBar"></div>
        </div>
    )
}


export default ProgressBar