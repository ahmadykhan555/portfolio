import React from 'react';
import './About.css';
import PerksCard from '../PerksCard/PerksCard';
import Avatar from '../Avatar/Avatar';
import SkillItem from '../Skill-item/Skill-item';

const About = (props) => {
    return (
        <div className="about">
            <div className="title">About</div>
            <div className="about-content">
                <div className="perks">
                    {props.pros.map(pro => <PerksCard tag={pro.tag} shortDesc={pro.shortDesc}/>)}
                </div>
                <div className="skills-detail">
                    <div className="skills-container">
                        <Avatar src='/portfolio/src/assets/dp.jpg'  medium></Avatar>
                        <div className="avatar-text">Who is this guy?</div>
                        <div className="skils-list">
                            {props.skills.map(skill => <SkillItem skillName={skill.title} percentage={skill.proLevel}></SkillItem>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;