import React from 'react';
import './Skill-item.css';

const SkillItem = (props) => {
    const skillClass = (percentage) => {
        return !percentage ? 'p-0' : 'p-'+percentage;
    }
    return(
        <div className="skill-item">
            <div className="skill-name">
                <div className="name">{props.skillName || 'Skill'}</div>
            </div>
            <div className={`proficieny`}>
                <div className={ `percentage ${skillClass(props.percentage)}`}></div>
                <div className="percentageValue">{props.percentage}%</div>
            </div>
        </div>
    );
}

export default SkillItem;