import React from 'react';
import './Avatar.css';
const Avatar = (props) => {
    return(
        <div className = {`avatar ${props.large ? 'large' :  props.medium ? 'medium' : 'small'}`}>
            <img src={(props.src)} alt=''/>
        </div>
    );
}

export default Avatar;