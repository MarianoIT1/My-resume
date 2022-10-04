import React from 'react';
import s from './Whatido.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faObjectGroup, faCode, faPaintBrush, faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import WIDCard from "./WIDCard.jsx"
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';
import Title from "./Title"
import weatherImg from "./img/mitWeather.png"
import projectImg from "./img/underconstruction.png"

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum harum maxime provident eos blanditiis ea beatae reiciendis natus totam?"


export default function Whatido(props) {
    var whatido = 
    <section className={s.whatido}>
    <Fade bottom>
        <div className={s.fragment}>
            <Title id={'whatido'} value='What I do' />      
            <div className={s.WIDGrid}>
                <WIDCard icon={<FontAwesomeIcon icon={faObjectGroup} />} title={'Frontend development'} text={"I'm fluent in React, Redux and GraphQL, and I'm actively working on learning how to use new tools on a constant basis."}/>
                <WIDCard icon={<FontAwesomeIcon icon={faCode} />} title={'Backend development'} text={"I have knowledge in Node.js, JavaScript (ES6), Phython, and I plan to learn data and server management in the next year."}/>
                <WIDCard icon={<FontAwesomeIcon icon={faPaintBrush} />} title={'Graphic design'} text={"I know how to operate the entire Adobe photo and video editing suite (Photoshop, Illustrator, Premier and After Effects). I made brand designs and printed material, both packaging and advertising."}/>
                <WIDCard icon={<FontAwesomeIcon icon={faPeopleGroup} />} title={'Leadership and teamwork'} text={"During my professional career I worked together with a team in my charge, I led groups of up to 50 members under joint objectives. I have good communication and know how to resolve conflicts."}/>
            </div>
        </div>
        <div className={s.fragment}>
            <Title value='Proyects' />   
            <div className={s.ProjectCont}>
                <ProjectCard img={weatherImg} title={'mitWeather'} subtitle={ "Get the current weather and forecast for a city located anywhere. This was one of my first project, recently got a update with Redux and a best look with CSS" } ghLink={"https://github.com/MarianoIT1/mitWeather"} link={"https://mit-weather.vercel.app/"}/>
                <ProjectCard img={projectImg} title={'Coming soon'} subtitle={lorem} />
                <ProjectCard img={projectImg} title={'Coming soon'} subtitle={lorem}/>
            </div>
        </div>
    </Fade>
    </section>
    return whatido;
}