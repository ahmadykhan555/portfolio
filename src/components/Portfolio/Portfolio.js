import React from 'react';
import './Portfolio.css';
import Welcome from '../WelcomePage/Welcome';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Projects from '../Projects/Projects';

class Portfolio extends React.Component {
    state = {
        developerName: 'Ahmad Yar Khan',
        expertise: 'Full Stack Web Developer',
        pros: [
            {
                tag: 'fast',
                shortDesc: 'Fast load times and lag free interaction, my highest priority.'
            },
            {
                tag: 'Responsive',
                shortDesc: 'My layouts will work on any device, big or small.'
            },
            {
                tag: 'Intuitive',
                shortDesc: 'Strong preference for easy to use, intuitive UX/UI.'
            },
            {
                tag: 'Dynamic',
                shortDesc: 'Websites don\'t have to be static, I love making pages come to life.'
            },
        ],
        skills: [
            { 
                title: 'Node Js', 
                proLevel: 80
            },
            { 
                title: 'Angular Js', 
                proLevel: 75
            },
            { 
                title: 'React Js', 
                proLevel: 25
            },
            { 
                title: 'Ionic', 
                proLevel: 60
            },
            { 
                title: 'Vue Js', 
                proLevel: 50
            },
            { 
                title: 'Android', 
                proLevel: 50
            },
        ],
        projects: [
            {
                title: 'Student Book',
                des: ' A student book project',
                url: 'https://www.google.com.pk'
            },
            {
                title: 'One screen hype',
                des: ' A video conferencing project using WebRTC',
                url: 'https://hype.claryicon.com'
            },
            {
                title: 'HireNinja',
                des: 'Online job placement platform',
                url: 'https://hireninja.com'
            },
            {
                title: 'HireNinja',
                des: 'Online job placement platform',
                url: 'https://hireninja.com'
            },
            {
                title: 'HireNinja',
                des: 'Online job placement platform',
                url: 'https://hireninja.com'
            },
        ],
        projectCategories: []
    };
    
    render() {
        return (
            <div className="portfolio">
                <Welcome 
                    developerName={this.state.developerName}
                    expertise={this.state.expertise}>
                </Welcome>
                <Navbar></Navbar>
                <About 
                    pros={this.state.pros}
                    skills={this.state.skills}></About>
                <Projects projects={this.state.projects}></Projects>
            </div>
        );
    }
}

export default Portfolio;