import React from 'react';
import Title from './Title';
import s from './Whoiam.module.css';
import Zoom from 'react-reveal';

export default function Whoiam(props) {
    var whoiam = 
    <Zoom bottom>
    <section className={s.whoiam}>
        <Title value="Who I am" id="whoiam"/>
            <div className={s.body}>
                <p>
                I am a proactive and enthusiastic person, passionate about technology and design, and hungry for new knowledge. I was always interested in software development and when I finished high school I studied systems engineering for 3 years.
                <br/><br/>
                Then, life took me down other paths where I successfully started gastronomic businesses, but I never stopped being interested in what I loved.
                <br/><br/>
                I recently decided to start over, I'm finishing a full-stack coding Bootcamp and I want to start developing my career in the world of development and technology.
                <br/><br/>
                When I'm not in front of a computer, I like to go for a walk with Balti 🐶 in the park and meet up with friends for drinks.
                </p>
            </div>
    </section>
    </Zoom>;
    return whoiam;
}