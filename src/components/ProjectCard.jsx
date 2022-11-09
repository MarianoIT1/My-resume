import React from "react";
import s from "./ProjectCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

export default function ProjectCard(props) {
    var projectcard =
    <div className={s.card}>   
        <div className={s.cardHead}>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className={s.cardBody}>
            <h4>{props.title}</h4>
            <p>{props.subtitle}</p>
        </div>
        <div className={s.cardFooter}>
            {props.ghLink && <a href={props.ghLink} target="_blank"><FontAwesomeIcon icon={faGithub} className={s.icon}/></a>}
            <a href={props.link} target="_blank"><FontAwesomeIcon icon={ props.store ? faShoppingBag : faLink} className={s.icon}/></a>
        </div>
    </div>;
    return projectcard;
}