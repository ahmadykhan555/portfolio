import './PerksCard.css';
import React from 'react';
import HexCell from '../HexCell/HexCell';
const PerksCard = (props) => {
    return(
        <div className="perks-card">
            <HexCell></HexCell>
            <div className="perks-card-title">{props.tag}</div>
            <div className="short-desc">{props.shortDesc}</div>
        </div>
    );
}

export default PerksCard;