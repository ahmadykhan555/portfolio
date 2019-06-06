import React from 'react';
import './Welcome.css';

const Welcome = (props) => {
    return(
        <div className="welcome">
            <div className="welcome-content">
                <div className="welcome-text">
                    <p>Hello, I'm <span className="developer-name">{props.developerName}</span>.</p>
                    <p>I'm a {props.expertise}.</p>
                </div>
                <div className="view-my-work">View my work <span className="arrow">&#x2192;</span></div>
            </div>
        </div>
    );
}

export default Welcome;